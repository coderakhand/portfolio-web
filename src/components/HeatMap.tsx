"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface contribution {
  date: string;
  count: number;
  level: number;
}

export default function HeatMap() {
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weeks, setWeeks] = useState<contribution[][]>([]);
  const [toolTipDetails, setToolTipDetails] = useState<null | {
    date: string;
    count: number;
  }>(null);

  const groupContributionsToWeeks = (contributions: contribution[]) => {
    const weeks: contribution[][] = [];
    let currentWeek: contribution[] = [];

    for (const day of contributions.flat()) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) weeks.push(currentWeek);
    setWeeks(weeks);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          "https://github-contributions-api.jogruber.de/v4/coderakhand?y=last"
        );
        const data = res.data;
        setTotalContributions(data.total.lastYear);
        groupContributionsToWeeks(data.contributions);
      } catch (e) {
        console.log(e);
        return;
      }
      setIsLoading(false);
    };
    fetchDetails();
  }, []);

  return (
    <div className="flex flex-col w-full px-1 gap-1 my-3">
      <div className="w-full grid grid-cols-2">
        <div className="flex items-center text-white/40 font-semibold text-[10px]">
          Activity Map
        </div>
        <div className="flex justify-end items-center">
          <a href="https://github.com/coderakhand" target="_blank">
            <Image
              src="/images/github.svg"
              alt="Github Logo"
              width={50}
              height={50}
              className="w-4 h-4 cursor-pointer bg-white rounded-xs"
            />
          </a>
        </div>
      </div>
      <div className="flex gap-1 overflow-x-auto overflow-y-visible relative">
        {isLoading
          ? [...Array(53)].map((_, i) => (
              <div key={i} className="flex flex-col gap-1">
                {[...Array(7)].map((_, j) => (
                  <SingleDay key={j} level={0} />
                ))}
              </div>
            ))
          : weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-1">
                {week.map((day, j) => (
                  <SingleDay
                    onMouseEnter={() =>
                      setToolTipDetails({
                        count: day.count,
                        date: day.date,
                      })
                    }
                    onMouseLeave={() => setToolTipDetails(null)}
                    key={j}
                    level={day.level}
                  />
                ))}
              </div>
            ))}
      </div>
      <div className="w-full grid grid-cols-2 text-white/40 text-[10px]">
        <div className="flex text-xs text-white">
          {!toolTipDetails
            ? `${
                isLoading
                  ? "Loading..."
                  : totalContributions + " contributions in the last year"
              }`
            : toolTipDetails.count === 0
            ? `No contributions on ${toolTipDetails.date}`
            : `${toolTipDetails.count} contribution${
                toolTipDetails.count > 1 ? "s" : ""
              } on ${toolTipDetails.date}`}
        </div>
        <div className="flex gap-1 justify-end">
          <div> Less</div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, idx) => (
              <SingleDay key={idx} level={idx} className={"w-2 h-2"} />
            ))}
          </div>
          <div> More</div>
        </div>
      </div>
    </div>
  );
}

function SingleDay({
  level,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  level: number;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative aspect-square w-[9.2px] rounded-[1.5px]"
    >
      <div
        className={twMerge("aspect-square w-[9.2px] rounded-[1.5px]", className)}
        style={{
          backgroundColor: colors[level] || "#ebedf0",
        }}
      />
    </div>
  );
}
