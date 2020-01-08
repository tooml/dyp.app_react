import { useState } from "react";

const useOptions = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const [disabled, setDisabled] = useState(false);
  
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  }

  const onChangeDisabled = (e: any) => {
    setDisabled(e.target.value);
  }

  return { 
      value,
      setValue,
      disabled,
      setDisabled,
      onChangeValue,
      onChangeDisabled
    };
};

export default useOptions;