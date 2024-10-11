import React, { useState, useRef } from 'react';
import Billing from '../components/billing';

export const Panel = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabs, setTabs] = useState([
    { title: "Bill - 1", state: { inputValues: {} } }
  ]);
  const tabCountRef = useRef(1);

  const handleInputChange = (index, name, value) => {
    const newTabs = [...tabs];
    newTabs[index].state.inputValues[name] = value;
    setTabs(newTabs);
  };

  const createNewTab = () => {
    tabCountRef.current += 1;
    setTabs([
      ...tabs,
      { title: `Bill - ${tabCountRef.current}`, state: { inputValues: {} } }
    ]);
    setActiveTabIndex(tabs.length);
  };

  const removeTab = (i) => {
    const newTabs = [...tabs];
    newTabs.splice(i, 1);
    setTabs(newTabs);
    if (i === activeTabIndex && activeTabIndex === newTabs.length) {
      setActiveTabIndex(newTabs.length - 1);
    } else if (i < activeTabIndex) {
      setActiveTabIndex(activeTabIndex - 1);
    }
  };

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="row align-items-center">
          {tabs.map((item, i) => (
            <div 
              key={i}
              className={`col-lg-1 pt-3 pb-3 small nav-color border-end border-white select ${(i === activeTabIndex) ? `bg-white small` : `bg-secondary-subtle`}`}
            >
              <div className="d-flex">
                <div 
                  className="w-100"
                  onClick={() => setActiveTabIndex(i)}
                >{item.title}</div>
                {(i !== 0) ? (
                  <div>
                    <i 
                      className="bi bi-x tab-colse-icon"
                      onClick={() => removeTab(i)}
                    ></i>
                  </div>
                ) : ""}
              </div>
            </div>
          ))}
          <div className="col-lg-1">
            <button 
              className="active-side-nav border-0 btn-sm rounded-1"
              onClick={createNewTab}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col bg-white">
            <Billing 
              state={tabs[activeTabIndex].state}
              onInputChange={(name, value) => handleInputChange(activeTabIndex, name, value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
