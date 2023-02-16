import prisma from ".";

export async function getCategoriesWithExpenses() {
  try {
    const categoriesWithExpenses = await prisma.Categories.findMany({
      // where: {
      //   expenses: {
      //     some: {
      //       createdAt: {
      //         lt: new Date('2023-03-01T00:00:00.000Z').toISOString(),
      //          gt: new Date('2023-02-01T00:00:00.000Z').toISOString(),
      //       }
      //     }
      //   }
      // },
      // include: {
      //   expenses: true,
      // },
      // take: 150, // optional limit to the number of returned Categories
      include: {
        expenses: true,
      },
    });
    //     const categoriesWithExpenses = await prisma.$queryRaw`
    // SELECT * FROM categories
    //      `;
    return JSON.parse(JSON.stringify(categoriesWithExpenses));
  } catch (error) {
    return { error };
  }
}
