import prisma from ".";

export async function getExpensesWithCategory() {
  try {
    const expenses = await prisma.expense.findMany({
      where: {
        createdAt: {
          // lte: 2022-01-30,
          gte: new Date("2023-02-01").toISOString(), // "2022-01-15T00:00:00.000Z"
        },
      },
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
  const { amount, desc, categoryID } = expense;
  try {
    const expenseDB = await prisma.expense.create({
      data: {
        amount: amount,
        desc: desc,
        CategoriesOnExpenses: {
          create: [
            {
              assignedAt: new Date(),
              Category: {
                connect: {
                  id: categoryID,
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
    const expense = await prisma.Expense.delete({
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
    return totalAmountExpenses;
  } catch (error) {
    return { error };
  }
}
