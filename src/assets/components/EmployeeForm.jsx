import React, { useState } from 'react';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    image: null,
    position: '',
  });

  const [employees, setEmployees] = useState([]); // To store the list of employees

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    // For image file
    if (name === 'image') {
      setEmployee({ ...employee, [name]: files[0] });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new employee to the list
    setEmployees([...employees, employee]);

    // Reset form
    setEmployee({
      name: '',
      email: '',
      phone: '',
      image: null,
      position: '',
    });
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>Employment Form</h2>

        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={employee.name}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          name='email'
          value={employee.email}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='phone'>Phone Number</label>
        <input
          type='number'
          id='phone'
          name='phone'
          value={employee.phone}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='image'>Image</label>
        <input
          type='file'
          id='image'
          name='image'
          onChange={handleInputChange}
        />
        <br />

        <div>
          <label htmlFor='position'>Select Position</label>
          <div className='pos'>
            <select
              name='position'
              id='position'
              value={employee.position}
              onChange={handleInputChange}
            >
              <option value=''>select position</option>
              <option value='volvo'>Manager</option>
              <option value='saab'>Personal Assistant</option>
              <option value='mercedes'>Administrator</option>
              <option value='audi'>Receptionist</option>
            </select>
          </div>
        </div>
        <div className='button'>
          <button type='submit'>Submit</button>
        </div>
      </form>

      <hr />

      {/* Display submitted employee details */}
      <div>
        <h3>Submitted Employees</h3>
        {employees.length > 0 ? (
          employees.map((emp, index) => (
            <div key={index} className='employee-details'>
              <p><strong>Name:</strong> {emp.name}</p>
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Phone:</strong> {emp.phone}</p>
              <p><strong>Position:</strong> {emp.position}</p>
              {emp.image && (
                <p><strong>Image:</strong> {emp.image.name}</p> // Displays image file name
              )}
              <hr />
            </div>
          ))
        ) : (
          <p>No employees submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
