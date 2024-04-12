import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Register() {
  return (
    <div className="container">
      <h2 className="mt-5">Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
