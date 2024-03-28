/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, {Fragment, ReactNode} from "react";
import ArticleCard, {ArticleCardProps} from "./ArticleCard";
export interface CategoryProps {
   thambnail: string;
   thambnailM?: string;
   title: string;
   articles: ArticleCardProps[];
   menuItemP?: ArticleCardProps[];
   action?: ReactNode;
}

function Category(props: CategoryProps) {
   const {thambnail, thambnailM, title, articles, menuItemP, action} = props;

   return (
      <div className="group">
         <div className="flex lg:flex-row flex-col-reverse lg:group-even:flex-row-reverse lg:gap-14 gap-9 justify-between lg:mb-12 md:mb-10 mb-7">
            <div className="lg:w-[50%] w-full">
               <div>
                  <h2 className="text-9xl font-normal text-primary-400 font-bitter-rose leading-[1.06em] md:mb-10 mb-9">
                     {title}
                  </h2>
               </div>
               <div className="flex flex-col lg:gap-[41px] md:gap-8 gap-5">
                  {articles.map(({titles, price, describtion, icons}, index) => (
                     <ArticleCard
                        key={index}
                        titles={titles}
                        price={price}
                        describtion={describtion}
                        icons={icons}
                     />
                  ))}
               </div>
            </div>
            <div className={`lg:w-[50%] w-full ${menuItemP ? "flex flex-col gap-20" : ""}`}>
               <div className="relative z-0">
                  <div className="hidden lg:block">
                     <div className="relative z-10 ">
                        <div className="group-even:block hidden">
                           <img className="" src="/images/forma wines.svg" alt="" />
                           <img className="ml-[106px] -mt-[117px]" src={thambnail} alt="" />
                        </div>
                        <div className="group-even:hidden block">
                           <div className="flex justify-end">
                              <img className="" src="/images/forma cocktails.svg " alt="" />
                           </div>
                           <img className="-mt-24" src={thambnail} alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="lg:hidden relative z-0">
                     <img className="w-full" src={thambnailM} alt="" />
                     <span
                        className="absolute inset-0 h-full z-10 "
                        style={{
                           backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)`,
                        }}
                     />
                  </div>
               </div>
               {menuItemP && (
                  <div className="lg:flex hidden flex-col gap-10 border-y lg:border-y-0 border-primary-400 py-5">
                     {menuItemP.map(({titles, price, describtion, icons}, index) => (
                        <ArticleCard
                           key={index}
                           titles={titles}
                           price={price}
                           describtion={describtion}
                           icons={icons}
                        />
                     ))}
                  </div>
               )}
            </div>
         </div>
         <div className="flex justify-center group-last:justify-start">{action}</div>
         <div className="lg:hidden mt-4">
            {menuItemP && (
               <div className="flex flex-col gap-10 border-y lg:border-y-0 border-primary-400 py-5">
                  {menuItemP.map(({titles, price, describtion, icons}, index) => (
                     <ArticleCard
                        key={index}
                        titles={titles}
                        price={price}
                        describtion={describtion}
                        icons={icons}
                     />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}

export default Category;
