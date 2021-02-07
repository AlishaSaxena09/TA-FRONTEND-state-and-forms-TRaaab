import React from "react";
function Step1(props) {
  return (
    <div>
      <nav>
        <div>
          <h2>Sign Up</h2>
        </div>
      </nav>
      <form>
        <h1>Sign Up</h1>
        <label for="firstname">First name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="First Name"
          value={props.firstName}
          onChange={(e) => props.handleChange("firstName", e.target.value)}
        />
        {/*  */}
        <label for="lastname">Last name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          value={props.lastName}
          onChange={(e) => props.handleChange("lastName", e.target.value)}
        />
        {/*  */}
        <label for="date-of-birth">Date Of Birth</label>
        <input
          type="date"
          id="date-of-birth"
          name="date-of-birth"
          value={props.dateOfBirth}
          onChange={(e) => props.handleChange("dateOfBirth", e.target.value)}
        />
        {/*  */}
        <label for="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={(e) => props.handleChange("email", e.target.value)}
        />
        {/*  */}
        <label for="address">Address </label>
        <input
          type="address"
          id="address"
          name="address"
          placeholder="Address"
          value={props.address}
          onChange={(e) => props.handleChange("address", e.target.value)}
        />
        {/*  */}
        <button type="button" onClick={() => props.setActiveStep(2)}>
          Next Step
        </button>
      </form>
    </div>
  );
}

export default Step1;
