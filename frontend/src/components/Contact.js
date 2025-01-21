import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  // Validate environment variables on component mount
  useEffect(() => {
    const requiredEnvVars = [
      'REACT_APP_EMAILJS_SERVICE_ID',
      'REACT_APP_EMAILJS_TEMPLATE_ID',
      'REACT_APP_EMAILJS_PUBLIC_KEY'
    ];

    const missingEnvVars = requiredEnvVars.filter(
      (envVar) => !process.env[envVar]
    );

    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars);
      setStatus({
        type: 'error',
        message: 'Contact form is not properly configured. Please try again later.'
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if environment variables are available
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || 
        !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 
        !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: 'error',
        message: 'Contact form is not properly configured. Please try again later.'
        
      });
      console.log('Service ID:', process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log('Template ID:', process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const templateParams = {
        from_name: formData.name,
        message: formData.message,
        to_name: 'Arjun',
        reply_to: formData.email,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div layout className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-6 h-6" />}
                  title="Email"
                  content="arjunshukla6558@gmail.com"
                  link="mailto:arjunshukla6558@gmail.com"
                />
                <ContactInfo
                  icon={<MapPin className="w-6 h-6" />}
                  title="Location"
                  content="Pune, India"
                />
                <ContactInfo
                  icon={<Phone className="w-6 h-6" />}
                  title="Phone"
                  content="+91 88304 45632"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-6 rounded-xl shadow-lg"
          >
            <InputField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <div className="relative group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300 text-white resize-none group-hover:bg-white/10"
                required
              />
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg ${
                  status.type === 'success' ? 'bg-green-500/20 text-green-400' :
                  status.type === 'error' ? 'bg-red-500/20 text-red-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status.type === 'loading'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

const InputField = ({ type, name, value, onChange, placeholder }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 transition-all duration-300 text-white group-hover:bg-white/10"
      required
    />
  </div>
);

const ContactInfo = ({ icon, title, content, link }) => (
  <motion.div
    className="flex items-start gap-4 group"
    whileHover={{ x: 5 }}
  >
    <div className="p-3 bg-white/5 rounded-lg text-purple-400">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium">{title}</h4>
      {link ? (
        <a
          href={link}
          className="text-gray-400 hover:text-purple-400 transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-400">{content}</p>
      )}
    </div>
  </motion.div>
);

export default Contact;