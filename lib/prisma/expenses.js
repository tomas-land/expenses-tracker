import prisma from ".";

export async function getExpensesWithCategory() {
  try {
    const expenses = await prisma.expense.findMany({
      include: {
        CategoriesOnExpenses: {
          include: {
            Category: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return JSON.parse(JSON.stringify(expenses));
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function createExpense(expense) {
  const { amount, desc, expensesCategoryID } = expense;
  try {
    const expenseDB = await prisma.expense.create({
      data: {
        amount: amount,
        desc: desc,
        categories: {
          create: [
            {
              assignedAt: new Date(),
              category: {
                connect: {
                  id: expensesCategoryID,
                },
              },
            },
          ],
        },
      },
    });
    return { expense: expenseDB };
  } catch (error) {
    return { error };
  }
}
///////////////////////
export async function deleteExpense(id) {
  try {
    const expense = await prisma.expense.delete({
      where: { id: Number(id) },
    });
    return { expense };
  } catch (error) {
    return { error };
  }
}
////////////////////////
export async function getTotalAmountExpenses() {
  try {
    const totalAmountExpenses = await prisma.expense.aggregate({
      _sum: {
        amount: true,
      },
    });
    return { totalAmountExpenses };
  } catch (error) {
    return { error };
  }
}
