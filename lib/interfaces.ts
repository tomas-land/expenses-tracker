export interface iCategory {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
}
export interface iExpense {
  id: number;
  amount: number;
  desc: string | null;
  createdAt: string;
  category: iCategory;
}
