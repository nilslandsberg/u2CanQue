"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='eventDate'
          className='mb-3 block text-base font-medium text-black'
        >
          Event Date
        </label>
        <input
          type='date'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('eventDate', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='attendees'
          className='mb-3 block text-base font-medium text-black'
        >
          Number of Attendees
        </label>
        <input
          type='number'
          placeholder='Number of Attendees'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('attendees', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className="flex">
        <button className='py-2 px-3 hover:shadow-form bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
