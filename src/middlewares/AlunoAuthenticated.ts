import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prismaClient from "../prisma";

interface PayLoad{
    sub: string
}

export async function AlunoAuthenticated(req: Request,res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken){
        res.status(400).end()
    }

    const [, token] = authToken.split(" ")

    try {
        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        const userAluno = await prismaClient.aluno.findFirst({
            where:{
                id: sub
            }
        })

        if (!userAluno){
            res.status(400).end()
        }

        req.user_id = sub;
        return next();
    } catch {
        return res.status(400).end()
    }
}