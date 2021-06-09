import {Request, Response} from 'express';
import connection from '../connection';

export default async function removerEstudanteDaTurma(
    req: Request,
    res: Response
) {

    try {

    const {id} = req.params; 

    await connection.raw(`
        UPDATE student
        SET turma_id = null
        WHERE id = ${id};
    `);

    res.status(200).send("Estudante removido da turma com sucesso!");
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Unexpected server error");
    };
};