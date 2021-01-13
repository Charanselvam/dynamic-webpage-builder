const form = {
    form_heading: "Contact Form",
    ActionDisplayName: "Login",
    Attributes: [
      {
        Name: "Username",
        Size: "10",
        Type: "TextBox"
      },
      {
        Name: "Password",
        Size: "10",
        Type: "SecretTextBox"
      },
      {
        Name: "DOB",
        Size: "10",
        Type: "date"
      },
      {
        Name: "File",
        Size: "10",
        Type: "file"
      },
      {
        Name: "Charan",
        Size: "10",
        Type: "tel"
      },
      {
        Name: "Reset",
        Size: "10",
        Type: "reset"
      },
      {
        Name: "email",
        Size: "10",
        Type: "email"
      },
      {
        Name: "Gender",
        Options: [
          {
            DisplayValue: "Male",
            Value: "male"
          },
          {
            DisplayValue: "Female",
            Value: "female"
          }
        ],
        Type: "RadioButton"
      },
      {
        Name: "Gender",
        Options: [
          {
            DisplayValue: "Male",
            Value: "male"
          },
          {
            DisplayValue: "Female",
            Value: "female"
          }
        ],
        Type: "CheckBox"
      },
      {
        DropdownValue: [
          {
            DisplayValue: "Guest",
            Value: "guest"
          },
          {
            DisplayValue: "Admin",
            Value: "admin"
          }
        ],
        Name: "UserType",
        Type: "Dropdown"
      }
    ]
  };
  
  export default form;
  