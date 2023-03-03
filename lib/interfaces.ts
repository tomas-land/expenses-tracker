export interface iCategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
}
export interface iExpense {
  id: number;
  amount: number;
  desc?: null | string;
  createdAt: number;
  updatedAt?: Date;
  category?: iCategory;
}
