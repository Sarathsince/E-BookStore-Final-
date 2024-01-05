import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    rollNumber: '',
    name: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    gender: '',
    hobbies: [],
    country: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    setIsSubmitted(true);
  };

  return (
    <div  style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',  
    }}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} style={{
          maxWidth: '200px',
          width: '100%',
          padding: '100px',
          borderRadius: '15px',
          background: 'white',
        }}>
          <label>
            Roll Number:
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              required
            />
          </label>
          <div/>

          <br />

          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <div/>

          <br />

          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </label>
          <div/>

          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label><div/>

          <br />

          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label><div/>

          <br />

          <label>
            Gender:<div/>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label><div/>

          <br />

          <label>
            Hobbies:
            <div>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="reading"
                  checked={formData.hobbies.includes('reading')}
                  onChange={handleChange}
                /> Reading
              </label><div/>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="sports"
                  checked={formData.hobbies.includes('sports')}
                  onChange={handleChange}
                /> Sports
              </label><div/>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Movies"
                  checked={formData.hobbies.includes('sports')}
                  onChange={handleChange}
                /> Movies
              </label>
            </div>
          </label>

          <br />

          <label>
            Select your country:
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="India">IND</option>
              <option value="China">Chi</option>
            </select>
          </label><div/>

          <br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h2>Form Submitted Successfully!</h2>
        </div>
      )}
    </div>
  );
}

export default MyForm;