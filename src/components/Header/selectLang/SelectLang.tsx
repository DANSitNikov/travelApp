import React, {useRef} from "react";

const SelectLang = () => {
  const optionsValue = useRef<HTMLSelectElement>(null);

  const newLangValue = () => {
    if (optionsValue && optionsValue.current) {
      console.log(optionsValue.current.selectedIndex);
    }
  };

  return (
    <div>
      <select ref={optionsValue} onClick={newLangValue}>
        <option value='Russian'>Russian</option>
        <option value='English'>English</option>
        <option value='Chinese'>Chinese</option>
      </select>
    </div>
  );
};

export default SelectLang;
