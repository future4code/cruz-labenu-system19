import {Request, Response} from 'express';
import connection from '../connection';

export default async function removerEstudante(
    req: Request,
    res: Response
) {

    try {

    const {id} = req.params; 

    await connection("student")
    .delete()
    .where({id});

    res.status(200).send("Estudante removido com sucesso!");
    } catch (err) {
        res.status(500).send("Unexpected server error");
    };
};