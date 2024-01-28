import React from 'react';
import PlainLayout from "@/components/master/Plain-Layout";
import Hero from "@/components/news/Hero";
import PopularList from "@/components/news/PopularList";
import NewsList from "@/components/news/NewsList";
import { PrismaClient } from '@prisma/client';

async function getData(req, res){
    let Slider= (await (await fetch(`${process.env.HOST}/api/news/type?type=Slider`)).json())['data']
    let Featured= (await (await fetch(`${process.env.HOST}/api/news/type?type=Featured`)).json())['data']
    let Popular= (await (await fetch(`${process.env.HOST}/api/news/type?type=Popular`)).json())['data']
    let Latest= (await (await fetch(`${process.env.HOST}/api/news/latest`)).json())['data']
    // let prisma = new PrismaClient();
    // let {searchParams}=new URL(req.url);
    // let type= searchParams.get('type');
    // let Slider = await prisma.news_list.findMany({
    //   where:{type:'Sider'},
    //   select:{id:true,title:true,short_des:true,img1:true,img2:true,img3:true,img4:true,createdAt:true}
    // })

    // let Featured = await prisma.news_list.findMany({
    //   where:{type:'Featured'},
    //   select:{id:true,title:true,short_des:true,img1:true,img2:true,img3:true,img4:true,createdAt:true}
    // })

    // let Popular = await prisma.news_list.findMany({
    //   where:{type:'Popular'},
    //   select:{id:true,title:true,short_des:true,img1:true,img2:true,img3:true,img4:true,createdAt:true}
    // })
    
    // let Latest =await prisma.news_list.findMany({
    //   take:40,
    //   select:{id:true,title:true,short_des:true,img1:true,img2:true,img3:true,img4:true,createdAt:true}
    // })
    return {Slider:Slider, Featured:Featured, Popular:Popular, Latest:Latest}
}



const Page = async () => {
    const data=await getData();
    // console.log(data['Slider']);
    return (
        <PlainLayout>
            <Hero featured={data['Featured']} slider={data['Slider']} />
            <div className="container mt-4">
                <h5>LATEST</h5>
                <hr/>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
                        <NewsList latest={data['Latest']}/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
                        <PopularList popular={data['Popular']}/>
                    </div>
                </div>
            </div>
        </PlainLayout>
    );
};

export default Page;