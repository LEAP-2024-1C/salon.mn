"use client";
import Image from "next/image";
import React from "react";
import { TbArrowLeftFromArc } from "react-icons/tb";

const BestArtist = () => {
  const img = [
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/portrait-of-handsome-caucasian-male-barber-with-fa-2021-09-03-20-46-18-utc-e1663215745876-pus732rly23aeampf1j41e95li055alz1gdzn0x5i0.jpg",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/a-man-with-crossed-arms-dressed-in-a-blue-fleece-2021-08-29-12-11-47-utc-e1663216195255-pus7etqzdi6bitkat4d87fikww3bd396nlyhljhzq0.jpg",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/bearded-male-with-crossed-arms-2021-08-29-09-58-27-utc-e1663215777361-pus73wug0r8gptf0jej696nwltvvzlxdtl9izvojyw.jpg",
  ];
  return img.map((i, key2) => {
    return (
      <div key={key2} className="flex flex-col gap-3">
        <Image
          height={514}
          width={400}
          alt="Logo"
          src={i}
          className="rounded-2xl"
        />
        <p>
          Mauris donec leo, gravida phasellus luctus. Adipiscing tellus in odio
          sed. Nam ut quis mi nisl orci, vitae. Ligula commodo et vitae.
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
    );
  });
};

export default BestArtist;
