import React from 'react';
import TopButtons from './TopButtons';
import s from '@styles/Pages/_Annual_review_page.module.scss';
import AnnualTable from './AnnualTable';
import { getCategoriesWithMonthlyExpensesTotal } from '@lib/prisma/expenses';

export const dynamic = 'force-dynamic'

const AnnualReviewPage = async () => {
  const categoriesWithMonthlyExpensesTotal = await getCategoriesWithMonthlyExpensesTotal();
  return (
    <div className={s.annual_page}>
      <TopButtons />
      <AnnualTable categoriesWithMonthlyExpensesTotal={categoriesWithMonthlyExpensesTotal} />
    </div>
  );
};

export default AnnualReviewPage;