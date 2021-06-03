import {Request, Response} from 'express';
import connection from '../connection';
import { Student } from '../types';

export default async function getAllStudents(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome, orderBy, orderType, page} = req.query;

    const resultsPerPage = 5;
    const offset = resultsPerPage * (Number(page) - 1);

    const allStudents = await connection("student");

    if(!nome ||!orderBy ||!orderType ||!page) {
        res.status(200).send(allStudents)
    };

    const estudantes: Student[] = await connection("student")
    .where("nome", "LIKE", `%${nome}%`)
    .orderBy(orderBy as string || "name", orderType as string)
    .offset(offset);
    
    res.send(estudantes);

    } catch (error) {
        res.status(500).send("Unexpected server error");
    }; 
};