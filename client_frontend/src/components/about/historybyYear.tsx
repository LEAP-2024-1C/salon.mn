"use client";
import React from "react";

const HistorybyYear = () => {
  const year = [
    {
      num: "SINCE 2019",
      info:
        "   A tellus facilisis semper posuere nisl, nisl turpis sapien scelerisque Massa, suscipit ut sed aliquam, urna non. In diam",
    },
    {
      num: 2020,
      info:
        "   A tellus facilisis semper posuere nisl, nisl turpis sapien scelerisque Massa, suscipit ut sed aliquam, urna non. In diam",
    },
    {
      num: 2022,
      info:
        "   A tellus facilisis semper posuere nisl, nisl turpis sapien scelerisque Massa, suscipit ut sed aliquam, urna non. In diam",
    },
    {
      num: "NOW 2024",
      info:
        "   A tellus facilisis semper posuere nisl, nisl turpis sapien scelerisque Massa, suscipit ut sed aliquam, urna non. In diam",
    },
  ];
  return year.map((w) => {
    return (
      <div className="flex flex-col gap-3">
        <h1 className="text-[#F63D68] font-extrabold text-2xl">{w.num}</h1>
        <p>{w.info}</p>
      </div>
    );
  });
};

export default HistorybyYear;
