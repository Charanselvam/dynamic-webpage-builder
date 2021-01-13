import React, { useEffect, useState } from "react";
import renderfield from "./Render";
//import form from "../data.json";
//import form from "../data/data";
//const SERVER_URL ="https://my-json-server.typicode.com/Charanselvam/json/form";
const SERVER_URL = "http://localhost:3001/form";


// function for fetching json data
function usePosts() {
  const [form, setForm] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL)
      .then((res) => res.json())
      .then((data) => {
        setForm(data);
      });
  }, []);
  //console.log(form);
  return form;
}

// render function

export default function App() {
  const form = usePosts(); // new
  if (Object.keys(form).length < 1) {
    return "Loading...";
  }

  return (
    <div>
      <div className="container">
        <form id="contact" >
          <h1>{form.form_heading}</h1>
          {form.Attributes.map((field) => (
            <div className="input-group">
              <label htmlFor={field.Name}>{field.Name}</label>
              <fieldset>
                {renderfield(field)}
              </fieldset>
            </div>
          ))}

          <button type="submit">{form.ActionDisplayName}</button>
        </form>
      </div>
    </div>
  );
}
