import React from "react";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BarberCard = ({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) => {
  return (
    <Card
      className={`w-[150px] m-auto flex flex-col items-center px-3 py-5 shadow-lg ${
        selected ? "bg-black" : "bg-white"
      }`}
    >
      <CardContent className="w-full flex flex-col gap-4 items-center p-0">
        <div
          className={`w-20 h-20 p-3 rounded-full flex justify-center items-center ${
            selected ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <span className="text-3xl font-bold">{name.at(0)}</span>
        </div>
        <Label
          className={`w-full text-base font-semibold text-center truncate ${
            selected ? "text-white" : " text-black"
          }`}
        >
          {name}
        </Label>
      </CardContent>
    </Card>
  );
};

export default BarberCard;
