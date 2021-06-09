import {Request, Response} from 'express';
import connection from '../connection';
import { Teacher } from '../types';

export default async function getAllTeachers(
    req: Request,
    res: Response
): Promise<void> {

    try {

    const {nome, orderBy, orderType, page} = req.query;

    const resultsPerPage = 5;
    const offset = resultsPerPage * (Number(page) - 1);

    const allTeachers = await connection("teacher");

    if(!nome ||!orderBy ||!orderType ||!page) {
        res.status(200).send(allTeachers);
    };

    const docentes: Teacher[] = await connection("teacher")
    .where("nome", "LIKE", `%${nome}%`)
    .orderBy(orderBy as string || "name", orderType as string)
    .offset(offset);
    
    res.send(docentes);

    } catch (error) {
        res.status(500).send("Unexpected server error");
    }; 
};