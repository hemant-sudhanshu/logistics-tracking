import { useCallback, useEffect, useState } from "react";
import { useShipmentQuery } from "../../../hooks/queries";
import { Spinner, TabBar } from "../../../components";
import { FilterDropdown, ShipmentsList, SortingDropdown } from "./components";
import { strings, staticData } from "../../../constants";

export const Home = () => {
  const {
    primary: { common, tabs },
  } = strings;

  const { filterOptions, sortingOptions } = staticData;

  const [activeTab, setActiveTab] = useState(common.all);
  const [reqQuery, setReqQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);
  const [activeOption, setActiveOption] = useState(sortingOptions[0]);

  // API call to fetch shipments
  const {
    data: shipmentsData,
    isPending,
    isSuccess,
  } = useShipmentQuery(reqQuery);

  const createReqQuery = () => {
    var query = "";
    if (activeTab !== common.all) {
      query += `isIncoming=${activeTab === common.incoming}`;
    }
    query += `&filter=${activeFilter}`;
    query += `&sort=${JSON.stringify(activeOption.value)}`;

    console.log("Query..:", query);
    setReqQuery(query);
  };

  useEffect(() => {
    console.log("useEffect...");
    createReqQuery();
  }, [activeTab, activeFilter, activeOption]);

  const handleTabSwitch = useCallback((type) => {
    setActiveTab(type);
  }, []);

  const handleFilterClick = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  const handleSortingClick = useCallback((option) => {
    setActiveOption(option);
  }, []);

  console.log("Home");

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col p-2 space-y-2  md:space-x-2  md:flex-row justify-between">
        <TabBar
          activeTab={activeTab}
          tabs={tabs}
          tabHandler={handleTabSwitch}
        />

        <div className="flex justify-between md:space-x-2">
          <FilterDropdown
            activeFilter={activeFilter}
            handleFilterClick={handleFilterClick}
            options={filterOptions}
          />

          <SortingDropdown
            activeOption={activeOption}
            handleSortingClick={handleSortingClick}
            options={sortingOptions}
          />
        </div>
      </div>

      {!isPending && isSuccess && shipmentsData?.length >= 0 ? (
        <ShipmentsList shipments={shipmentsData} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};
