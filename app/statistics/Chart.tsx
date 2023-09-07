"use client";

//Internal Lib
import { startOFMonth } from "@lib/dayJS";
//External Lib
import { PieChart, Pie, Cell, Tooltip } from "recharts";
//Interfaces
import { iCategory } from "@lib/interfaces";
//Styles
import s from "@styles/Components/_Chart.module.scss";


const COLORS = [
  { start: "#9e54ed", end: "#5c4cb6" },
  { start: "#34c3ff", end: "#2876bd" },
  { start: "#da9d35", end: "#e96935" },
  { start: "#FFCC70", end: "#ebae07" },
  { start: "#424242", end: "#424242" },
];

interface iProps {
  categoriesWithExpenses: iCategory[];
}

const Chart = ({ categoriesWithExpenses }: iProps) => {
  const currentMonthTotalExpensesAmountByCategoryArr =
    categoriesWithExpenses.map((category: any) => {
      const currentMonthExpensesArr = category.expenses.filter(
        (expense: any) => {
          return expense.createdAt > startOFMonth;
        }
      );
      const totalAmountByCategory = currentMonthExpensesArr
        ?.map((expense: any) => expense.amount)
        .reduce((prev: number, curr: number) => prev + curr, 0);
      return { name: category.name, amount: totalAmountByCategory };
    });

  const categoriesWithExpensesByAmountArr =
    currentMonthTotalExpensesAmountByCategoryArr.sort(
      (a: any, b: any) => b.amount - a.amount
    );
  const categoriesWithHighestTotalAmountArr = categoriesWithExpensesByAmountArr
    .filter((category) => category.name !== "Likusios išlaidos")
    .slice(0, 4);
  const categoriesWithLowestTotalAmountArr =
    categoriesWithExpensesByAmountArr.slice(
      4,
      categoriesWithExpensesByAmountArr.length
    );
  const sumOfLowestTotalAmounts = categoriesWithLowestTotalAmountArr
    .map((item: any) => item.amount)
    .reduce((prev: number, curr: number) => prev + curr, 0);

  const isAmountHigherThanZero = categoriesWithLowestTotalAmountArr.some(
    (item: any) => item.amount > 0
  ); // returns true if any of the items in the array is higher than 0
  if (isAmountHigherThanZero) {
    categoriesWithHighestTotalAmountArr.push({
      name: "Likusios išlaidos",
      amount: sumOfLowestTotalAmounts,
    });
  }

  return (
    <div className={s.chart}>
      <PieChart width={420} height={320}>
        <defs>
          {categoriesWithHighestTotalAmountArr?.map(
            (entry: any, index: any) => (
              <linearGradient id={`myGradient${index}`} key={index}>
                <stop
                  offset="0%"
                  stopColor={COLORS[index % COLORS.length].start}
                />
                <stop
                  offset="100%"
                  stopColor={COLORS[index % COLORS.length].end}
                  stopOpacity={0.8}
                />
              </linearGradient>
            )
          )}
        </defs>
        <Pie
          data={categoriesWithHighestTotalAmountArr.filter(category => category.amount > 0)}
            
          // cx={200}
          // cy={150}
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent,
            index,
          }: any) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <>
                <text
                  style={{ fontSize: "10px" }}
                  x={x}
                  y={y}
                  fill="gray"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {`${categoriesWithHighestTotalAmountArr[index].name}`}
                </text>
                <text
                  style={{ fontSize: "8px" }}
                  x={x}
                  y={y + 10}
                  fill="gray"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}{" "}
                </text>
              </>
            );
          }}
          isAnimationActive={true}
          outerRadius={90}
          innerRadius={55}
          cornerRadius={7}
          dataKey="amount"
          // paddingAngle={5}
          // innerRadius={isMobile ? 60 : 80}
        >
          {categoriesWithHighestTotalAmountArr?.map(
            (entry: any, index: any) => (
              <Cell key={`cell-${index}`} fill={`url(#myGradient${index})`} />
            )
          )}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Chart;
