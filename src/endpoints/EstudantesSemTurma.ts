import {Request, Response} from 'express';
import connection from '../connection';

export default async function estudanteSemTurma(
    req: Request,
    res: Response
) {

    try {

    const [estudanteSemTurma] = await connection.raw(`
        SELECT *
        FROM student
        WHERE turma_id IS null;
    `);

    res.status(200).send(estudanteSemTurma);
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Unexpected server error");
    };
};