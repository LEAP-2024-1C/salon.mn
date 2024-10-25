import EmployeesCard from "@/components/cards/employees-card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-6xl">Home page is here</p>
      <EmployeesCard/>
    </div>
  );
}
