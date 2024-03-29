import React from "react";
import Category from "./Category";

function Articles() {
   return (
      <section>
         <div className="container lg:mb-32 md:mb-24 mb-[74px] pt-24 sm:pt-14 md:pt-0">
            <div className="max-w-[1085px] mx-auto flex flex-col gap-[70px]">
               <Category
                  thambnail="/images/cocktails.png"
                  title="Cocktails"
                  articles={[
                     {
                        title: "NEGRONI TORINESE",
                        price: "€10",
                        describtion: "Vermouth rosso, Bitter, Gin, scorza d'arancia.",
                     },
                     {
                        title: "MANGO TANGO",
                        price: "€12",
                        describtion:
                           "Vodka, succo di mango fresco, sciroppo di lime, foglie di menta.",
                     },
                     {
                        title: "APEROL SPRITZ RINFRESCANTE",
                        price: "€9",
                        describtion: "Aperol, Prosecco, soda, arancia a fette.",
                     },
                     {
                        title: "BASILICO MULE",
                        price: "€11",
                        describtion: "Vodka, succo di lime, sciroppo di basilico, ginger beer.",
                     },
                     {
                        title: "CILANTRO CITRUS SMASH",
                        price: "€13",
                        describtion: "Rum, cilantro, sciroppo d'agave, succo di lime, angostura.",
                     },
                  ]}
               />
               <Category
                  thambnail="/images/wines.png"
                  thambnailM="/images/wines.jpg"
                  title="Wines"
                  articles={[
                     {
                        title: "Chardonnay Langhe DOC / CERETTO, 2018",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO, 2016",
                        price: "€12",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€20",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "Chardonnay Langhe DOC / CERETTO, 2018",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO, 2016",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€20",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "Chardonnay Langhe DOC / CERETTO",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "Chardonnay Langhe DOC / CERETTO, 2018",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO, 2016",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€20",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "Chardonnay Langhe DOC / CERETTO",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        title: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                  ]}
               />

               <Category
                  thambnail="/images/beers.png"
                  thambnailM="/images/beers.jpg"
                  title="Beers"
                  articles={[
                     {
                        title: "WEST COAST IPA",
                        price: "€11",
                        describtion: "Malto d'orzo, luppolo Cascade, lievito, acqua.",
                     },
                     {
                        title: "IRISH DRY STOUT",
                        price: "€5",
                        describtion: "Malto d'orzo tostato, luppolo, lievito, acqua.",
                     },
                     {
                        title: "BELGIAN WIT",
                        price: "€6",
                        describtion:
                           "Malto d'orzo, frumento, coriandolo, scorza d'arancia, luppolo, lievito, acqua.",
                     },
                  ]}
               />
               <Category
                  thambnail="/images/tayèri.png"
                  thambnailM="/images/tayèri.jpg"
                  title="Tayeri '"
                  articles={[
                     {
                        title: "TAYÈRE DEL CONTADINO",
                        price: "€18",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        title: "TAYÈRE MEDITERRANEO",
                        price: "€22",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        title: "TAYÈRE DEL MARE",
                        price: "€26",
                        describtion:
                           "Selezione di salmone affumicato, gamberi, calamari, acciughe.",
                        icons: [
                           "/images/Group 143.svg",
                           "/images/path402.svg",
                           "/images/Group 141.svg",
                           "/images/Group 140.svg",
                        ],
                     },
                     {
                        title: "TAYÈRE VEGANO",
                        price: "€15",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        title: "TAYèRE DEI FORMAGGI LOCALI",
                        price: "€20",
                        describtion: "Assortimento di formaggi regionali, miele, noci.",
                     },
                     {
                        title: "TAYèRE DOLCEZZA",
                        price: "€20",
                        describtion: "Selezione di frutta fresca, biscotti, cioccolato fondente.",
                     },
                  ]}
               />
               <Category
                  thambnail="/images/tayèri.png"
                  thambnailM="/images/dessert.jpg"
                  title="Desserts"
                  articles={[
                     {
                        title: "TIRAMISù CLASSICO",
                        price: "€8",
                        describtion:
                           "Selezione di salmone affumicato, gamberi, calamari, acciughe.",
                        icons: [
                           "/images/Group 143.svg",
                           "/images/path402.svg",
                           "/images/Group 141.svg",
                           "/images/Group 140.svg",
                        ],
                     },
                     {
                        title: "PANNA COTTA AI FRUTTI DI BOSCO",
                        price: "€9",
                        describtion:
                           "Selezione di salmone affumicato, gamberi, calamari, acciughe.",
                        icons: ["/images/Group 143.svg", "/images/path402.svg"],
                     },
                     {
                        title: "TORTA AL CIOCCOLATO FONDENTE",
                        price: "€10",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        title: "MOUSSE AL LIMONE",
                        price: "€7",
                        describtion: "Assortimento di formaggi regionali, miele, noci.",
                     },
                  ]}
                  isAllergenLegend
               />
            </div>
         </div>
      </section>
   );
}

export default Articles;
