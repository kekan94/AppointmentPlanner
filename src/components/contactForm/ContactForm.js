import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  function handleNameChange({target}) {
    setName(target.value);
  }

  function handlePhoneChange({target}) {
    setPhone(target.value);
  }

  function handleEmailChange({target}) {
    setEmail(target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Contact Name"
            aria-label="Contact Name"
          />
        </label>
        <br />
        <label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            placeholder="Contact Phone (###-###-####)"
            aria-label="Contact Phone"
          />
        </label>
        <br />        
        <label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Contact Email"
            aria-label="Contact Email" 
          />
        </label>
        <br />
        <input type="submit" value="Add Contact" aria-label="Add Contact"/>
      </form>
    </>
  );
};

