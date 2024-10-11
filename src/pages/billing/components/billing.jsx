import React, {useState} from 'react';

const Billing = ({ state, onInputChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  }

  const [productList, setProductList] = useState([{
    product_title: 'Product A',
    quantity: '10',
    Price: '100',
    product_image: '',
    product_brand: 'ABC',
    product_category: 'testing',
    product_sku: 'AB-1234'
  }, {
    product_title: '',
    quantity: '',
    Price: '',
    product_image: '',
    product_brand: '',
    product_category: '',
    product_sku: ''
  }, {
    product_title: '',
    quantity: '',
    Price: '',
    product_image: '',
    product_brand: '',
    product_category: '',
    product_sku: ''
  }])




  return (
    <div className="row">
      <div className="col small pb-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col">
                <div className="shadow rounded-1 mt-3 mb-3 p-3 bg-white border">
                  <div className="mb-3">
                    <h6>Ptoduct List</h6>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div class="form-group">
                        <span class="bi bi-search form-control-search"></span>
                        <input 
                          type="text" 
                          class="form-control rounded-1  search-text-box border-0 form-control-sm" 
                          placeholder="Search Product Name or Product Number or Barcode.." 
                          name="search"
                          value={state.inputValues.search || ''} 
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <ul className="list-unstyled">
                        <li className="fw-bold p-2">
                          <div className="row">
                            <div className="col-lg-5">Itam</div>
                            <div className="col-lg-2">Brand</div>
                            <div className="col-lg-2">Quantity</div>
                            <div className="col-lg-2">Amount</div>
                            <div className="col-lg-1">Add</div>
                          </div>
                        </li>
                        {
                          productList.map(() => (
                            <li className="small p-2 border-top">
                              <div className="row">
                                <div className="col-lg-5">
                                  <div className="">
                                    <div className="fw-medium">Sony FX3 Full-Frame Cinema Camera</div>
                                    <div className="text-secondary">#ABCF-1120</div>
                                  </div>
                                </div>
                                <div className="col-lg-2">Sony</div>
                                <div className="col-lg-2">10</div>
                                <div className="col-lg-2">123.00</div>
                                <div className="col-lg-1">
                                  <button className="btn btn-sm btn-dark">
                                    <i class="bi bi-plus-lg"></i>
                                  </button>
                                </div>
                              </div>
                          </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col"> 
                <div className="shadow rounded-1 mt-3 p-3 bg-white border overflow-y-scroll card-height-default">

                  <div className="row mt-3">
                    <div className="col">
                      <div className="mb-3">
                        <h6>Item Cart</h6>
                      </div>
                      <ul className="list-unstyled">
                        <li className="fw-bold p-2 card-item-title bg-white">
                          <div className="row">
                            <div className="col-lg-3">Itam</div>
                            <div className="col-lg-3">Quantity</div>
                            <div className="col-lg-2">Amount</div>
                            <div className="col-lg-3">Discount</div>
                            <div className="col-lg-1">Add</div>
                          </div>
                        </li>
                        {
                          productList.map(() => (
                            <li className="p-2 border-top small">
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="">
                                    <div className="fw-medium">Sony FX3 Full-Frame Cinema Camera</div>
                                    <div className="text-secondary">#ABCF-1120</div>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="d-flex align-items-center border">
                                    <div className="w-50 text-center"><i class="bi bi-plus-lg"></i></div>
                                    <div className="w-100">
                                      <input type="" className='form-control rounded-0 border-top-0 border-bottom-0 text-center' value={10}/>
                                    </div>
                                    <div className="w-50 text-center">-</div>
                                  </div>
                                </div>
                                

                                <div className="col-lg-2">12 000.00</div>
                                <div className="col-lg-3">
                                  <div className="d-flex align-items-center border">
                                    <div className="w-50 text-center"><i class="bi bi-plus-lg"></i></div>
                                    <div className="w-100">
                                      <input type="text" className='form-control rounded-0 border-top-0 border-bottom-0 text-center' value="150" />
                                    </div>
                                    <div className="w-50 text-center">-</div>
                                  </div>
                                </div>
                                <div className="col-lg-1">
                                  <button className="btn btn-sm btn-danger">
                                    <i class="bi bi-x-lg"></i>
                                  </button>
                                </div>
                              </div>
                          </li>
                          ))
                        }
                        <li>

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="shadow rounded-1 mt-3 p-3 bg-white border">
                        <div>Total: quantuiy</div>
                        <div>NetTotal</div>
                        <div>Discount</div>
                        <div>GrandTotal</div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="shadow rounded-1 mt-3 p-3 bg-white border">
                        
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <button>Suspand</button>
                    </div>
                    <div className="col-lg-4">
                      <button>Hold</button>
                    </div>
                    <div className="col-lg-4">
                    <div className="col-lg-4">
                      <button>Check out</button>
                    </div>
                    </div>
                  </div>

                </div>

                
              
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;