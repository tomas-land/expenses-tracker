import prisma from ".";

export async function getExpenseCategories() {
  try {
    const expenseCategories = await prisma.expenseCategory.findMany();
    return JSON.parse(JSON.stringify({ expenseCategories }));
  } catch (error) {
    return { error };
  }
}