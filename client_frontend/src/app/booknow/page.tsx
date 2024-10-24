"use client";
import { Input } from "@/components/ui/input";
import { RxScissors } from "react-icons/rx";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useRouter } from "next/navigation";
const BookNow = () => {
  const router = useRouter();
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="bg-[#101828]">
      <div className="bg-[#101828] p-2 flex flex-col gap-20 md:m-auto md:container">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-4xl text-white">Logo</p>

          <p className="font-bold text-5xl text-white">Цаг захиалах</p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center">
          <Image
            src="/images/barbermodel.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              eos voluptas aspernatur deleniti. Quae, cum!
            </p>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Үсчин
            </div>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Хумс будалт
            </div>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Гуаша
            </div>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Гоо сайхан
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:w-[560px] md:flex md:m-auto">
          <div>
            <p className="text-white">Нэр</p>
            <Input type="text" placeholder="Нэр" />
          </div>
          <div>
            <p className="text-white">Утас</p>
            <Input type="text" placeholder="Утасны дугаар" />
          </div>
          <div>
            <p className="text-white">Цаг сонголт</p>
            <div className="flex gap-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Цаг сонголт" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Цагууд</SelectLabel>
                    <SelectItem value="9:00">9:00</SelectItem>
                    <SelectItem value="10:00">10:00</SelectItem>
                    <SelectItem value="11:00">11:00</SelectItem>
                    <SelectItem value="12:00">12:00</SelectItem>
                    <SelectItem value="13:00">13:00</SelectItem>
                    <SelectItem value="14:00">14:00</SelectItem>
                    <SelectItem value="15:00">15:00</SelectItem>
                    <SelectItem value="16:00">16:00</SelectItem>
                    <SelectItem value="17:00">17:00</SelectItem>
                    <SelectItem value="18:00">18:00</SelectItem>
                    <SelectItem value="19:00">19:00</SelectItem>
                    <SelectItem value="20:00">20:00</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            variant="secondary"
            onClick={() => {
              router.push("/artists");
            }}
          >
            Цаг захиалах
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BookNow;
