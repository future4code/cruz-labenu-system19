import {Request, Response} from 'express';
import connection from '../connection';
import {Hobbies, Student} from '../types'

export default async function criarHobby(
    req: Request,
    res: Response
): Promise<void> {

    try {

    let {nome} = req.body;

    if(!nome) {
        throw new Error("Campos está vazio! Por favor, informe os dados corretamente.");
    };

    const hobbies: Hobbies[]= await connection("hobbies")
    .insert({nome});

    res.status(201).send(
        "Hobby criado com sucesso!"
    );
    } catch (err) {
        console.log(err)
        res.status(500).send("Ocorreu um erro inesperado!");
    };
};