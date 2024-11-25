import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const contactNames = useMemo(() => {
    return contacts.map(contact => contact.name);
  }, [contacts]);

  function handleTitleChange({target}) {
    setTitle(target.value);
  }

  function handleDateChange({target}) {
    setDate(target.value);
  }

  function handleTimeChange({target}) {
    setTime(target.value);
  }

  function handleContactChange({target}) {
    setContact(target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleTitleChange}
            placeholder="Appointment Name"
            aria-label="Appointment Name"
          />
        </label>
        <label>
          <input
            type="date"
            name="date"
            value={date}
            min={getTodayString()}
            onChange={handleDateChange}
            aria-label="Date Picker"
          />
        </label>
        <label>
          <input
            type="time"
            name="time"
            value={time}
            onChange={handleTimeChange}
            aria-label="Time Picker"
          />
        </label>
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          onChange={handleContactChange}
        />
        <label>
          <input type="submit" value="Add Appointment" aria-label="Add Appointment" />
        </label>
      </form>
    </>
  );
};
