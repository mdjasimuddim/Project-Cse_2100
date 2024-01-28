import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try{
        const prisma = new PrismaClient();
        let reqBody = await req.json();
        const count = await prisma.users.count({where:{
            email:reqBody['email'],
            otp:reqBody['otp']
        }})
        if(count === 1){
            await prisma.users.update({
                where:{email:reqBody['email']},
                data:{
                    otp:"0",
                    password:reqBody['password']
                }
            })
        }
        return NextResponse.json(
            {
                status:"success",
                data:"Password Reset Success"
            }
        )
    } catch(e){
        return NextResponse.json({
            status:'fail',
            data:e
        })
    }
}