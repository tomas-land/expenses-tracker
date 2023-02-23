"use client"

import { PieChart, Pie, Cell, Tooltip } from "recharts";
import s from "@styles/Components/_Chart.module.scss";
import { startOFMonth } from '@lib/dayJS'

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const COLORS = [
//   { start: "#9e54ed", end: "#5c4cb6" },
//   { start: "#34c3ff", end: "#2876bd" },
//   { start: "#da9d35", end: "#e96935" },
//   { start: "#FFCC70", end: "#ebae07" },
//   { start: "#424242", end: "#424242" }
// ];

const data01 = [
  { name: "Active Campagins", value: 90 },
  { name: "Inactive Campagins", value: 25 },
  { name: "ICPs with no campagins", value: 10 }
];

const Chart = ({ categoriesWithExpenses }: any) => {
  // const currentMonthTotalExpensesAmountByCategoryArr = categoriesWithExpenses.map((category: any) => {
  //   const currentMonthExpensesArr = category.expenses.filter((expense: any) => {
  //     return expense.createdAt > startOFMonth
  //   })
  //   const totalAmountByCategory = currentMonthExpensesArr?.map((expense: any) => expense.amount).reduce((prev: number, curr: number) => prev + curr, 0);
  //   return { name: category.name, amount: totalAmountByCategory }
  // })

  // const categoriesWithExpensesByAmountArr = currentMonthTotalExpensesAmountByCategoryArr.sort((a: any, b: any) => b.amount - a.amount)
  // const categoriesWithHighestTotalAmountArr = categoriesWithExpensesByAmountArr.slice(0, 4)
  // const categoriesWithLowestTotalAmountArr = categoriesWithExpensesByAmountArr.slice(4, categoriesWithExpensesByAmountArr.length)
  // const sumOfLowestTotalAmounts = categoriesWithLowestTotalAmountArr.map((item: any) => item.amount).reduce((prev: number, curr: number) => prev + curr, 0)

  // const isAmountHigherThanZero = categoriesWithHighestTotalAmountArr.some((item: any) => item.amount > 0)
  // if (isAmountHigherThanZero) {
  //   categoriesWithHighestTotalAmountArr.push({ name: 'Kita', amount: sumOfLowestTotalAmounts })
  // }

  return (
    <div className={s.chart}>
      <PieChart width={300} height={300}>
        <Pie
          data={data01}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={80}
          outerRadius={100}
        >
          {data01?.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}

        </Pie>
      </PieChart>
    </div>
  );
}

export default Chart;
