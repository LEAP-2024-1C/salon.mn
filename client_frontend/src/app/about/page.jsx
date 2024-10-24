"use client";
import Image from "next/image";
import React from "react";
import { FaClipboardList, FaComments, FaSquare } from "react-icons/fa6";
import { TbArrowLeftFromArc } from "react-icons/tb";

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
          <div>
            <div>
              <FaComments />
              <p>Мэргэжлийн артистууд</p>
            </div>
            <div>
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

      <div>
        <div className="w-full h-[540px] relative ">
          <Image
            fill={true}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/stylish-man-sitting-in-a-barbershop-2021-08-26-18-31-12-utc-e1663037894302.jpg"
            className="rounded-2xl object-cover"
          />
        </div>
        <div>
          <h1>We always provide sincere service from the heart just for you</h1>
          <p>
            Lectus in sit malesuada rhoncus mi volutpat. Leo sit consequat
            auctor quam pellentesque facilisis egestas. Suspendisse turpis
            aliquet odio ultrices id orci fermentum nascetur ullamcorper. At eu.
          </p>

          <div className="flex gap-3 items-center">
            <FaSquare className="text-gray-600 text-lg" />
            <p>Scelerisque nunc, at nisl non. Est.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
