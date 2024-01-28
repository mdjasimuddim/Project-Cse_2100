import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
export async function GET(req,res) {
    try{
        const prisma=new PrismaClient();
        const result=await prisma.categories.findMany({select:{id:true,name:true}})
        // const result = await prisma.categories.createMany({
        //     data:[
        //         {
        //             name:'Sports'
        //         },
        //         {
        //             name:'Business'
        //         },
        //         {
        //             name:'Entertainment'
        //         },
        //         {
        //             name:'Life & Living'
        //         },
        //         {
        //            name : 'Youth' 
        //         },
        //         {
        //             name : 'Tech & Startup'
        //         },
        //         {
        //             name : 'Multimedia'
        //         }
        //     ]
        // })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}