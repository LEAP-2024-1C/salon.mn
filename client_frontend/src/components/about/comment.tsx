"use client";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";

const Comment = () => {
  return (
    <div className=" flex flex-col gap-5 text-black">
      <div className="flex relative gap-5 ">
        <div className="border border-pink-600 rounded-full flex relative w-11 h-11">
          <Image
            fill={true}
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/smiling-group-of-ethnically-diverse-professional-E54D7RY-men_4-e1664418927667-pvgfq7a0bujrf701w6uuz2ok9twxgj1xph7uak9w5e.jpg"
            alt="Photo"
            className="size-full object-cover rounded-full p-[2px]"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex gap-1 items-center">
            <Rating style={{ maxWidth: 80, color: "red" }} value={4} readOnly />
            <p className="text-sm">5.0</p>
          </div>
          <p className="font-bold">Darlene Robertson</p>
        </div>
      </div>
      <p>
        Bibendum sollicitudin mollis amet aliquam fusce posuere adipiscing
        feugiat. Dictum nec vitae nullam volutpat a. Id lacus velit eu, felis.
        Pellentesque purus, consequat nullam enim odio nibh a eget tristique.
        Enim elementum purus in blandit. Sagittis ultricies egestas rutrum amet
        sagittis. Ullamcorper enim purus.
      </p>
    </div>
  );
};

export default Comment;
