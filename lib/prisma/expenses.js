import prisma from ".";

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        amount: true,
        desc: true,
        createdAt: true,
        // categories: {
        //   select: {
        //     category: {
        //       select: {
        //         name: true,
        //       },
        //     },
        //   },
        // },
      },
    });
    return JSON.parse(JSON.stringify({ expenses }));
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
      // where: {
      //   email: {
      //     contains: "prisma.io",
      //   },
      // },
    });
    return { totalAmountExpenses };
  } catch (error) {
    return { error };
  }
}
