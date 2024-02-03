"use client";

import React from 'react';

const CustomerInformation = ({ customerInformation, setCustomerInformation }) => {
  // Function to handle input changes and update the customerInformation state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInformation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate phone number format
  const validatePhoneNumber = (phone) => {
    // Regular expression for validating phone number format with area code
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div>
      <div className="flex flex-row mb-2">
        <div className='mr-2'>
          <label
            htmlFor='firstName'
            className='mb-1 text-base justify-start flex font-medium text-white'
          >
            First Name
          </label>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
            value={customerInformation.firstName}
            onChange={handleInputChange}
          />
          {customerInformation.firstName.trim() === '' && <p className="text-red-500">first name</p>}
        </div>
        <div>
          <label
            htmlFor='lastName'
            className='mb-1 text-base justify-start flex font-medium text-white'
          >
            Last Name
          </label>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
            value={customerInformation.lastName}
            onChange={handleInputChange}
          />
          {customerInformation.lastName.trim() === '' && <p className="text-red-500">last name</p>}
        </div>
      </div>
      <div className="flex flex-row mb-2">
        <div className='mr-2'>
          <label
            htmlFor='phone'
            className='mb-1 text-base justify-start flex font-medium text-white'
          >
            Phone Number
          </label>
          <input
            type='tel'
            name='phone'
            placeholder='***-***-****'
            className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
            value={customerInformation.phone}
            onChange={handleInputChange}
          />
          {!validatePhoneNumber(customerInformation.phone) && <p className="text-red-500">phone number (###-###-####)</p>}
        </div>
        <div>
          <label
            htmlFor='email'
            className='mb-1 text-base justify-start flex font-medium text-white'
          >
            Email Address
          </label>
          <input
            type='email'
            name='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
            value={customerInformation.email}
            onChange={handleInputChange}
          />
          {!validateEmail(customerInformation.email) && <p className="text-red-500">valid email address</p>}
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
