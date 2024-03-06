import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    surname: "",
    firstName: "",
    middleName: "",
    homeAddress: "",
    parishAddress: "",
    phoneNumber: "",
    homeParish: "",
    LGA: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("./process_form.php", {
      // Changed '/the-php-endpoint' to './process_form.php'
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submission response:", data);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="divider"> Identification</p>
      <label htmlFor="firstName">First Name:</label>
      <p> </p>

      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name:</label>
      <p> </p>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <p>Your official Email Address.</p>

      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <p> </p>
      <input
        type="text"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      {/* Add more fields here */}
      <label htmlFor="surname">Surname:</label>
      <p> </p>
      <input
        type="text"
        id="surname"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
      />
      <label htmlFor="middleName">Middle Name:</label>
      <p> </p>
      <input
        type="text"
        id="middleName"
        name="middleName"
        value={formData.middleName}
        onChange={handleChange}
      />
      <p>--------------------------------------------------------------------</p>

      <p className="divider"> Demographic Details</p>
      <label htmlFor="homeAddress">Home Address:</label>
      <p>Enter your home address.</p>

      <input
        type="text"
        id="homeAddress"
        name="homeAddress"
        value={formData.homeAddress}
        onChange={handleChange}
      />
      <label htmlFor="parishAddress">Parish Address:</label>
      <p>Enter the address of your current Parish.</p>

      <input
        type="text"
        id="parishAddress"
        name="parishAddress"
        value={formData.parishAddress}
        onChange={handleChange}
      />
      <label htmlFor="homeParish">Home Parish:</label>
      <p>Enter the name of your home parish.</p>
      <input
        type="text"
        id="homeParish"
        name="homeParish"
        value={formData.homeParish}
        onChange={handleChange}
      />
      <label htmlFor="LGA">LGA:</label>
      <p>Enter Your Local Govt.</p>

      <input
        type="text"
        id="LGA"
        name="LGA"
        value={formData.LGA}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      <p className="erroMsg">
        {" "}
        Please enter a valid Home Address and Parish Name
      </p>
    </form>
  );
};

export default Form;
