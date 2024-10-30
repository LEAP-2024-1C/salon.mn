"use client";

import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import OtpModal from "./optModal";

const SigninModal = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const sendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:8008/api/v1/auth/signin", {
        phoneNumber,
      });
      if (res.status === 200) {
        toast.success("Amjiltai otp ilgeelee", { autoClose: 500 });
      }
    } catch (error) {
      toast.error("OTP ilgeehed aldaa garlaa", { autoClose: 500 });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className=" max-sm:mt-4 bg-white hover:bg-black text-black"
        >
          Нэвтрэх
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-[#101828] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Нэвтрэх</DialogTitle>
          <DialogDescription> </DialogDescription>
        </DialogHeader>

        <div className="flex  items-center justify-center gap-11">
          <Label htmlFor="number" className="text-right ">
            Утасны дугаар
          </Label>
          <Input
            id="name"
            defaultValue=""
            onChange={handleChangePhone}
            className="w-1/2  text-white bg-gray-200 "
          />
        </div>

        <DialogFooter>
          {/* <Button
            type="submit"
            className="w-full text-white hover:bg-black bg-[#101828] "
            onClick={sendOtp}
          >
            Код илгээх
          </Button> */}
          <OtpModal sendOtp={sendOtp} phoneNumber={phoneNumber} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SigninModal;
