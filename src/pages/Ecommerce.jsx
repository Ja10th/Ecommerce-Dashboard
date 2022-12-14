import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData, ecomPieChartDat } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div>
      <div className="mt-12">
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          <div
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
           h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p className="text-2xl">$57,456.75</p>
              </div>
            </div>
            <div className="mt-6">
              <Button
                color="white"
                bgColor={currentColor}
                size="md"
                text="Download"
                borderRadius="10px"
              />
            </div>
          </div>
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            {earningData.map((item) => (
              <div
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
                lg:w-[150px] p-4 pt-9 rounded-2xl
                ">
                <button
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl ">
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold"> {item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          <div
            className="bg-white dark:text-gray-200
          dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780
          ">
            <div className="flex justify-between">
              <p className="font-semibold text-xl"> Revenue Update</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center text-gray-600 gap-2 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-3 gap-10 flex flex-wrap justify-center">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-2xl font-semibold">$67,893.43</span>
                    <span className="p-1.5 hover:drop-shadow-xl rounded-full text-white bg-green-400 cursor-poimyer ml-3 text-xs">
                      34%
                    </span>
                  </p>
                  <p className="text-gray-500 mt-1">Budget</p>
                </div>
                <div className="mt-3">
                  <p>
                    <span className="text-2xl font-semibold">$77,893.43</span>
                  </p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="mt-2">
                  <SparkLine
                    currentColor={currentColor}
                    type="Line"
                    id="line-sparkline"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>
                <div className="mt-4">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div>
                <Stacked 
                width="320px"
                height="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
