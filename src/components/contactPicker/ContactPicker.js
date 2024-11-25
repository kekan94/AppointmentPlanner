import React from "react";

export const ContactPicker = ({contacts, handleContactChange, value, name}) => {
  return (
    <>
      <select onChange={handleContactChange} value={value} name={name} aria-label="Contact Picker" >
        <option value={""} key={-1}>
          No Contact Selected
        </option>
        {contacts.map(contact => {
          return (
            <option value={contact} key={contact}>
              {contact}
            </option>
          );
        })}
      </select>
    </>
  );
};
