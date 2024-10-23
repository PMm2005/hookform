import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@johnsmith.com",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (change) => {
    const { name, value } = change.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </form>

      <h2>Your Form Data</h2>
      <div>
        <p>First Name:    {formData.firstName}</p>
        <p>Last Name:    {formData.lastName}</p>
        <p>Email:    {formData.email}</p>
        <p>Password:   {formData.password}</p>
        <p>Confirm Password:   {formData.confirmPassword}</p>
      </div>
    </div>
  );
}

export default RegistrationForm;
