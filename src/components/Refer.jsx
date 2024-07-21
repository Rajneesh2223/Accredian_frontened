import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import friend from '../assets/friend.png';
import friend1 from '../assets/friend1.png';
import friend3 from '../assets/friend3.png';

const Refer = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleButtonClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit-referral', formData);
      setSubmissionStatus('Referral submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmissionStatus('Error submitting referral');
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <div className='bg-blue-50'>
      <div className='text-center'>
        <h1 className='font-bold text-3xl pt-4'>
          How do I <span className='text-blue-500'>Refer?</span>
        </h1>
      </div>

      <div className='bg-blue-50 flex items-center justify-center sm:h-[500px]'>
        <div className='sm:bg-white py-10 text-black sm:flex sm:py-20 sm:w-[900px] sm:justify-center sm:rounded-xl'>
          <div className='border my-4 border-black rounded-full h-48 w-48 bg-white flex items-center justify-center flex-col shadow-2xl mx-4'>
            <img className='w-20 mb-4' src={friend} alt='first' />
            <h1 className='font-semibold text-center px-2'>
              Submit referrals easily via our website’s referral section.
            </h1>
          </div>
          <div className='rounded-full my-4 h-48 w-48 bg-white flex items-center justify-center flex-col shadow-2xl mx-4'>
            <img className='w-20 h-[67px] mb-4' src={friend1} alt='second' />
            <h1 className='font-semibold text-center px-2'>
              Submit referrals easily via our website’s referral section.
            </h1>
          </div>
          <div className='rounded-full my-4 h-48 w-48 bg-white flex items-center justify-center flex-col shadow-2xl mx-4'>
            <img className='w-20 mb-4' src={friend3} alt='third' />
            <h1 className='font-semibold text-center px-2'>
              Submit referrals easily via our website’s referral section.
            </h1>
          </div>
        </div>
      </div>

      <div className='text-center sm:my-0 bg-blue-50 pb-10'>
        <button
          className='bg-blue-500 text-xl py-2 px-4 rounded-lg'
          onClick={handleButtonClick}
        >
          Refer Now
        </button>
      </div>

      {isPopupOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
            <h2 className='text-xl font-semibold mb-4'>Referral Form</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-gray-700'>Name:</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='border w-full p-2 rounded'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Email:</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='border w-full p-2 rounded'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Message:</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  className='border w-full p-2 rounded'
                  rows='4'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded'
              >
                Submit
              </button>
              <button
                type='button'
                className='bg-red-500 text-white py-2 px-4 rounded ml-2'
                onClick={() => setPopupOpen(false)}
              >
                Close
              </button>
            </form>
            {submissionStatus && (
              <div className='mt-4 text-center'>
                <p className={submissionStatus.includes('Error') ? 'text-red-500' : 'text-green-500'}>
                  {submissionStatus}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Refer;
