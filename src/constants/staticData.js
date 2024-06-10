export const staticData = {
  cities: ["Delhi", "Patna", "Mumbai", "Pune", "Bangalore"],
  statuses: ["Transit", "Delayed", "Delivered"],
  filterOptions: ["All", "Last Week", "Last Month", "Last Year"],
  sortingOptions: [
    {
      key: "Date ↓",
      value: { date: -1 },
    },
    {
      key: "Date ↑",
      value: { date: 1 },
    },
    {
      key: "Title ↓",
      value: { title: -1 },
    },
    {
      key: "Title ↑",
      value: { title: 1 },
    },

    {
      key: "ShipmentID ↓",
      value: { shipmentId: -1 },
    },
    {
      key: "ShipmentID ↑",
      value: { shipmentId: 1 },
    },
  ],
};
