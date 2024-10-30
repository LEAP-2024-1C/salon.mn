// "use client";
// import { EmployeesContext } from "@/context/employee-context";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useContext } from "react";

// const EmployeesCard = () => {
//   const { employees } = useContext(EmployeesContext);
//   return (
//     <div>
//       {employees?.map((e, key1) => {
//         return (
//           <Link
//             key={key1}
//             href="/artist-detail"
//             className="flex  relative gap-5 h-[300px] "
//           >
//             <Image
//               fill={true}
//               src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/young-handsome-man-with-blond-hair-wearing-gray-sh-2021-08-27-18-01-56-utc-e1663293082778-putr6cjso5hb5chtk3uf2x383651o3yxf4c37o8r9c.jpg"
//               alt="Photo"
//               className=" size-full object-cover rounded-lg absolute "
//             />

//             <div className="flex flex-col justify-between absolute left-2 bottom-2 ">
//               <div className="flex gap-1 items-center">
//                 <Rating
//                   style={{ maxWidth: 80, color: "red" }}
//                   value={4}
//                   readOnly
//                 />
//                 <p className="text-sm">5.0</p>
//               </div>
//               <p className="font-bold">{e?.name}</p>
//               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };
// export default EmployeesCard;
