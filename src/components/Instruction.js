
// import React from "react";

// const Instruction = () => {
//   return (
//     <div>
//       <h2>Instructions</h2>
//       <p>This is the instruction page. Add your instructions here.</p>
//     </div>
//   );
// };



import React from 'react';
import image1 from './image1.jpeg';

const doctors = [
  {
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',

    description: 'Experienced cardiologist with a passion for heart health.',
  },
  {
    name: 'Dr. Jane Smith',
    specialty: 'Pediatrician',

    description: 'Caring pediatrician dedicated to the well-being of children.',
  },
  {
    name: 'Dr. Allen Watson',
    specialty: 'Surgon',
    // image: 'doctor2.jpg', 
    description: 'Experienced cardiologist with a passion for health of patients .',
  },
  {
    name: 'Dr. Emily Ryan',
    specialty: 'Pediatrician',
    // image: 'doctor2.jpg', 
    description: 'Specializing in skin health and committed to providing personalized care.',
  },
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Dermatologist',
    // image: 'doctor2.jpg', 
    description: 'Specializing in skin health and committed to providing personalized care.',
  },
  {
    name: 'Dr. Michael Carter',
    specialty: 'Orthopedic Surgeon',
    // image: 'doctor2.jpg', 
    description: 'Dedicated to improving musculoskeletal health and providing expert orthopedic care.',
  },

];

const hospitalInfo = {
  name: 'e-Care Hospital',
  address: 'Health Street, Ottawa',
  phone: '123-456-7890',
  email: 'info@ecarehospital.com',
  operatingHours: 'Monday - Friday: 8 AM - 10 PM',
};

const Instruction = () => {
  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-3xl font-bold mb-4">Information about Professional Doctors</h2>
      <div className="grid grid-cols-2 gap-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md">
            {/* <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-40 object-cover mb-2 rounded-md"
            /> */}
            <h3 className="text-lg font-bold">{doctor.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
            <p className="text-sm">{doctor.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Hospital Information</h2>
        <p>
          <span className="font-bold">Our Hospital:</span> {hospitalInfo.name}
        </p>
        <p>
          <span className="font-bold">Address:</span> {hospitalInfo.address}
        </p>
        <p>
          <span className="font-bold">Phone:</span> {hospitalInfo.phone}
        </p>
        <p>
          <span className="font-bold">Email:</span> {hospitalInfo.email}
        </p>
        <p>
          <span className="font-bold">Operating Hours:</span> {hospitalInfo.operatingHours}
        </p>
      </div>
    </div>
  );
};

export default Instruction;
