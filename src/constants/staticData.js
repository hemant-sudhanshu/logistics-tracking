export const staticData = {
  cities: ["Delhi", "Patna", "Mumbai", "Pune", "Bangalore"],
  statuses: ["Initiated", "Processed", "Picked", "Delivered", "Delayed"],
  actions: ["Approved", "Processed", "Picked", "Delivered"],
  filterOptions: [
    {
      title: "All",
      filterKey: "all",
    },
    {
      title: "Last Week",
      filterKey: "lastWeek",
    },
    {
      title: "Last Month",
      filterKey: "lastMonth",
    },
    {
      title: "Last Year",
      filterKey: "lastYear",
    },
  ],
  sortingOptions: [
    {
      title: "Date ↓",
      sortKey: "date-desc",
    },
    {
      title: "Date ↑",
      sortKey: "date-asc",
    },
    {
      title: "Title ↓",
      sortKey: "title-desc",
    },
    {
      title: "Title ↑",
      sortKey: "title-asc",
    },

    {
      title: "ShipmentID ↓",
      sortKey: "shipmentId-desc",
    },
    {
      title: "ShipmentID ↑",
      sortKey: "shipmentId-asc",
    },
  ],
};
