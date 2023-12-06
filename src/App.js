import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';
import AppointmentInfo from './components/AppointmentInfo';
import AddCreditCard from './components/AddCreditCard';
import Instruction from './components/Instruction'; 
import Help from './components/Help'; 
import './components/All.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('petName');
  const [orderBy, setOrderBy] = useState('asc');

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();
      setAppointmentList(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddAppointment = (appointment) => {
    setAppointmentList((prevAppointments) => [...prevAppointments, appointment]);
    setCurrentPage('home'); // After adding an appointment, go back to the home page
  };

  const handleDeleteAppointment = (appointmentId) => {
    setAppointmentList((prevAppointments) =>
      prevAppointments.filter((appointment) => appointmentId !== appointment.id)
    );
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      return (
           <div className="App container mx-auto mt-0 font-thin"> 
    
           <h1 className="text-5xl mb-4">
          {/* <Header onNavigate={navigateTo} /> */}
           </h1>
           <div className="flex-1">
          <AddAppointment
            onSendAppointment={handleAddAppointment}
            lastId={Math.max(...appointmentList.map((appointment) => Number(appointment.id)), 0)}
          />
          <div className="mb-4" />
          <AddCreditCard
            onAddCreditCard={(creditCard) => {
              // Update this function as needed
              // setAppointmentList([...appointmentList, appointment]);
            }}
            lastCardId={Math.max(...appointmentList.map((appointment) => Number(appointment.id)), 0)}
          />
         
          {/* <ul className="divide-y divide-gray-200"> */}
          {/* <li> */}
    {/* Replace 'your-image.jpg' with the actual name of your image file */}
    
  {/* </li> */}
          {/* </ul> */}
        </div>
        
        </div>
        
      )
      case 'otherPage':
        return(
        <div >
          {/* Content for the 'otherPage' */}
   
          <Search
            query={query}
            onQueryChange={(event) => setQuery(event.target.value)}
            orderBy={orderBy}
            onOrderByChange={(val) => setOrderBy(val)}
            sortBy={sortBy}
            onSortBYChange={(val) => setSortBy(val)}
          />
          {appointmentList
              .filter((item) =>
                ['petName', 'ownerName', 'aptNotes'].some((prop) =>
                  item[prop].toLowerCase().includes(query.toLowerCase())
                )
              )
              .sort((a, b) => {
                const order = orderBy === 'asc' ? 1 : -1;
                return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order;
              })
              .map((appointment) => (
                <AppointmentInfo
                  onDeleteAppointment={() => handleDeleteAppointment(appointment.id)}
                  appointment={appointment}
                  key={appointment.id}
                />
              ))}
              </div>
        );
        case 'instruction':
        return <Instruction />;
        case 'Help':
        return <Help />;
      default:
        return null;
    }
  };

  return (
    // <div className="App container mx-auto mt-3 font-thin">
    <div className="app-container flex flex-col min-h-screen">
      <Header onNavigate={navigateTo} />
      <div className="content flex-1">{renderPage()}</div>
      <Footer />
    </div>
  //   <div className="flex flex-col min-h-screen">
  //   {renderPage()}
  //   <Footer />
  // </div>
  );
}
export default App;
