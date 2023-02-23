import prisma from ".";

export async function getCategoriesWithExpenses() {
  try {
    const categoriesWithExpenses = await prisma.Categories.findMany({
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
