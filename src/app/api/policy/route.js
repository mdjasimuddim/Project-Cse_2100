import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client"

export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        let {searchParams}=new URL(req.url);
        let type= searchParams.get('type');
        // const result=await prisma.policies.createMany({
        //     data:[
        //         {
        //             long_des:'A policy is a set of ideas or plans that is used as a basis for making decisions, especially in politics, economics, or business. ... plans which include changes in foreign policy and economic reforms.',
        //             type:'policy'
        //         },
        //         {
        //             long_des:'Terms of Service set the way in which your product , service or content may be used, in a legally binding way. They are crucial for protecting your content from a copyright perspective as well as for protecting you from potential liabilities.',
        //             type:'terms'
        //         },
        //         {
        //             long_des:'A policy is a set of ideas or plans that is used as a basis for making decisions, especially in politics, economics, or business. ... plans which include changes in foreign policy and economic reforms.',
        //             type:'policy'
        //         },
        //         {
        //             long_des:'Terms of Service set the way in which your product , service or content may be used, in a legally binding way. They are crucial for protecting your content from a copyright perspective as well as for protecting you from potential liabilities.',
        //             type:'terms'
        //         }
        //     ]
        // })
        const result=await prisma.policies.findMany({
            where:{type:type}
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}