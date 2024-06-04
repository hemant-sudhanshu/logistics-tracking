import { useShipmentQuery } from "../../../queries";
import { Spinner } from "../../../components";
import { ShipmentsList } from "./components";
import { strings } from "../../../constants";

export const Home = () => {
  // API call to fetch shipments
  const {
    data: shipmentsData,
    isPending,
    isError,
    isSuccess,
  } = useShipmentQuery();

  return (
    <div className="p-4">
      {!isPending && isSuccess && shipmentsData?.length >= 0 ? (
        <ShipmentsList shipments={shipmentsData} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};
