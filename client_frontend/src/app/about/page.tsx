"use client";
import Image from "next/image";
import React from "react";
import {
  FaCertificate,
  FaClipboardList,
  FaComments,
  FaSquare,
} from "react-icons/fa6";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { FaCheckCircle, FaHeartbeat } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className=" flex flex-col bg-[#101828] text-[#FFFAF5] px-[15px] py-[30px] gap-16">
      <div>
        <div className="flex flex-col gap-3">
          <Image
            height={86}
            width={85}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/brand_promo.png"
            // layout="responsive"
            // sizes="(max-width: 768px) 100vw, 33vw"
            // srcSet
            // ref
            // loading={true}
            // priority
          />

          <h1 className="text-4xl font-extrabold">Бидний тухай</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            deserunt quaerat exercitationem, dolorum expedita fugiat itaque
          </p>
          <div className="">
            <div className="flex gap-5 items-center">
              <FaComments />
              <p>Мэргэжлийн артистууд</p>
            </div>
            <div className="flex gap-5 items-center">
              <FaClipboardList />
              <p>Үнэнч хэрэглэгчид</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            height={320}
            width={430}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/fashion-barber-with-mustache-dressed-in-a-black-sh-NT3C8MP_isolated.png"
          />
        </div>
      </div>
      <div className=" flex flex-col text-center gap-5">
        <h1 className="text-4xl font-extrabold ">
          Сайхан үс хүний бие, нүүрний өөг далдалдаг шидтэй
        </h1>
        <p className="text-base">
          Vitae nunc diam convallis quam. Scelerisque porttitor facilisi diam
          sit gravida aliquam rutrum nulla. Sed sapien non natoque sodales ut
          amet. Tortor velit.
        </p>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          <Image
            height={514}
            width={400}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/portrait-of-handsome-caucasian-male-barber-with-fa-2021-09-03-20-46-18-utc-e1663215745876-pus732rly23aeampf1j41e95li055alz1gdzn0x5i0.jpg"
            className="rounded-2xl"
          />
          <p>
            Mauris donec leo, gravida phasellus luctus. Adipiscing tellus in
            odio sed. Nam ut quis mi nisl orci, vitae. Ligula commodo et vitae.
          </p>

          <div className="flex gap-3 items-center">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
          <div className="flex gap-3">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
          <div className="flex gap-3">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            height={514}
            width={400}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/a-man-with-crossed-arms-dressed-in-a-blue-fleece-2021-08-29-12-11-47-utc-e1663216195255-pus7etqzdi6bitkat4d87fikww3bd396nlyhljhzq0.jpg"
            className="rounded-2xl"
          />
          <p>
            Mauris donec leo, gravida phasellus luctus. Adipiscing tellus in
            odio sed. Nam ut quis mi nisl orci, vitae. Ligula commodo et vitae.
          </p>

          <div className="flex gap-3 items-center">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
          <div className="flex gap-3">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
          <div className="flex gap-3">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            height={514}
            width={400}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/bearded-male-with-crossed-arms-2021-08-29-09-58-27-utc-e1663215777361-pus73wug0r8gptf0jej696nwltvvzlxdtl9izvojyw.jpg"
            className="rounded-2xl"
          />
          <p>
            Mauris donec leo, gravida phasellus luctus. Adipiscing tellus in
            odio sed. Nam ut quis mi nisl orci, vitae. Ligula commodo et vitae.
          </p>

          <div className="flex gap-3 items-center">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
          <div className="flex gap-3">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
          <div className="flex gap-3">
            <TbArrowLeftFromArc className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 ">
        <div className="w-full h-[540px] relative ">
          <Image
            fill={true}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/stylish-man-sitting-in-a-barbershop-2021-08-26-18-31-12-utc-e1663037894302.jpg"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 text-base">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#F63D68] font-extrabold text-2xl">
              Since 2018
            </h1>
            <p>
              A tellus facilisis semper posuere nisl, nisl turpis sapien
              scelerisque. Massa, suscipit ut sed aliquam, urna non. In diam.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[#F63D68] font-extrabold text-2xl">2019</h1>
            <p>
              A tellus facilisis semper posuere nisl, nisl turpis sapien
              scelerisque. Massa, suscipit ut sed aliquam, urna non. In diam.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[#F63D68] font-extrabold text-2xl">2020</h1>
            <p>
              A tellus facilisis semper posuere nisl, nisl turpis sapien
              scelerisque. Massa, suscipit ut sed aliquam, urna non. In diam.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[#F63D68] font-extrabold text-2xl">2024</h1>
            <p>
              A tellus facilisis semper posuere nisl, nisl turpis sapien
              scelerisque. Massa, suscipit ut sed aliquam, urna non. In diam.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-10">
          <div className="w-full h-[540px] relative ">
            <Image
              fill={true}
              alt="Logo"
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/barbershop-theme-2021-08-31-15-23-17-utc-puoqs5mgjl754vs4jygd56p8a45d0icwmdemu9rsxc.jpg"
              className="rounded-2xl object-cover"
            />
          </div>
          <div className=" flex flex-col gap-10">
            <h1 className="text-4xl font-extrabold text-start ">
              We can present all kinds of man hairstyles well and elegantly1
            </h1>
            <p>
              Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
              auctor quam pellentesque facilisis egestas. Suspendisse turpis
              aliquet odio ultrices id orci fermentum nascetur ullamcorper. At
              eu.
            </p>

            <p>
              Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
              auctor quam pellentesque facilisis egestas. Suspendisse turpis
              aliquet odio ultrices id orci fermentum nascetur ullamcorper. At
              eu.
            </p>
          </div>
        </div>
        <div className=" flex flex-col gap-10">
          <div className=" flex flex-col  gap-5">
            <div className="w-full h-[250px] relative ">
              <Image
                fill={true}
                alt="Logo"
                src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/client-during-beard-and-moustache-grooming-in-barb-2021-08-27-10-29-28-utc-puonx5h5m63wdlr9m4pvcaxqqa7nmrrffq3tnp91y0.jpg"
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="w-full h-[250px] relative ">
              <Image
                fill={true}
                alt="Logo"
                src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/client-during-beard-and-moustache-grooming-in-barb-2021-08-27-13-49-14-utc-puonyoxmte7telipmaouxexxs0mb8wvlbclgz0ytqw.jpg"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className=" flex flex-col gap-10">
            <h1 className="text-4xl font-extrabold text-star">
              We always provide sincere service from the heart just for you2
            </h1>
            <p>
              Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
              auctor quam pellentesque facilisis egestas. Suspendisse turpis
              aliquet odio ultrices id orci fermentum nascetur ullamcorper. At
              eu.
            </p>

            <div className="flex gap-3 items-center">
              <FaSquare className="text-pink-600 text-lg" />
              <p>Scelerisque nunc, at nisl non. Est.</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaSquare className="text-pink-600 text-lg" />
              <p>Scelerisque nunc, at nisl non. Est.</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaSquare className="text-pink-600 text-lg" />
              <p>Scelerisque nunc, at nisl non. Est.</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-10">
        <div className=" flex flex-col gap-10">
          <div className="w-full h-[540px] relative ">
            <Image
              fill={true}
              alt="Logo"
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/barber-and-customer-with-a-mustache-barbershop-2021-08-27-17-08-47-utc-puoobdr72vo8moqaxl0tnl60k1pe1lxj2zbr5heckw.jpg"
              className="rounded-2xl object-cover"
            />
          </div>
          <div className=" flex flex-col gap-10">
            <h1 className="text-4xl font-extrabold text-star">
              Not only hair, we also have expertise to make your face look
              beautiful
            </h1>
            <p>
              Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
              auctor quam pellentesque facilisis egestas. Suspendisse turpis
              aliquet odio ultrices id orci fermentum nascetur ullamcorper. At
              eu.
            </p>

            <div className="flex gap-3 items-center">
              <FaSquare className="text-pink-600 text-lg" />
              <p>
                Ac vitae commodo amet, varius. Ut rhoncus consectetur magna quis
                gravida massa. Habitasse sed feugiat massa.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <FaSquare className="text-pink-600 text-lg" />

              <p>
                Ac vitae commodo amet, varius. Ut rhoncus consectetur magna quis
                gravida massa. Habitasse sed feugiat massa.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-10">
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
                  aliquet odio ultrices id orci fermentum nascetur ullamcorper.
                  At eu.
                </p>
              </div>
              <div className=" flex flex-col gap-3">
                <h1 className="text-pink-600 text-lg font-extrabold">
                  Best Service ShowBest Service Show
                </h1>
                <p>
                  Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
                  auctor quam pellentesque facilisis egestas. Suspendisse turpis
                  aliquet odio ultrices id orci fermentum nascetur ullamcorper.
                  At eu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-extrabold text-start ">
            Your review is our best way to grow and develop
          </h1>
          <div className=" grid grid-cols-2 gap-3 items-center justify-between">
            <div className="flex gap-3 items-center">
              <FaHeartbeat className="text-pink-600" />
              <p> 1200 Reviews</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaCheckCircle className="text-pink-600" />
              <p> Verified</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaCertificate className="text-pink-600" />
              <p>Certified Employee</p>
            </div>
          </div>
          <p>
            Facilisi dignissim nisl id fringilla. Cras ipsum non bibendum duis.
            Nunc eget et nisi commodo nunc vel. Sit risus pellentesque
            ullamcorper scelerisque amet, sagittis, ipsum. Tellus senectus.
          </p>
          <div>
            <Image
              width={100}
              height={50}
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png"
              alt="Photo"
            />
            <Image
              width={100}
              height={50}
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png"
              alt="Photo"
            />
            <Image
              width={100}
              height={50}
              src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png"
              alt="Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
