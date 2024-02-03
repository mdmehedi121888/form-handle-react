import { useState } from "react";

const App = () => {
  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const inputOnChange = (property, value) => {
    setFormObj({ ...formObj, [property]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formObj);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          onChange={(e) => inputOnChange("fName", e.target.value)}
          placeholder="first name"
          value={formObj.fName}
        ></input>
        <br />
        <input
          onChange={(e) => inputOnChange("lName", e.target.value)}
          placeholder="last name"
          value={formObj.lName}
        ></input>
        <br />
        <select
          onChange={(e) => inputOnChange("city", e.target.value)}
          name=""
          id=""
          value={formObj.city}
        >
          {" "}
          <option value="">select city</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Chittagong">Chittagong</option>
        </select>
        <br />
        <input
          type="radio"
          onChange={() => inputOnChange("gender", "Male")}
          name="gender"
          checked={formObj.gender === "Male"}
        ></input>
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          onChange={() => inputOnChange("gender", "Female")}
          checked={formObj.gender === "Female"}
        ></input>
        <label>Female</label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default App;
