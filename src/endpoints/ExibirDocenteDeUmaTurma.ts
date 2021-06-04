import {Request, Response} from 'express';
import connection from '../connection';
import { Teacher } from '../types';

export default async function exibirDocenteDeUmaTurma(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome} = req.query;

    const [docentes]: Teacher[] = await connection.raw(`
        SELECT teacher.nome AS docente, class.nome AS turma
        FROM teacher
        JOIN class ON turma_id = class.id
        WHERE class.nome = '${nome}';
    `);
    
    res.send(docentes);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected server error");
    }; 
};