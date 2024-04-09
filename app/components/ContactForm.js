"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSendingForm, setIsSendingForm] = useState(false);

  const onSubmit = async (data) => {

    try {
      setIsSendingForm(true);
      const successMessage = await sendEmail(data);
      await toast.success(successMessage);
    } catch (error) {
      console.error("Error sending email: ", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 text-base justify-start flex font-medium text-white'
        >
          Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('name', { required: true })}
        />
        {errors.name && <p className="text-red-500">Please enter your full name</p>}
      </div>
      <div className='mb-5'>
        <label
          htmlFor='phone number'
          className='mb-3 text-base justify-start flex font-medium text-white'
        >
          Phone Number
        </label>
        <input
          type='tel'
          placeholder='***-***-****'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('phone', { required: true, minLength: 6, maxLength: 12 })}
        />
        {errors.phone && <p className="text-red-500">Please enter your phone number</p>}
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 text-base justify-start flex font-medium text-white'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('email', { required: true })}
        />
        {errors.email && <p className="text-red-500">Please enter your email address</p>}
      </div>
      <div className='mb-5'>
        <label
          htmlFor='eventDate'
          className='mb-3 text-base justify-start flex font-medium text-white'
        >
          Event Date
        </label>
        <input
          type='date'
          placeholder='Date of Event'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('eventDate', { required: true })}
        />
        {errors.eventDate && <p className="text-red-500">Please enter the date of your event</p>}
      </div>
      <div className='mb-5'>
        <label
          htmlFor='attendees'
          className='mb-3 text-base justify-start flex font-medium text-white'
        >
          Number of Attendees
        </label>
        <input
          type='number'
          placeholder='0'
          className='w-full rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('attendees', { required: true })}
        />
        {errors.attendees && <p className="text-red-500">Please enter the number of attendees for your event</p>}
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 text-base justify-start flex font-medium text-white'
        >
          Event Details/Other Information
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-orange-600 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-slate-600 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
        {errors.message && <p className="text-red-500">Please provide more details about your event</p>}
      </div>
      <div className="flex pb-4">
        <button className='py-2 px-3 hover:shadow-form bg-orange-600 rounded text-gray-900 hover:bg-orange-400 hover:text-white transition duration-300'>
          {isSendingForm ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
