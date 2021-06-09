import {Request, Response} from 'express';
import connection from '../connection';
import {Student, Student_Hobbies} from '../types';

export default async function adicionarHobbyAoEstudante(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {estudante_id, passatempo_id} = req.body;

    if(!estudante_id ||!passatempo_id) {
        throw new Error("ID não encontrado");
    };

    const hobbiesDoEstudante: Student_Hobbies[]= await connection.raw(`
        INSERT INTO student_hobbies
        VALUES ('${estudante_id}','${passatempo_id}');
    `)

    res.status(201).send(
        "Hobbies adicionados ao Estudante com sucesso!"
    );
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};