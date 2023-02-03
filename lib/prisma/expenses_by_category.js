import prisma from ".";

export async function getCategoryWithExpenses() {
  try {
    const data = await prisma.category.findMany({
      include: {
        CategoriesOnExpenses: {
          include: {
            Expense: true
          }
        }
      }
    });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return { error };
  }
}
