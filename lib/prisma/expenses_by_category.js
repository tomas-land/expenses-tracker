import prisma from ".";

export async function getTotalFoodExpenses() {
  try {
    const expenses = await prisma.expense.findMany();
    return JSON.parse(JSON.stringify({ expenses }));
  } catch (error) {
    return { error };
  }
}
