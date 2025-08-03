import React from 'react'
import Navbar from '../components_lite/Navbar'
import avatar from './avatar.svg';
// import naval from './naval.png';

const Creator = () => {
  return (
   <div>
  <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
    <div className="max-w-4xl text-center">
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        Job Portal is a global job matching and hiring platform. People get hired on this site because we put job seekers first, giving them access to search for jobs, post resumes, research companies and more. With AI-powered technology, Job Portal is transforming job matching and hiring. Every day, we connect thousands of people to new opportunities.
      </p>
    </div>

    <div className="text-center mt-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Developers and Designers</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        
        {/* Nitesh Sharma */}
        <a
          href="https://ankitpathak.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <img src={avatar} alt="Nitesh Sharma" className="w-32 h-32 mx-auto rounded-full object-cover" />
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Nitesh Sharma</h3>
          {/* <p className="text-gray-600 text-sm">Registration No: 21110125035</p> */}
          <p className="text-gray-600 text-sm">Full Stack Developer</p>
        </a>

        {/* Naval Khurana */}
        <a
          href="#"
          className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <img src={avatar} alt="Nitin" className="w-32 h-32 mx-auto rounded-full object-cover" />
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Nitin</h3>
          {/* <p className="text-gray-600 text-sm">Registration No: 21110125043</p> */}
          <p className="text-gray-600 text-sm">Full Stack Developer</p>
        </a>

      </div>
    </div>
  </div>
</div>

  )
}

export default Creator
