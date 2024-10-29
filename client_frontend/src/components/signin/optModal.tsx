"use client";

import React from "react";
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

const OtpModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full text-white hover:bg-black bg-[#101828] "
        >
          Код илгээх
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white text-[#101828] rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-center">Баталгаажуулах</DialogTitle>
          <DialogDescription>
            {" "}
            9999999 дугаарт илгээсэн баталгаажуулах кодыг оруулна уу
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <InputOTP
            maxLength={4}
            // onChange={handleConfirmOtp}
            // value={otpValue}
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
          <Button
            type="submit"
            className="w-full text-white hover:bg-black bg-[#101828] "
          >
            Нэвтрэх
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OtpModal;
