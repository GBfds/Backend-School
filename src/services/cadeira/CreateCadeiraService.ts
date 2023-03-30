import prismaClient from "../../prisma";

interface ReqCadeiras{
    nome: string;
    slug: string;
    dt_inicio: Date;
    dt_fim: Date;
    carga_horaria: number;
    id_professor: string;
}

class CreateCadeiraService{
    async execute({nome, slug, dt_inicio, dt_fim, carga_horaria, id_professor}:ReqCadeiras){
        const checkCad = await prismaClient.cadeira.findFirst({
            where:{
                nome: nome,
                id_professor: id_professor
            }
        })

        if (checkCad){
            throw new Error("Esse professor já possui uma cadeira com esse nome");
        }

        const newCadeira = await prismaClient.cadeira.create({
            data:{
                nome: nome,
                slug: slug,
                dt_inicio: dt_inicio,
                dt_fim: dt_fim,
                carga_horaria: carga_horaria,
                id_professor: id_professor
            }
        })

        return newCadeira;
    }
}

export {CreateCadeiraService};