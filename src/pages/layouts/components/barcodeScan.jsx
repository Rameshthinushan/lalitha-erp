import { useState, useEffect } from "react"
import BarcodeScannerComponent from "react-qr-barcode-scanner"
import { Link, useNavigate } from "react-router-dom";

const BarcodeScan = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (data && data !== "Not Found") {
      navigate("/login"); 
    }
  }, [data, navigate]);
  return (
    <div className="container-fluid">
      <div className="row mt-2 mb-2">
        <div className="col">
          <Link to="/">
            <button className="btn btn-sm btn-primary">
              Go Back
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mx-auto text-center">
          <input type="text" className="form-control" value={data} />
            <BarcodeScannerComponent
              width={300}
              height={300}
              onUpdate={(err, result) => {
                if (result) setData(result.text);
                else setData("Not Found");
              }}
            />
        </div>
      </div>
    </div>
  )
}

export default BarcodeScan