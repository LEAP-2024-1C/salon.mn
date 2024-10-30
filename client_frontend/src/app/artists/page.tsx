import EmployeesCard from "@/components/cards/employees-card";
import Image from "next/image";

const Artists = () => {
  return (
    <div className="bg-[#101828] p-3">
      <div className="h-screen relative">
        <div className="absolute -z-10">
          <Image
            src="/images/testmodel1.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="photo1"
          />
        </div>

        <EmployeesCard />
      </div>
    </div>
  );
};
export default Artists;
