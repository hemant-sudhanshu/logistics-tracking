import React from "react";

export const TabBar = React.memo((props) => {
  const { activeTab, tabs, tabHandler } = props;

  return (
    <div className="flex border-b text-light space-x-4">
      {tabs.map((item, index) => (
        <button
          key={item.key}
          className={`py-2 -mb-px font-semibold border-b-2 ${
            activeTab.key === item.key
              ? "border-color text-color"
              : "border-transparent text-light"
          } focus:outline-none`}
          onClick={() => tabHandler(item)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
});
