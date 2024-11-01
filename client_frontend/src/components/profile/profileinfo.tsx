"use client";

import { Button } from "@/components/ui/button";
import { CldUploadWidget } from "next-cloudinary";

const ProfileInfo = () => {
  return (
    <div className=" flex flex-col gap-2">
      <p className="text-base font-bold">Хэрэглэгчийн хэсэг</p>
      <p>Нэр:</p>
      <input type="text" className="rounded-lg w-full py-1 px-3" />
      <p>Утасны дугаар:</p>
      <input type="text" className="rounded-lg w-full py-1 px-3" />
      <div>
        <CldUploadWidget uploadPreset="clientProfile">
          {({ open }) => {
            return <button onClick={() => open()}>my Upload an Image</button>;
          }}
        </CldUploadWidget>
      </div>

      <div className="flex justify-end">
        <Button className="bg-blue-600 rounded-full py-1 px-5 text-xs">
          Мэдээлэл шинэчлэх
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
