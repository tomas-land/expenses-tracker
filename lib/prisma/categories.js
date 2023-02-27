import prisma from ".";

export async function getCategories() {
  try {
    const categories = await prisma.Categories.findMany();
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    return { error };
  }
}
////////////////////////////
export async function createNewCategory(data) {
  const { categoryName } = data;
  try {
    const newCategory = await prisma.Categories.create({
      data: {
        name: categoryName,
      },
    });
    return { newCategory };
  } catch (error) {
    return { error };
  }
}
