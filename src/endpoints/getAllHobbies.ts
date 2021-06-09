import {Request, Response} from 'express';
import connection from '../connection';
import { Hobbies } from '../types';

export default async function getAllHobbies(
    req: Request,
    res: Response
): Promise<void> {

    try {

    // const [hobbies] = await connection("hobbies");

    const [hobbies]: Hobbies[] = await connection.raw(`
        SELECT * FROM hobbies;
    `)
    
    res.send(hobbies);

    } catch (error) {
        res.status(500).send("Unexpected server error");
    }; 
};