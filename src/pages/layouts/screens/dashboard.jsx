import { useParams, Link } from "react-router-dom";
import { useState } from "react";


const Dashboard = () => {

  const { domin } = useParams();
  const url = typeof domin === 'undefined' ? 'sales' : domin;

  const [showTabs, setShowTabs] = useState(true);

  const tabs = [
    { text: 'Sales', showInitially: false, to: '/sales', slug: 'sales' },
    { text: 'Purchase', showInitially: false, to: '/purchase', slug: 'purchase' },
    { text: 'Order', showInitially: false, to: '/order', slug: 'order' },
    { text: 'Smith', showInitially: true, to: '/smith', slug: 'smith' },
    { text: 'Repair', showInitially: true, to: '/repair', slug: 'repair' },
  ];

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col text-end mt-3 mb-3">
          <Link to="/barcode">
            <button className="btn btn-sm btn-primary">
              Scan Barcode
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col ms-2 me-2">
          <div className="row small align-items-center">
            {tabs.map((tab, index) => {
              const shouldShow = showTabs ? !tab.showInitially : tab.showInitially;
              if (shouldShow) {
                return (
                  <div
                    key={index}
                    className={`${url === tab.slug ? 'bg-white' : 'bg-secondary'} col-lg-1 pt-3 pb-3 border-end`}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to={tab.to}
                    >
                      <div>{tab.text}</div>
                    </Link>
                  </div>
                );
              }
              return null;
            })}

            <div
              className="col-lg-1 bg-secondary pt-3 pb-3 border-end text-center"
              onClick={() => setShowTabs(!showTabs)}
              style={{ cursor: 'pointer' }}
            >
              <i className={`bi bi-caret-${showTabs ? 'right' : 'left'}-fill`}></i>
            </div>
          </div>
          <div className="row">
            <div className="col bg-white">
              {url}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;