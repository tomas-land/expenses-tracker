import prisma from ".";

export async function getCategories() {
  try {
    const categories = await prisma.Categories.findMany();
    return JSON.parse(JSON.stringify( categories ));
  } catch (error) {
    return { error };
  }
}