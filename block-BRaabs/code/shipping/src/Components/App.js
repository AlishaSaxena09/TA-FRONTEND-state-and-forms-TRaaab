import "../App.css";
import React from "react";

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="flex">
        <form className="form flex flex-col p-8 ">
          {/* address */}
          <label for="address">Address</label>
          <input type="text" id="address" name="fname" />
          {/* zip */}
          <label for="zip">Zip</label>
          <input id="zip" name="zip" type="text" pattern="[0-9]*" />
          {/* city */}
          <label for="city">City</label>
          <input type="text" id="city" name="city" />
          {/* country */}
          <label for="country">Country</label>
          <input type="country" id="country" name="country" />
        </form>
        {/* billing */}

        <form className=" flex flex-col p-8">
          {/* address */}
          <label for="address">Address</label>
          <input type="text" id="address" name="fname" />
          {/* zip */}
          <label for="zip">Zip</label>
          <input id="zip" name="zip" type="text" pattern="[0-9]*" />
          {/* city */}
          <label for="city">City</label>
          <input type="text" id="city" name="city" />
          {/* country */}
          <label for="country">Country</label>
          <input type="country" id="country" name="country" />
        </form>
      </div>
    );
  }
}

export default App;
