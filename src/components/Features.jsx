import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaShare, FaCalendar, FaUsers, FaGraduationCap, FaBookOpen } from 'react-icons/fa';

const features = [
  {
    icon: <FaComments className="text-4xl text-textColor" />,
    title: 'Discussion Forums',
    description: 'Engage in meaningful discussions with peers and faculty members.',
  },
  {
    icon: <FaShare className="text-4xl text-textColor" />,
    title: 'Resource Sharing',
    description: 'Share and access study materials, research papers, and educational resources.',
  },
  {
    icon: <FaCalendar className="text-4xl text-textColor" />,
    title: 'Event Calendar',
    description: 'Stay updated with campus events, deadlines, and academic activities.',
  },
  {
    icon: <FaUsers className="text-4xl text-textColor" />,
    title: 'Collaboration Tools',
    description: 'Work together on projects and assignments with integrated collaboration features.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-textColor" />,
    title: 'Academic Support',
    description: 'Access tutoring services, study groups, and academic resources.',
  },
  {
    icon: <FaBookOpen className="text-4xl text-textColor" />,
    title: 'Centralized Study Resources',
    description: 'Explore and access study materials designed specifically for VIT Bhopal’s curriculum, all in one place.',
  }
  
];

const Features = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-textColor mb-6">Community Features</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our platform offers a comprehensive set of features designed to enhance
            your academic journey and foster community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-textColor mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;