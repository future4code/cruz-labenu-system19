import {Request, Response} from 'express';
import connection from '../connection';
import {Teacher} from '../types'

export default async function adicionarDocenteNaTurma(
    req: Request,
    res: Response
): Promise<void> {

    try {

    let {nome, email, data_nasc, turma_id} = req.body;

    if(!nome || !email || !data_nasc) {
        throw new Error("Campos estão vazios! Por favor, informe os dados corretamente.");
    };

    if (!email.includes("@")) {
        res.statusCode = 406
        throw new Error('Formato de email inválido');
     };
    
    let incrementID = 6;
    turma_id = incrementID++;

    const docentes: Teacher[]= await connection("teacher")
    .insert({nome, email, data_nasc, turma_id});

    res.status(201).send(
        "Docente criado com sucesso!"
    );
    } catch (err) {
        console.log(err)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};