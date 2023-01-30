import prisma from ".";

export async function getCategoryWithExpenses() {
  try {
    const expenses = await prisma.category.findMany({
      select: {
        name: true,
        expense: {
          select: {
            amount: true,
          },
        },
      },
    });
    return JSON.parse(JSON.stringify(expenses));
  } catch (error) {
    return { error };
  }
}

