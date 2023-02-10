import prisma from ".";
import dayjs from "dayjs";

export async function getCategoryWithExpenses() {
  try {
    const startOFMonth = dayjs().startOf("month").toISOString();
    const data = await prisma.Categories.findMany({
      include: {
        expenses: true,
      },
      where: {
        expenses: {
          some: {
            createdAt: {
              gte: startOFMonth,
            },
          },
        },
      },

      // include: {
      //   CategoriesOnExpenses: {
      //     include: {
      //       Expense: {
      //         select: {
      //           id: true,
      //           createdAt: true,
      //           amount: true,
      //           desc: true
      //         }
      //       }
      //     }
      //   }
      // }

      // select: {
      //   name: true,
      // },
      // include: {
      //   CategoriesOnExpenses: {
      //     include: {
      //       Expense: {
      //         select: {
      //           amount: true,
      //         }
      //       }
      //     }
      //   }
      // },
      // include: {
      //   CategoriesOnExpenses: {
      //     include: {
      //       Expense: true
      //     }
      //   }
      // },

      // where: {
      //   CategoriesOnExpenses: {
      //     some: {
      //       Expense: {
      //         createdAt: {
      //           gt: new Date("2023-02-07").toISOString(),
      //         }
      //       }
      //     }
      //   }
      // },

      //expense model////////////////
      // where: {
      //   createdAt: {
      //     gt: new Date("2023-02-06").toISOString(),
      //   },
      // },
      // include: {
      //   CategoriesOnExpenses: {
      //     include: {
      //       Category: {
      //        select: {
      //           name: true,
      //        }
      //       }
      //     },
      //   },
      // },
      //   select: {
      //     CategoriesOnExpenses: {
      //       select: {
      //         Expense: {
      //           where: {
      //             createdAt: {
      //               gt: new Date("2023-02-07").toISOString(),
      //             }
      //         },
      //       },
      //     },
      //   },
      // }
      // select: {
      //   CategoriesOnExpenses: {
      //     select: {
      //       Category: {
      //         where: {
      //           amount: 106,
      //         },
      //       },
      //     },
      //   },
      // },

      // include: {
      //   CategoriesOnExpenses: {
      //     include: {
      //       Expense: {
      //         select: {
      //           createdAt: {
      //             gt: new Date("2023-02-04").toISOString(),
      //           },
      //         },
      //       },
      //     },
      //   },
      // },

      // include: {
      //   CategoriesOnExpenses: {
      //     include: {
      //       Expense: {
      //         select: {
      //           createdAt: {
      //             gt: new Date("2023-02-04").toISOString(),
      //           },
      //         },
      //       },
      //     },
      //   },
      // },

      // where: {
      //   CategoriesOnExpenses: {
      //     some: {
      //       Expense: {
      //         createdAt: {
      //           gt: new Date("2023-02-04").toISOString(),
      //         },
      //       },
      //     },
      //   },
      // },
    });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return { error };
  }
}
