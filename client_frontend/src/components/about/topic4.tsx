"use client";
import Image from "next/image";
import React from "react";

const Topic4 = () => {
  return (
    <div className=" flex flex-col gap-10 md:flex-col-reverse">
      <div className=" flex flex-col gap-5">
        <div className="w-full h-[250px] relative  ">
          <Image
            fill={true}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/client-during-beard-and-moustache-grooming-in-barb-2022-02-02-04-49-42-utc-puop1mezvdic96yzamhlp3a7hiql1mfdo1afil8u1k.jpg"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="w-full h-[250px] relative  ">
          <Image
            fill={true}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/client-during-beard-and-moustache-grooming-in-barb-2021-08-29-01-52-02-utc-puop3mskhm9f361ujzrvj30p86tuibeplzitgw9iqg.jpg"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-10">
        <h1 className="text-4xl font-extrabold text-star">
          Handsome & charming man, must look perfect from top to toe
        </h1>
        <div className=" flex flex-col gap-10">
          <div className=" flex flex-col gap-3">
            <h1 className="text-pink-600 text-lg font-extrabold">
              Best Service ShowBest Service Show
            </h1>
            <p>
              Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
              auctor quam pellentesque facilisis egestas. Suspendisse turpis
              aliquet odio ultrices id orci fermentum nascetur ullamcorper. At
              eu.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className="text-pink-600 text-lg font-extrabold">
              Best Service ShowBest Service Show
            </h1>
            <p>
              Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
              auctor quam pellentesque facilisis egestas. Suspendisse turpis
              aliquet odio ultrices id orci fermentum nascetur ullamcorper. At
              eu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic4;
