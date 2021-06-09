import {Request, Response} from 'express';
import connection from '../connection';
import { Class } from '../types';

export default async function getAllClass(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome, orderBy, orderType, page} = req.query;

    if(!nome) {
        throw new Error("Nome precisa ser informado!");
    };

    const resultsPerPage = 5;
    const offset = resultsPerPage * (Number(page) - 1);

    if(nome && orderBy && orderType && page) {
        const allClass: Class[] = await connection("class")
        .where("nome", "LIKE", `%${nome}%`)
        .orderBy(orderBy as string || "name", orderType as string)
        .offset(offset);
        res.status(200).send(allClass)
    };

    const turma: Class[] = await connection("class")
    .where("nome", "LIKE", `%${nome}%`);
    
    res.status(200).send(turma);

    } catch (error) {
        res.status(500).send("Unexpected server error");
    }; 
};