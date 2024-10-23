import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (change) => {
    const { name, value } = change.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "firstName":
        if (value.length > 0 && value.length < 2) {
          errorMsg = "First Name must be at least 2 characters.";
        }
        break;
      case "lastName":
        if (value.length > 0 && value.length < 2) {
          errorMsg = "Last Name must be at least 2 characters.";
        }
        break;
      case "email":
        if (value.length > 0 && value.length < 5) {
          errorMsg = "Email must be at least 5 characters.";
        }
        break;
      case "password":
        if (value.length > 0 && value.length < 8) {
          errorMsg = "Password must be at least 8 characters.";
        }
        break;
      case "confirmPassword":
        if (value.length > 0 && value !== formData.password) {
          errorMsg = "Passwords do not match.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
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
          {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
