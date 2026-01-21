'use client';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Thanks! We’ll be in touch.');
    } else {
      alert('Something went wrong.');
    }

    // Handle form submission
    alert(
      "Thank you for your quote request! We'll get back to you within 24 hours.",
    );

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Quote Form & Info */}
      <div className='grid lg:grid-cols-2 gap-12'>
        <div>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block mb-2 text-gray-700'>
                  Full Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700'
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-gray-700'>
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700'
                />
              </div>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='phone' className='block mb-2 text-gray-700'>
                  Phone Number *
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700'
                />
              </div>
              <div>
                <label htmlFor='address' className='block mb-2 text-gray-700'>
                  Project Address *
                </label>
                <input
                  type='text'
                  id='address'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700'
                />
              </div>
            </div>
            <div>
              <label htmlFor='projectType' className='block mb-2 text-gray-700'>
                Project Type *
              </label>
              <select
                id='projectType'
                name='projectType'
                value={formData.projectType}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700'
              >
                <option value=''>Select a project type</option>
                <option value='residential'>Residential Design</option>
                <option value='commercial'>Commercial Landscaping</option>
                <option value='sustainable'>Sustainable Design</option>
                <option value='hardscape'>Hardscape Design</option>
                <option value='planting'>Planting Design</option>
                <option value='lighting'>Landscape Lighting</option>
                <option value='other'>Other</option>
              </select>
            </div>
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='budget' className='block mb-2 text-gray-700'>
                  Budget Range
                </label>
                <select
                  id='budget'
                  name='budget'
                  value={formData.budget}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700'
                >
                  <option value=''>Select a range</option>
                  <option value='under10k'>Under $10,000</option>
                  <option value='10k-25k'>$10,000 - $25,000</option>
                  <option value='25k-50k'>$25,000 - $50,000</option>
                  <option value='50k-100k'>$50,000 - $100,000</option>
                  <option value='over100k'>Over $100,000</option>
                </select>
              </div>
              <div>
                <label htmlFor='timeline' className='block mb-2 text-gray-700'>
                  Desired Timeline
                </label>
                <select
                  id='timeline'
                  name='timeline'
                  value={formData.timeline}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700'
                >
                  <option value=''>Select a timeline</option>
                  <option value='asap'>As soon as possible</option>
                  <option value='1-3months'>1-3 months</option>
                  <option value='3-6months'>3-6 months</option>
                  <option value='6-12months'>6-12 months</option>
                  <option value='flexible'>Flexible</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor='message' className='block mb-2 text-gray-700'>
                Project Description *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder='Tell us about your vision, specific requirements, and any challenges with your property...'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 resize-none'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg transition-colors'
            >
              Request Quote
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className='mb-6'>Contact Information</h2>
          <div className='space-y-6 mb-8'>
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                <MapPin className='text-green-700' size={24} />
              </div>
              <div>
                <h3 className='mb-1'>Office Location</h3>
                <p className='text-gray-600'>
                  7212 Bradburn Blvd.
                  <br />
                  Westminster, CO 80030
                </p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Phone className='text-green-700' size={24} />
              </div>
              <div>
                <h3 className='mb-1'>Phone</h3>
                <p className='text-gray-600'>(303) 906-7656</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Mail className='text-green-700' size={24} />
              </div>
              <div>
                <h3 className='mb-1'>Email</h3>
                <p className='text-gray-600'>stixandstonz.office@gmail.com</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                <Clock className='text-green-700' size={24} />
              </div>
              <div>
                <h3 className='mb-1'>Business Hours</h3>
                <p className='text-gray-600'>
                  Monday - Saturday: 8:00 AM - 5:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className='bg-green-50 rounded-lg p-6'>
            <h3 className='mb-4'>What Happens Next?</h3>
            <ol className='space-y-3'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm'>
                  1
                </span>
                <p className='text-gray-700'>
                  We'll review your project details and contact you within 24
                  hours
                </p>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm'>
                  2
                </span>
                <p className='text-gray-700'>
                  Schedule an on-site consultation to assess your property
                </p>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm'>
                  3
                </span>
                <p className='text-gray-700'>
                  Receive a detailed quote and preliminary design concepts
                </p>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-sm'>
                  4
                </span>
                <p className='text-gray-700'>
                  Begin transforming your outdoor space!
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
