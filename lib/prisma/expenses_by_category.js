import prisma from ".";

export async function getTotalFoodExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      // distinct: ['expensesCategoryID'],
      // by: ["expensesCategoryID"],
      // _sum: {
      //   amount: true,
      // },
      // include: {
      //   category: true
      // },
      // orderBy:{
      //   amount:true
      // }
      // having: {
      //   category: {
      //     name:true
      //   }
      //   },
      select: {
        amount: true,
          category: {
            select: {
              name: true,
          }
        },
      }
      // orderBy: {
      //   expensesCategoryID: "desc",
      // },
      // include:{

      // }
      // orderBy: {

      //     name: 'desc',
      //   },
      // },
      // _sum: {
      //   amount: true,
      // },
    });
    return JSON.parse(JSON.stringify(expenses));
  } catch (error) {
    return { error };
  }
}
