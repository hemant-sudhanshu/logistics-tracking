import { useCallback, useEffect, useState } from "react";
import {
  redirect,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useShipmentQuery } from "../../../hooks/queries";
import { Spinner, TabBar } from "../../../components";
import { FilterDropdown, ShipmentsList, SortingDropdown } from "./components";
import { strings, staticData, routes } from "../../../constants";

export const Home = () => {
  const {
    primary: { common, tabs },
  } = strings;

  const navigate = useNavigate();
  // const location = useLocation();

  const { filterOptions, sortingOptions } = staticData;

  let [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [reqQuery, setReqQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(filterOptions[0]);
  const [activeOption, setActiveOption] = useState(sortingOptions[0]);

  // API call to fetch shipments
  const {
    data: shipmentsData,
    isPending,
    isSuccess,
  } = useShipmentQuery(reqQuery);

  // Parse query parameters to set initial state
  useEffect(() => {
    createReqQuery();
  }, [searchParams]);

  const createReqQuery = () => {
    var query = "";
    const type = searchParams.get("type");
    const timeStamp = searchParams.get("timeStamp");
    const sortKey = searchParams.get("sortKey");

    if (type) {
      setSelectedTab(type);
      query += `type=${searchParams.get("type")}`;
    }

    if (timeStamp) {
      setSelectedFilter(timeStamp);
      if (query.length > 0) {
        query += "&";
      }
      query += `timeStamp=${timeStamp}`;
    }

    if (sortKey) {
      setSelectedSortOption(sortKey);
      if (query.length > 0) {
        query += "&";
      }
      query += `sortby=${sortKey}`;
    }

    console.log("Query..:", query);
    setReqQuery(query);
  };

  const setSelectedTab = (keyName) => {
    const tab = tabs.find((item) => item.key === keyName);
    setActiveTab(tab);
  };

  const setSelectedFilter = (keyName) => {
    const filter = filterOptions.find((item) => item.filterKey === keyName);
    setActiveFilter(filter);
  };

  const setSelectedSortOption = (keyName) => {
    const sortOption = sortingOptions.find((item) => item.sortKey === keyName);
    setActiveOption(sortOption);
  };

  const handleTabSwitch = useCallback((type) => {
    searchParams.set("type", type.key);
    setSearchParams(searchParams);
  });

  const handleFilterClick = useCallback((filter) => {
    searchParams.set("timeStamp", filter.filterKey);
    setSearchParams(searchParams);
  });

  const handleSortingClick = useCallback((option) => {
    searchParams.set("sortKey", option.sortKey);
    setSearchParams(searchParams);
  });

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
