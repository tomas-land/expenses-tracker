export interface iCategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  CategoriesOnExpenses: [];
}
export interface iExpense {
  id: number;
  amount: number;
  desc?: null | string;
  createdAt: Date;
  updatedAt: Date;
  CategoriesOnExpenses: [];
}
