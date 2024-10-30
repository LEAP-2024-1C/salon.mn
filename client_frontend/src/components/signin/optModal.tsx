"use client";

import React, { useContext, useState } from "react";
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
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user-booking-context";

interface IOtp {
  phoneNumber: string;
  sendOtp: () => void;
}
const OtpModal = ({ phoneNumber, sendOtp }: IOtp) => {
  const [otpNum, setOtpNum] = useState<string>("");
  const { setToken } = useContext(UserContext);
  const router = useRouter();

  const verifyOtp = async (value: string) => {
    setOtpNum(value);
    try {
      if (value.length === 4) {
        const res = await axios.post(
          "http://localhost:8008/api/v1/auth/verifyotp",
          { otpNum: value, phoneNumber }
        );
        if (res.status === 200) {
          toast.success("Amjilttai newterlee", { autoClose: 500 });
          const { token } = res.data;
          localStorage.setItem("token", token);
          setToken(token);
          router.push("/about");
        }
      }
    } catch (error) {
      toast.error("OTP taarahgui bn", { autoClose: 500 });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full text-white hover:bg-black bg-[#101828] "
          onClick={sendOtp}
        >
          Код илгээх
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-[#101828] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Баталгаажуулах</DialogTitle>
          <DialogDescription>
            {" "}
            {phoneNumber} дугаарт илгээсэн баталгаажуулах кодыг оруулна уу
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <InputOTP
            maxLength={4}
            onChange={verifyOtp}
            value={otpNum}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup className="flex gap-3 ">
              <InputOTPSlot index={0} className="border rounded-sm p-5" />
              <InputOTPSlot index={1} className="border rounded-sm p-5" />
              <InputOTPSlot index={2} className="border rounded-sm p-5" />
              <InputOTPSlot index={3} className="border rounded-sm p-5" />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <DialogFooter>
          {/* <Button
            type="submit"
            className="w-full text-white hover:bg-black bg-[#101828] "
          >
            Нэвтрэх
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OtpModal;
