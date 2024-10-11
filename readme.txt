    // <div className="row">
    //   <div className="col">
    //     <input 
    //       type="text" 
    //       name="input1"
    //       value={state.inputValues.input1 || ''} 
    //       onChange={handleChange} 
    //     />
    //   </div>
    //   <div className="col">
    //     <textarea 
    //       name="textarea1"
    //       value={state.inputValues.textarea1 || ''} 
    //       onChange={handleChange} 
    //     />
    //   </div>
    // </div>




    <div className="row">
            <div className="col-lg-3">
              <div className="m-3 bg-white rounded-20">
                <div className="row">
                  <div className="col m-4 small nav-color">
                    {
                    navList.map((item, index) => (
                      <div>
                        <div key={index} className={`rounded-1 ps-1 ${item.class}`}>
                          <i className={`${item?.icon}`}></i>
                          <span>{item.text}</span>
                        </div>
                        {(item?.subItems) && (
                          <ul className="list-unstyled">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <div className="ps-1 pt-3 pb-3 rounded-1 nav-hover">
                                  <div className="align-items-center row">
                                    <div className="col-lg-9">
                                      <i className={`ms-2 me-2 ${subItem.icon}`}></i>{subItem?.text}
                                    </div>
                                    {(subItem?.subItems) && (
                                      <div className="col-lg-3 text-center">
                                        <i className="bi bi-plus-lg"></i>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </li>
                            ))}
                            
                          </ul>
                        )}
                      </div>
                    ))
                    }
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="m-3 bg-white">
                safd
              </div>
            </div>
          </div>


          -----------------------------------------------
                  {/* <div className="form-group">
              <span className="bi bi-search form-control-search"></span>
              <input 
                type="text" 
                className="form-control rounded-1  search-text-box border-0 form-control-sm" 
                placeholder="Search Dashboard..."
              />
            </div> */}