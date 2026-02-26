import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formsubmit.co/ajax/sanchitsatpaise4771@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _captcha: 'false',
        }),
      });

      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const socials = [
    {
      icon: <MdEmail />,
      label: 'Email',
      value: 'sanchitsatpaise4771@gmail.com',
      href: 'mailto:sanchitsatpaise4771@gmail.com',
      color: '#EA4335',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/sanchitsatpaise',
      href: 'https://github.com/sanchitsatpaise',
      color: '#E7E7E7',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanchitsatpaise',
      href: 'https://www.linkedin.com/in/sanchit-satpaise-68b696259/',
      color: '#0A66C2',
    },
  ];

  return (
    <section className='ContactPage'>
      <div className='contactHeader'>
        <h1>Get In <b>Touch</b></h1>
        <p>Let's connect and discuss opportunities or collaborate on exciting projects</p>
      </div>

      <div className='contactBody'>

        {/* ── Left: Connect With Me ── */}
        <div className='contactCard'>
          <h2 className='contactCardTitle'>Connect With Me</h2>

          <div className='socialLinks'>
            {socials.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noreferrer'
                className='socialRow'
              >
                <span className='socialIcon' style={{ color }}>{icon}</span>
                <div className='socialText'>
                  <span className='socialLabel'>{label}</span>
                  <span className='socialValue'>{value}</span>
                </div>
              </a>
            ))}
          </div>

          <p className='contactNote'>
            Feel free to reach out via email or connect on social platforms.
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* ── Right: Send a Message ── */}
        <div className='contactCard'>
          <h2 className='contactCardTitle'>Send a Message</h2>

          <form className='contactForm' onSubmit={handleSubmit}>
            <div className='formGroup'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Your name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='your.email@example.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='formGroup'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Your message...'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type='submit'
              className='sendBtn'
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : '✉ Send Message'}
            </button>

            {status === 'success' && (
              <p className='formSuccess'>Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className='formError'> Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;