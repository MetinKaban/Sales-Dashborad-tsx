import useMainStore from "../store/main-store";

export const useFetchSalesData = (): (() => Promise<void>) => {
  const { setSalesData } = useMainStore();

  const fetchData = (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("http://localhost:3001/sales-data");
        const data = await response.json();
        setSalesData(data);
        console.log(data)
        resolve();
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };

  return fetchData;
};
