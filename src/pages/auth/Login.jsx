import { useState } from "react"

const Login = () => {
  const [passwordType, setPasswordType] = useState(false);
console.log(passwordType)
  return (
    <div className="row mx-h align-items-center">
      <div className="col">
        <form action="">
          <div className="row">
            <div className="col-lg-3 col-10 mx-auto border p-4 rounded-1 login-container">
              <div className="mb-3">
                <div className="fs-1 fw-medium ">Login</div>
                <div className="small text-secondary"> Welcome back &#128526;. Enter your login details..</div>
              </div>
              <div className="">
                <div className="mb-2">
                  <label htmlFor="username" className="text-secondary small fw-medium">User Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-sm p-3 rounded-0 rounded-1" 
                    placeholder="xxxxxxxxxxx"
                    id="username"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="text-secondary small fw-medium">Password</label>
                  <input 
                    type={passwordType? 'text': 'password'} 
                    className="form-control form-control-sm p-3 rounded-0 rounded-1" 
                    placeholder="Enter 6 charcter or more"
                    id="password"
                  />
                  <div className="text-end">
                    <i 
                      className="bi bi-eye show-password select"
                      onClick={() => setPasswordType(!passwordType)}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="text-primary text-end small mb-3">Forget Password ?</div>
              <div className="">
                <button className="btn text-white custom-login-btn w-100 rounded-1 p-2">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login