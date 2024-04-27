import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Login() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#4e73df',
  };

  const cardStyle = {
    maxWidth: '700px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <body style={containerStyle}>
      <div className="container" style={cardStyle}>

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{ padding: '50px' }}>
                <img src="../assets/img/IVMS.png" alt="Login Image" style={imageStyle} />
              </div>

              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                  </div>
                  <form className="user" method="POST" action="">
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" name="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control form-control-user" name="password" id="exampleInputPassword" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-user btn-block">
                      Login
                    </button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="register.html">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
