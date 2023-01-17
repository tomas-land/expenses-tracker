import prisma from ".";

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        }
      ],
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    return JSON.parse(JSON.stringify({ expenses }));
  } catch (error) {
    return { error };
  }
}
export async function createExpense(expense) {
  try {
    const expenseDB = await prisma.expense.create({
      data: expense,
    });
    return { expense: expenseDB };
  } catch (error) {
    return { error };
  }
}
