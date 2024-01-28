import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";

export async function GET(req,res) {
    try{
        let {searchParams}=new URL(req.url);
        let catID= parseInt(searchParams.get('catID'));

        const prisma=new PrismaClient();
        //For Popular
        // const result = await prisma.news_list.createMany({
        //     data:[
        //         {
        //             title:'Women labour force in decline',
        //             short_des:'The number of unemployed people in the country increased by about 40,000 year-on-year in the fourth quarter of 2023 to 23.5 lakh as women stepped back from gainful employment.',
        //             img1:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/bw_ed_2_10.jpg',
        //             img2:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/27/videocapture_20240127-192910.jpg',
        //             img3:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/26/world_court.jpg',
        //             img4:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/25/whatsapp_image_2024-01-25_at_10.14.28_pm.jpeg',
        //             keywords:'unemployed people country',
        //             long_des:"The number of unemployed people in the country increased by about 40,000 year-on-year in the fourth quarter of 2023 to 23.5 lakh as women stepped back from gainful employment. Between October and December last year, the number of unemployed male workers decreased by 80,000 to 15.7 lakh while the unemployed female workers count increased by 1.2 lakh to 7.8 lakh, according to the latest quarterly Labour Force Survey of the Bangladesh Bureau of Statistics. The survey defined unemployed people as those who sought any types of work for pay or profit in the last 30 days, and did not work at least for an hour in the last seven days although they were ready to be employed. One of the reasons for the drop in female labour force participation could be automation in the garment sector, a major employer of the female workforce, said Zahid Hussain, a former lead economist of the World Bank's Dhaka office.Jobs that were done by female workers are now done by machines as many garment factories are undergoing automation at present. As a result, the demand for female workers in many factories is declining.",
        //             type:'Popular',
        //             catID:4
        //         },
        //         {
        //             title:'BNP, Jamaat trying to create unrest using social media: law minister',
        //             short_des:'Law, Justice, and Parliamentary Affairs Minister Anisul Huq today said BNP and Jamaat are trying to create unrest in the country by using social media on any trifling matter.',
        //             img1:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/bw_ed_2_10.jpg',
        //             img2:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/27/videocapture_20240127-192910.jpg',
        //             img3:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/26/world_court.jpg',
        //             img4:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/25/whatsapp_image_2024-01-25_at_10.14.28_pm.jpeg',
        //             keywords:'BNP Jamaat social media',
        //             long_des:"Law, Justice, and Parliamentary Affairs Minister Anisul Huq today said BNP and Jamaat are trying to create unrest in the country by using social media on any trifling matter. He made this comment at a mass reception organised by Brahmanbaria's Akhaura upazila unit Awami League at local upazila parishad ground this afternoon. Anisul was awarded the reception on becoming an MP and the law minister for the third consecutive term from Brahmanbaria-4 constituency (Kasba-Akhaura). The law minister also said, 'Every time we hold elections, BNP and Jamaat start conspiracy so that they can come to power through the back door.'At another event, Anisul said it would be good for the country if the Upazila Parishad election is held without the party symbol, reports BSS. While responding to journalists after inaugurating a building for the Jahanara Haque Public Library in Kasba, he said the people of the country want to participate in Upazila Parishad polls without party symbol.  ",
        //             type:'Popular',
        //             catID:1
        //     },
        //     {
        //         title:'Israel must prevent genocidal acts in Gaza: ICJ',
        //         short_des:'The World Court ordered Israel on Friday to prevent acts of genocide against the Palestinians and do more to help civilians, although it stopped short of ordering a ceasefire as requested by South Africa.',
        //         img1:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/bw_ed_2_10.jpg',
        //         img2:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/27/videocapture_20240127-192910.jpg',
        //         img3:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/26/world_court.jpg',
        //         img4:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/25/whatsapp_image_2024-01-25_at_10.14.28_pm.jpeg',
        //         keywords:'Israel Gaza Palestine',
        //         long_des:'The World Court ordered Israel on Friday to prevent acts of genocide against the Palestinians and do more to help civilians, although it stopped short of ordering a ceasefire as requested by South Africa. While the ruling denied Palestinian hopes of a binding order to halt the war in Gaza, it also represented a legal setback for Israel, which had hoped to throw out a case brought under the genocide convention established in the ashes of the Holocaust. The court found that Palestinians were protected under the convention, and that there was a case to be heard about whether their rights were being denied in a war that the court said was causing grievous humanitarian harm. It also called for Palestinian armed groups to release hostages captured in the October 7 attacks that precipitated the conflict. Palestinian officials largely hailed the decision. The Palestinian Foreign Ministry said it was a welcome reminder "no state is above the law". Sami Abu Zuhri, a senior Hamas official told Reuters the decision would contribute to "isolating the occupation and exposing its crimes in Gaza." Israeli Prime Minister Benjamin Netanyahu said that the court had "justly rejected the outrageous demand" to deprive Israel of what he called the "basic right to defend itself", by ordering it to halt fighting.',
        //         type:'Popular',
        //         catID:4
        //      }
        //     ]
        // })
        // For Featured
        // const result = await prisma.news_list.create({
        //     data:{
        //             title:'Teletalk was born 19 years ago. It turned a profit only for two years',
        //             short_des:'When Teletalk began its journey in December 2004, the mission was to acquire a significant market share of the booming mobile telecommunication sector of Bangladesh by providing countrywide network coverage.',
        //             img1:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/bw_ed_2_10.jpg',
        //             img2:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/27/videocapture_20240127-192910.jpg',
        //             img3:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/26/world_court.jpg',
        //             img4:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/25/whatsapp_image_2024-01-25_at_10.14.28_pm.jpeg',
        //             keywords:'fake api',
        //             long_des:'When Teletalk began its journey in December 2004, the mission was to acquire a significant market share of the booming mobile telecommunication sector of Bangladesh by providing countrywide network coverage.  The state-run operator made the debut amid much fanfare and generated a huge interest among the public in the early days by providing cost-effective packages. There was a time when market leader Grameenphone charged Tk 6 per minute for voice calls whereas Teletalk set the rate at Tk 4. The affordability extended to the price of Teletalk SIMs, which were notably lower than peers, leading to scenes of long queues at selling points as people sought to take advantage of the cost-effective service.',
        //             type:'Featured',
        //             catID:2
        //     }
        // })

        // For Slider
        // const result = await prisma.news_list.createMany(
        //     {
        //         data:
        //             [
        //                 {
        //                     title:'Babar fifty sets up 79-run win for Rangpur',
        //                     short_des:'Rangpur Riders batter Babar Azam scored a 46-ball 62 laced with five fours and a six to help his side to a 79-run win over Durdanto Dhaka in the Bangladesh Premier League on Saturday at the Sylhet International Cricket Stadium. ',
        //                     img1:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/27/fads1073.jpg',
        //                     img2:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/03/16/osimhen.jpg',
        //                     img3:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/26/_rc_0766.jpg',
        //                     img4:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/25/whatsapp_image_2024-01-25_at_10.14.28_pm.jpeg',
        //                     keywords:'BPL Rangpur Riders',
        //                     long_des:"Rangpur Riders batter Babar Azam scored a 46-ball 62 laced with five fours and a six to help his side to a 79-run win over Durdanto Dhaka in the Bangladesh Premier League on Saturday at the Sylhet International Cricket Stadium. It was Babar's second fifty of the tournament and following his guileful mastery, it was Afghanistan's Azamatullah Omarzai who unleashed some muscle power as he hit three sixes and two fours for a 15-ball 32, adding the finishing touches to propel his side's total to 183 for eight. The Rangpur bowlers led by off-spinner Sheikh Mahedi Hasan then delivered a clinical effort to bundle out Dhaka for a mere 104 in 16.3 overs. Mahedi picked up three for 11 runs, while Omarzai and Hasan Mahmud scalped two each. The victory gave Rangpur their second win of the tournament and handed Dhaka a second loss on the trot.",
        //                     type:'Slider',
        //                     catID:1
        //                 },
        //                 {
        //                     title:'Osimhen will quit Napoli in summer, says owner',
        //                     short_des:"Nigeria striker Victor Osimhen will leave Napoli this summer and join 'either Real Madrid, Paris Saint-Germain or an English club', the Italian club's president and owner Aurelio De Laurentiis said on Friday. De Laurentiis was responding to an interview that Osimhen, who is with Nigeria at the Africa Cup of Nations, gave to American television network CBS, in which the 25-year-old striker said he had already 'made up' his mind about his next move. Questioned by Italian media after a meeting of the Italian Football League, De Laurentiis said he was not surprised, even though Osimhen signed a contract extension with the Italian champions in December. Osimhen was the top scorer in Serie A last season, hitting 26 goals to propel Napoli to their first league title since 1990. 'We've known all this since last summer, which is also why negotiations for the extension of his contract, although friendly, took so long,' De Laurentiis said.",
        //                     img1:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/27/fads1073.jpg',
        //                     img2:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/03/16/osimhen.jpg',
        //                     img3:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/26/_rc_0766.jpg',
        //                     img4:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/25/whatsapp_image_2024-01-25_at_10.14.28_pm.jpeg',
        //                     keywords:'Osimhen Nigeria striker',
        //                     long_des:'JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.',
        //                     type:'Slider',
        //                     catID:1
        //                 },{
        //                     title:'From Bangladesh to Panama: Bangladeshi robotics team clinches fifth position at World Robot Olympiad 2023',
        //                     short_des:'Bangladeshi robotics team "Robonium Bangladesh" clinched the fifth position at the World Robot Olympiad (WRO) 2023 held in Panama. The young team, consisting of Israfil Shaheen Arannya, a grade 12 student at Cantonment Public School and College',
        //                     img1:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/27/fads1073.jpg',
        //                     img2:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/03/16/osimhen.jpg',
        //                     img3:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/26/_rc_0766.jpg',
        //                     img4:'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/25/whatsapp_image_2024-01-25_at_10.14.28_pm.jpeg',
        //                     keywords:'Robotics Panama',
        //                     long_des:"Bangladeshi robotics team 'Robonium Bangladesh' clinched the fifth position at the World Robot Olympiad (WRO) 2023 held in Panama. The young team, consisting of Israfil Shaheen Arannya, a grade 12 student at Cantonment Public School and College, Rangpur, as well as Qazi Mostahid Labib and Tafsir Tahrim, both grade 11 students at Sunnydale School, competed in the 'Future Innovators (Senior)' category and bagged the 5th position, competing against 451 teams from 77 countries. Campus sits with Arannya to learn more about his experience at the olympiad. How does it go from being just a robotics enthusiast to navigating towards WRO?  If I talk about the WRO, it's all about the passion and love for robotics. What you do in the WRO is learn. All of us know that to get to somewhere like the WRO is not easy, and you have to overcome a lot of obstacles. Throughout this entire process, you'll learn a lot of things. When starting out with robotics, you'll have to master the basics. As you make progress, you need to actively improve your skills and learn more advanced concepts. Get accustomed to working with themes as well as working with a team. Once all those boxes are checked, you'll be heading into the nationals. After you crack the nationals, the real journey for the WRO begins. There's some mental pressure and the looming anxiety of whether you'll make it to the next stage. You start to feel the pressure setting in. This is when our olympiad camps come into play. Olympiad camps gather the best roboticists and all-rounded individuals to provide training for the big event. These camps make sure that you're pushing yourself to do your best and you know how to handle all sorts of anomalies.",
        //                     type:'Slider',
        //                     catID:5
        //                 }
        //             ]
                
        //     }
        // )
        const result=await prisma.news_list.findMany({
                where:{catID:catID},
                select:{id:true,title:true,short_des:true,img1:true,img2:true,img3:true,img4:true,createdAt:true}
        })
        return NextResponse.json({status:"success",data:result})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}