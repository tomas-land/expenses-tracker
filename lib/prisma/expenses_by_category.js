import prisma from ".";

export async function getCategoryWithExpenses() {
  try {
    const expenses = await prisma.category.findMany({
      select: {
        name: true,
        expenses: true,
      },
      // where: {
      //   expenses: {
      //     some: {
      //       expense: {
      //         amount: is,
      //       },
      //     },
      //   },
      // },
    });
    return JSON.parse(JSON.stringify(expenses));
  } catch (error) {
    return { error };
  }
}
