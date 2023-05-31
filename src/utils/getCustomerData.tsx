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

type CustomerData = {
  customerId: number;
  customerName: string;
  total: number;
  boughtItems: { item: string; amount: number }[];
};

export const getCustomerData = (salesData: Sale[]): CustomerData[] => {
  const customers: { [customerName: string]: CustomerData } = {};

  for (const sale of salesData) {
    const { CustomerName, Total, Items } = sale;

    if (!(CustomerName in customers)) {
      customers[CustomerName] = {
        customerId: sale.CustomerId,
        customerName: CustomerName,
        total: 0,
        boughtItems: [],
      };
    }

    const customer = customers[CustomerName];
    customer.total += parseFloat(Total.slice(1)); // Remove the dollar sign and convert to number

    for (const item of Items) {
      const existingItem = customer.boughtItems.find((boughtItem) => boughtItem.item === item.Item);

      if (existingItem) {
        existingItem.amount += parseInt(item.Quantity);
      } else {
        customer.boughtItems.push({
          item: item.Item,
          amount: parseInt(item.Quantity),
        });
      }
    }
  }

  return Object.values(customers);
};