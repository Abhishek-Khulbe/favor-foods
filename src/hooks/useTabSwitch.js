import { useEffect, useState } from "react";

const useTabSwitch = (tabs, defaultTab) => {
  const [currTab, setCurrTab] = useState(defaultTab);

  useEffect(() => {
    setCurrTab(defaultTab);
  }, [defaultTab]);

  const handleTabSwitch = (tab) => {
    setCurrTab(tab);
  };

  return [currTab, handleTabSwitch];
};

export default useTabSwitch;
