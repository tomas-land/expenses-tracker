import prisma from ".";

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    return { expenses };
  } catch (error) {
    return { error };
  }
}
