import {Request, Response} from 'express';
import connection from '../connection';
import { Class } from '../types';

export default async function getAllClass(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome, orderBy, orderType, page} = req.query;

    const resultsPerPage = 5;
    const offset = resultsPerPage * (Number(page) - 1);

    const allClass = await connection("class");

    if(!nome ||!orderBy ||!orderType ||!page) {
        res.status(200).send(allClass)
    };

    const turma: Class[] = await connection("class")
    .where("nome", "LIKE", `%${nome}%`)
    .orderBy(orderBy as string || "name", orderType as string)
    .offset(offset);
    
    res.send(turma);

    } catch (error) {
        res.status(500).send("Unexpected server error");
    }; 
};