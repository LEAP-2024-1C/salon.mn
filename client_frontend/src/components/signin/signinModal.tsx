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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OtpModal from "./optModal";

const SigninModal = () => {
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
            className="w-1/2  text-white bg-gray-200 "
          />
        </div>

        <DialogFooter>
          <OtpModal />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SigninModal;
