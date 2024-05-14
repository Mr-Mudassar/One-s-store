import React from "react";

const InputField = ({errors, name, type, placeholder, values, onChange, onBlur, icon=""}) => {
  return (
    <div className="relative my-6">
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-theme-primaryBg border border-theme-primaryBorder placeholder-theme-tertiary text-sm focus:outline-none focus:border-gray-600 text-theme-primary ,"
        type={type}
        placeholder={placeholder}
        name={name}
        value={values}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && (
        <p className="form-error text-theme-btnBgText text-xs absolute top-full -mt-2.5 left-1 z-30 bg-theme-primaryBg px-1 ml-1">
          {errors}
        </p>
      )}

      {icon}
    </div>
  );
};

export default InputField;
