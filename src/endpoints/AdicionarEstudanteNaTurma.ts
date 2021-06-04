import {Request, Response} from 'express';
import connection from '../connection';
import {Student} from '../types';

export default async function adicionarEstudanteNaTurma(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome, turma_id} = req.body;
    const {id} = req.params;

    if(!nome) {
        throw new Error("Estudante não encontrado!");
    };

    const estudantes: Student[]= await connection.raw(`
        UPDATE student
        SET turma_id = '${turma_id}'
        WHERE id = '${id}';
    `)

    res.status(201).send(
        "Estudante adicionado à turma com sucesso!"
    );
    } catch (err) {
        console.log(err)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};