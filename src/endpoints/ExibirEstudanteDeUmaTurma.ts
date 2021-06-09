import {Request, Response} from 'express';
import connection from '../connection';
import { Student } from '../types';

export default async function exibirEstudanteDeUmaTurma(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome} = req.query;

    const [estudantes]: Student[] = await connection.raw(`
        SELECT student.nome AS aluno, class.nome AS turma
        FROM student
        JOIN class ON turma_id = class.id
        WHERE class.nome = '${nome}';
    `);
    
    res.send(estudantes);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected server error");
    }; 
};