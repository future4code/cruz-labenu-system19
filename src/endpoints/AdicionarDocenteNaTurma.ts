import {Request, Response} from 'express';
import connection from '../connection';
import {Teacher} from '../types'

export default async function adicionarDocenteNaTurma(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome, turma_id} = req.body;
    const {id} = req.params;

    if(!nome) {
        throw new Error("Docente não encontrado!");
    };

    const docentes: Teacher[]= await connection.raw(`
        UPDATE class
        SET turma_id = '${turma_id}'
        WHERE id = '${id}';
    `)

    res.status(201).send(
        "Docente adicionado à turma com sucesso!"
    );
    } catch (err) {
        console.log(err)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};