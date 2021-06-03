import {Request, Response} from 'express';
import connection from '../connection';
import {Class} from '../types'

export default async function criarTurma(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome, data_inicio, data_final, modulo} = req.body;

    if(!nome || !data_inicio || !data_final || !modulo) {
        throw new Error("Campos estão vazios! Por favor, informe os dados corretamente.");
    };

    //trava para data_inicio e data_final

    const turma = await connection("class")
    .insert({nome, data_inicio, data_final, modulo});

    res.status(201).send(
        "Turma criada com sucesso!"
    );
    } catch (err) {
        console.log(err)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};