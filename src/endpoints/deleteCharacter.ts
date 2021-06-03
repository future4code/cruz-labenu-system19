import {Request, Response} from 'express';
import connection from '../connection';

export default async function deleteCharacter(
    req: Request,
    res: Response
) {

    try {

    const {id} = req.params; //path params, pode receber dados restritos

    await connection("character")
    .delete()
    .where({id});

    res.status(200).end();
    } catch (err) {
        res.status(500).send("Unexpected server error");
    }
};