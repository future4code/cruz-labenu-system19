import {Request, Response} from 'express';
import connection from '../connection';
import { Student_Hobbies } from '../types';

export default async function exibirEstudantePorMesmoHobby(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {passatempo_id} = req.query;

    const [hobbiesDoEstudante]: Student_Hobbies[] = await connection.raw(`
    SELECT student.nome AS aluno, hobbies.nome AS passatempo
    FROM student_hobbies
    JOIN hobbies ON passatempo_id = hobbies.id
    JOIN student ON estudante_id = student.id
    WHERE hobbies.id = ${passatempo_id};
    `);
    
    res.status(200).send(hobbiesDoEstudante);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Unexpected server error");
    }; 
};