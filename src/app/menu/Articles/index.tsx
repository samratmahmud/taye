import React from "react";
import Category from "./Category";
import Button from "@/components/common/Button";

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
                        titles: "NEGRONI TORINESE",
                        price: "€10",
                        describtion: "Vermouth rosso, Bitter, Gin, scorza d'arancia.",
                     },
                     {
                        titles: "MANGO TANGO",
                        price: "€12",
                        describtion:
                           "Vodka, succo di mango fresco, sciroppo di lime, foglie di menta.",
                     },
                     {
                        titles: "APEROL SPRITZ RINFRESCANTE",
                        price: "€9",
                        describtion: "Aperol, Prosecco, soda, arancia a fette.",
                     },
                     {
                        titles: "BASILICO MULE",
                        price: "€11",
                        describtion: "Vodka, succo di lime, sciroppo di basilico, ginger beer.",
                     },
                     {
                        titles: "CILANTRO CITRUS SMASH",
                        price: "€13",
                        describtion: "Rum, cilantro, sciroppo d'agave, succo di lime, angostura.",
                     },
                  ]}
                  action={
                     <Button path="/" icon="/images/Group 206.svg">
                        Mostra altro
                     </Button>
                  }
               />
               <Category
                  thambnail="/images/wines.png"
                  thambnailM="/images/wines.jpg"
                  title="Wines"
                  articles={[
                     {
                        titles: "Chardonnay Langhe DOC / CERETTO, 2018",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO, 2016",
                        price: "€12",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€20",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "Chardonnay Langhe DOC / CERETTO, 2018",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO, 2016",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€20",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                  ]}
                  menuItemP={[
                     {
                        titles: "Chardonnay Langhe DOC / CERETTO",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "BARBERA D’ALBA SUPERIORE / MARCHESI DI BAROLO",
                        price: "€18",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "GAVI DI GAVI / LA SCOLCA, 2019",
                        price: "€15",
                        describtion: "Piemonte, Italia",
                     },
                     {
                        titles: "NEBBIOLO DELLE LANGHE / BARBARESCO, 2015",
                        price: "€25",
                        describtion: "Piemonte, Italia",
                     },
                  ]}
                  action={
                     <Button path="/" icon="/images/Group 206.svg">
                        Mostra altro
                     </Button>
                  }
               />

               <Category
                  thambnail="/images/beers.png"
                  thambnailM="/images/beers.jpg"
                  title="Beers"
                  articles={[
                     {
                        titles: "WEST COAST IPA",
                        price: "€11",
                        describtion: "Malto d'orzo, luppolo Cascade, lievito, acqua.",
                     },
                     {
                        titles: "IRISH DRY STOUT",
                        price: "€5",
                        describtion: "Malto d'orzo tostato, luppolo, lievito, acqua.",
                     },
                     {
                        titles: "BELGIAN WIT",
                        price: "€6",
                        describtion:
                           "Malto d'orzo, frumento, coriandolo, scorza d'arancia, luppolo, lievito, acqua.",
                     },
                  ]}
                  action={
                     <Button path="/" icon="/images/Group 206.svg">
                        Mostra altro
                     </Button>
                  }
               />
               <Category
                  thambnail="/images/tayèri.png"
                  thambnailM="/images/tayèri.jpg"
                  title="Tayeri '"
                  articles={[
                     {
                        titles: "TAYÈRE DEL CONTADINO",
                        price: "€18",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        titles: "TAYÈRE MEDITERRANEO",
                        price: "€22",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        titles: "TAYÈRE DEL MARE",
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
                        titles: "TAYÈRE VEGANO",
                        price: "€15",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        titles: "TAYèRE DEI FORMAGGI LOCALI",
                        price: "€20",
                        describtion: "Assortimento di formaggi regionali, miele, noci.",
                     },
                     {
                        titles: "TAYèRE DOLCEZZA",
                        price: "€20",
                        describtion: "Selezione di frutta fresca, biscotti, cioccolato fondente.",
                     },
                  ]}
                  action={
                     <Button path="/" icon="/images/Group 206.svg">
                        Mostra altro
                     </Button>
                  }
               />
               <Category
                  thambnail="/images/tayèri.png"
                  thambnailM="/images/dessert.jpg"
                  title="Desserts"
                  articles={[
                     {
                        titles: "TIRAMISù CLASSICO",
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
                        titles: "PANNA COTTA AI FRUTTI DI BOSCO",
                        price: "€9",
                        describtion:
                           "Selezione di salmone affumicato, gamberi, calamari, acciughe.",
                        icons: ["/images/Group 143.svg", "/images/path402.svg"],
                     },
                     {
                        titles: "TORTA AL CIOCCOLATO FONDENTE",
                        price: "€10",
                        describtion:
                           "Selezione di salumi, formaggi locali, olive, e marmellata artigianale.",
                     },
                     {
                        titles: "MOUSSE AL LIMONE",
                        price: "€7",
                        describtion: "Assortimento di formaggi regionali, miele, noci.",
                     },
                  ]}
                  action={
                     <Button path="/" icon="/images/Group 197.svg">
                        Legenda allergeni
                     </Button>
                  }
               />
            </div>
         </div>
      </section>
   );
}

export default Articles;
