import React, { useState } from 'react';

const MedicalHelpPage = () => {
  // 初始医生数据
  const initialDoctors = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      serviceType: 'Consultation',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Pediatrician',
      serviceType: 'Checkup',
    },
    {
        id: 3,
        name: 'Dr. Maria Garcia',
        specialty: 'phthalmologist',
        serviceType: 'Checkup',
      },
      {
        id: 4,
        name: 'Dr. Richard Clark',
        specialty: 'sychiatrist',
        serviceType: 'Consultation',
      },
      {
        id: 5,
        name: 'Dr. Mark Anderson',
        specialty: 'Dermatologist',
        serviceType: 'Surgery',
      },
    // 添加医生信息...
  ];

  // 使用React Hook来管理医生数据
  const [doctors, setDoctors] = useState(initialDoctors);

  // 处理选择栏变化事件
  const handleAvailabilityChange = (doctorId, newAvailability) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor.id === doctorId ? { ...doctor, availability: newAvailability } : doctor
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Check the service from Doctors</h1>

      {/* 表格 */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>serviceType</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>
                {/* 选择栏 */}
                <select
                  value={doctor.availability}
                  onChange={(e) => handleAvailabilityChange(doctor.id, e.target.value)}
                >
                  <option value="Consultation">Consultation</option>
                  <option value="Checkup">Checkup</option>
                  <option value="Surgery">Surgery</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalHelpPage;
