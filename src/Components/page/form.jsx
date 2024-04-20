import React, { useState } from 'react';
import '../../Styles/form.css';
//import axios from 'axios';

const Form = () => {
  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler untuk mengubah nilai input saat pengguna mengetik
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handler untuk mengirim data saat form disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.post('');
    // Lakukan sesuatu dengan data yang dikirim, misalnya kirim ke backend
    console.log(formData);
    // Setel kembali form menjadi kosong setelah submit
    // setFormData({
    //   name: '',
    //   email: '',
    //   message: ''
    // });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
