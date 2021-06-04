import {Request, Response} from 'express';
import connection from '../connection';

export default async function mudarTurmaDeModulo(
    req: Request,
    res: Response
) {

    try {

    const {id} = req.params; 
    const {modulo} = req.body;

    await connection.raw(`
        UPDATE class
        SET modulo = ${modulo}
        WHERE id = ${id};
    `);

    res.status(200).send("Módulo atualizado com sucesso!");
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Unexpected server error");
    };
};