import prisma from '.';
import { formateDateToMonthLT, startOFPreviousMonth, endOFPreviousMonth, startOFMonth, startOFYearISO, endOFcurrentMonthISO} from '@lib/dayJS';
import dayjs from 'dayjs';
import 'dayjs/locale/lt';

export async function getExpensesWithCategory() {
  try {
    const expenses = await prisma.Expenses.findMany({
      where: {
        createdAt: {
          gte: startOFMonth,
        },
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return JSON.parse(JSON.stringify(expenses));
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function getCurrentYearExpensesWithCategory() {
  try {
    const expenses = await prisma.Expenses.findMany({
      where: {
        createdAt: {
          gte: startOFYearISO,
        },
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return JSON.parse(JSON.stringify(expenses));
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function createExpense(expense) {
  const { amount, desc, categoryID } = expense;
  try {
    const newExpense = await prisma.Expenses.create({
      data: {
        amount: amount,
        desc: desc,
        categoryID: categoryID,
      },
    });
    return { newExpense };
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function deleteExpense(id) {
  try {
    const deletedExpense = await prisma.Expenses.delete({
      where: { id: Number(id) },
    });
    return { deletedExpense };
  } catch (error) {
    return { error };
  }
}
////////////////////////
export async function getTotalAmountExpenses() {
  try {
    const totalAmountExpenses = await prisma.Expenses.aggregate({
      where: {
        createdAt: {
          gte: startOFMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });
    return totalAmountExpenses;
  } catch (error) {
    return { error };
  }
}
////////////////////////
export async function getPreviousMonthTotalAmountExpenses() {
  try {
    const previousMonthTotalAmountExpenses = await prisma.Expenses.aggregate({
      where: {
        createdAt: {
          gte: startOFPreviousMonth,
          lte: endOFPreviousMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });
    return previousMonthTotalAmountExpenses;
  } catch (error) {
    return { error };
  }
}
///////////////
export async function getCategoriesWithMonthlyExpensesTotal() {
  try {
    const categoriesWithMonthlyTotal = await prisma.categories.findMany({
      include: {
        expenses: {
          where: {
            createdAt: {
              gte: startOFYearISO,
              lte: endOFcurrentMonthISO,
            },
          },
          select: {
            createdAt: true,
            amount: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    const result = categoriesWithMonthlyTotal.map((category) => {
      const monthlyTotal = {};

      category.expenses.forEach((expense) => {
        const createdAt = formateDateToMonthLT(expense.createdAt);
        if (!monthlyTotal[createdAt]) {
          monthlyTotal[createdAt] = 0;
        }
        monthlyTotal[createdAt] += expense.amount;
      });

      return {
        category: category.name,
        monthlyTotal,
      };
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}
