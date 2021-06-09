import {Request, Response} from 'express';
import connection from '../connection';
import {Student} from '../types'

export default async function PegarIdadeEstudanteId(
    req: Request,
    res: Response
): Promise<void> {

    try {

    let {id} = req.params;

    if(!id) {
        throw new Error("ID deve conter números!");
    };

    const [estudanteIdade]: Student[] = await connection.raw(`
        SELECT nome,
        FLOOR(DATEDIFF(current_timestamp, data_nasc)/365) AS idade
        FROM student
        WHERE id = ${id};
    `);


    res.status(201).send(estudanteIdade);
    } catch (err) {
        console.log(err)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};