import React from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

const options = [
  { value: 1, label: "Account" },
  { value: 2, label: "Sales" },
  { value: 3, label: "Operations" },
];

const customChangeHandler = (values, actionMeta) => {
  console.log("values", values);
  console.log("actionMeta", actionMeta)
};

const selectStyles = {
  placeholder: (baseStyles, state)=>{
    return {
      ...baseStyles, color: "red" 
    }
  },
  multiValueRemove: (baseStyles, state)=>({
    ...baseStyles, color: state.isFocused ? "red" : "green"
  })
}

const loadOptions = (searchValue, callback) => {
  setTimeout(()=>{
    const filteredOptions = options.filter((option)=>(
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    ))
    console.log("loadOptions", searchValue, filteredOptions)
    callback(filteredOptions)
  }, 2000 )
}

const customTheme = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#313131",
      primary: "red"
    }
  }
}

const App = () => {
  return (
    <div style={{ width: 300 }}>
      <Select
        options={options}
        onChange={(values, actionMeta) => customChangeHandler(values, actionMeta)}
        placeholder="Please select department"
        isMulti
        // isSearchable
        noOptionsMessage={()=>"No more department to show"}
        styles={selectStyles}
      />
      <h1>AsyncSelect</h1>
      <AsyncSelect
        loadOptions={loadOptions}
        onChange={(values) => customChangeHandler(values)}
        placeholder="Please select department"
        isMulti
        isSearchable
        noOptionsMessage={()=>"No more department to show"}
        // styles={selectStyles}
        theme={customTheme}
        defaultOptions  //to load all the data at once
      />
    </div>
  );
};

export default App;
