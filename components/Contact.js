import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/ContactForm.module.css';

function ContactForm({ consultation }) {
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    email: '',
    message: '',
    selectedOption: '', // For radio button selection
    selectedDate: [], // For date selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      selectedDate: [date],
    });
  };

  const handleOptionChange = (e) => {
    setFormData({
      ...formData,
      selectedOption: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className={`${styles.container} ${consultation ? 'containerCenter' : 'containerEnd'}`}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <div className={styles.formSubgroup}>
            <label className={styles.shortLabel} htmlFor="firstname">
              First Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formSubgroup}>
            <label className={styles.shortLabel} htmlFor="surname">
              Last Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formSubgroup}>
          <label className={styles.longLabel} htmlFor="email">
            Email
          </label>
          <input
            className={styles.longInput}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formSubgroup}>
          <label className={styles.longLabel} htmlFor="message">
           {consultation?"Extra Details":"Message:"}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.message}
          />
        </div>

        {consultation && (
          <div className={styles.newFormGroup}>
            <label className={styles.checkboxLabel}>Select an option:</label>
            <div className='break'></div>
            <div>
              <input
                type="radio"
                id="data-entry"
                name="selectedOption"
                value="Data Entry"
                onChange={handleOptionChange}
                checked={formData.selectedOption === 'Data Entry'}
              />
              <label htmlFor="data-entry">Data Entry</label>
            </div>
            <div className='break'></div>
            <div>
              <input
                type="radio"
                id="create-invoices"
                name="selectedOption"
                value="Creating Invoices"
                onChange={handleOptionChange}
                checked={formData.selectedOption === 'Creating Invoices'}
              />
              <label htmlFor="create-invoices">Creating Invoices</label>
            </div>
            <div className='break'></div>
            <div>
              <input
                type="radio"
                id="budget-setting"
                name="selectedOption"
                value="Budget Setting and Monitoring"
                onChange={handleOptionChange}
                checked={formData.selectedOption === 'Budget Setting and Monitoring'}
              />
              <label htmlFor="budget-setting">Budget Setting and Monitoring</label>
            </div>
          </div>
        )}

        {consultation && (
          <div className={styles.formSubgroup}>
            <label className={styles.checkboxLabel}>Available Date:</label>
            <div>
              <DatePicker
                selected={formData.selectedDate[0]}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                isClearable
              />
            </div>
          </div>
        )}

        <button type="submit" className={styles.button}>
          {consultation?"Book Consultation":"Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
