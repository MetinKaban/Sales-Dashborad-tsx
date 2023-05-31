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

type ItemDetails = {
  id: number;
  name: string;
  price: string;
  totalSold: number;
  customers: string[];
  totalRevenue?: number;
  numberOfCustomers?: number;
};

export const calculateItemDetails = (
  salesData: Sale[]
): { [itemName: string]: ItemDetails } => {
  const itemDetails: { [itemName: string]: ItemDetails } = {};

  let id = 1; // Initialize the index number

  for (const sale of salesData) {
    for (const item of sale.Items) {
      const itemName = item.Item;
      const itemPrice = item.ItemPrice;
      const itemQuantity = parseInt(item.Quantity);

      if (!itemDetails[itemName]) {
        itemDetails[itemName] = {
          id: id, // Assign the index number as the id
          name: itemName,
          price: itemPrice,
          totalSold: itemQuantity,
          customers: [sale.CustomerName],
        };
        id++; // Increment the index number
      } else {
        itemDetails[itemName].totalSold += itemQuantity;
        if (!itemDetails[itemName].customers.includes(sale.CustomerName)) {
          itemDetails[itemName].customers.push(sale.CustomerName);
        }
      }
    }
  }

  return itemDetails;
};
