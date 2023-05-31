import { create } from "zustand";

type SaleItem = {
  Item: string;
  ItemPrice: string;
  Quantity: string;
};

type Sale = {
  OrderId: number;
  CustomerId: number;
  CustomerName: string;
  Total: string;
  Date: string;
  Items: SaleItem[];
};

interface MainState {
  salesData: Sale[] | [];
  setSalesData: (data: Sale[]) => void;
}

const useMainStore = create<MainState>((set) => ({
  salesData: [],
  setSalesData: (data = []) =>
    set(() => ({
      salesData: data,
    })),
}));

export default useMainStore;
