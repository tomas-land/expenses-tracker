import React from 'react';
import s from '@styles/Components/_AnnualTable.module.scss';
import { startOFYear, currentMonth } from '@lib/dayJS/index';
import { MdOutlineCode } from 'react-icons/md';
import { getSortedMonths } from '@lib/helpers/getSortedMonths';

interface iProps {
  categoriesWithMonthlyExpensesTotal:
    | {
        category: string;
        monthlyTotal: any;
      }[]
    | undefined;
}
const AnnualTable = ({ categoriesWithMonthlyExpensesTotal }: iProps) => {
  const categories = categoriesWithMonthlyExpensesTotal?.map((category: any) => category.category);

  const allMonths = new Set();
  categoriesWithMonthlyExpensesTotal?.forEach((item: any) => {
    Object.keys(item.monthlyTotal).forEach((month) => {
      allMonths.add(month);
    });
  });
  const sortedMonths = getSortedMonths(categoriesWithMonthlyExpensesTotal);
  console.log(categories)
  console.log(sortedMonths)
  console.log(categoriesWithMonthlyExpensesTotal)
  
  return (
    <div className={s.annual_table}>
      <h4 className={s.title}>Metinių išlaidų ataskaita</h4>
      <p className={s.period}>
        {startOFYear} <MdOutlineCode fontSize={15} /> {currentMonth}
      </p>
      <div className={s.table_wrapper}>
        <table className={s.table}>
          <thead className={s.table_head}>
            <tr>
              <th>Mėnuo</th>
              {categories?.map((category: any) => (
                <th key={category}>{category}</th>
              ))}
              <th>Suma</th>
            </tr>
          </thead>
          <tbody className={s.table_body}>
            {sortedMonths.map((month: string) => (
              <tr>
                <td className={s.months_column} key={month}>
                  {month}
                </td>
                {categoriesWithMonthlyExpensesTotal?.map((item: any) => (
                  <td key={item.category}>{item.monthlyTotal[month] || '-'}</td>
                ))}
                <td>{categoriesWithMonthlyExpensesTotal?.reduce((total, item) => total + (item.monthlyTotal[month] || 0), 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnualTable;
