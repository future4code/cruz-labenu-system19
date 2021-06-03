import {Request, Response} from 'express';
import connection from '../connection';
import {Student} from '../types'

export default async function criarEstudante(
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


    const estudantes: Student[]= await connection("student")
    .insert({nome, email, data_nasc, turma_id});

    // const estudantes: Student[]= await connection.raw(`
    //     INSERT IGNORE INTO class (nome, email, data_nasc)
    //     VALUES ('${nome}', '${email}', '${data_nasc}');
    // `);

    res.status(201).send(
        "Estudante criado com sucesso!"
    );
    } catch (err) {
        console.log(err)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};