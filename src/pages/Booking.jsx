// import React, {useState} from "react";
// function Booking() {
//     const [schedule, setSchedule] = useState([
//         { day: 'Monday', slots: ['8:00', '9:00', '10:00', '16:00', '17:00', '18:00', '19:00', '20:00'], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
//         { day: 'Tuesday', slots: ['', '', '', '16:00', '17:00', '18:00', '19:00', ''], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
//         { day: 'Wednesday', slots: ['8:00', '9:00', '10:00', '16:00', '17:00', '18:00', '19:00', '20:00'], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
//         { day: 'Thursday', slots: ['', '', '', '16:00', '17:00', '18:00', '19:00', ''], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
//         { day: 'Friday', slots: ['8:00', '9:00', '10:00', '16:00', '17:00', '18:00', '19:00', '20:00'], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
//     ]);

//     const handleBookSlot = (day, time) => {
//         const updatedSchedule = [...schedule];
//         const dayIndex = updatedSchedule.findIndex((d) => d.day === day);
//         const slotIndex = updatedSchedule[dayIndex].slots.findIndex((s) => s === time);
//         const bookings = updatedSchedule[dayIndex].bookings;
//         if (bookings[slotIndex] < 8) {
//             bookings[slotIndex] += 1;
//             updatedSchedule[dayIndex].slots[slotIndex] = "booked";
//             updatedSchedule[dayIndex].bookings = bookings;
//             setSchedule(updatedSchedule);
//         }
//     };

//     return (
//         <div className="bg-gray-200 p-4">
//             <h1 className="text-3xl font-bold mb-4">Entrenamiento 360 Schedule</h1>
//             <div className="overflow-x-auto">
//                 <table className="table-auto border-collapse border border-gray-400">
//                     <thead>
//                         <tr className="border-2 border-black">
//                             <th className="border-2 border-black text-left px-4 py-2"></th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">8:00</th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">9:00</th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">10:00</th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">16:00</th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">17:00</th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">18:00</th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">19:00</th>
//                             <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">20:00</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {schedule.map((day) => (
//                             <tr key={day.day} className="border-2 border-black">
//                                 <td className="border-2 border-black text-left px-4 py-2">{day.day}</td>
//                                 {day.slots.map((time, index) => {
//                                     if (time === '') {
//                                         return <td key={index} className="border-2 border-black px-4 py-2"></td>;
//                                     } else if (time === 'booked') {
//                                         return <td key={index} className="bg-red-500 border-2 border-black px-4 py-2">Booked</td>;
//                                     } else {
//                                         let isDisabled = false;
//                                         if ((day.day === 'Tuesday' || day.day === 'Thursday') && (time === '8:00' || time === '9:00' || time === '11:00' || time === '20:00')) {
//                                             isDisabled = true;
//                                         }
//                                         return (
//                                             <td
//                                                 key={index}
//                                                 className={`border-2 border-black px-4 py-2 text-center cursor-pointer ${isDisabled ? 'bg-gray-400' : 'bg-white hover:bg-gray-200'}`}
//                                                 onClick = {() => {if (!isDisabled) {handleBookSlot(day.day, time);}}}>{time}
//                                             </td>);}})}
//                                 </tr>))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>   
// );
// }

// export default Booking;

import React, { useState } from "react";

function Booking() {
    const [schedule, setSchedule] = useState([
        { day: 'Monday', slots: ['8:00', '9:00', '10:00', '16:00', '17:00', '18:00', '19:00', '20:00'], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
        { day: 'Tuesday', slots: ['', '', '', '16:00', '17:00', '18:00', '19:00', ''], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
        { day: 'Wednesday', slots: ['8:00', '9:00', '10:00', '16:00', '17:00', '18:00', '19:00', '20:00'], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
        { day: 'Thursday', slots: ['', '', '', '16:00', '17:00', '18:00', '19:00', ''], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
        { day: 'Friday', slots: ['8:00', '9:00', '10:00', '16:00', '17:00', '18:00', '19:00', '20:00'], bookings: [0, 0, 0, 0, 0, 0, 0, 0] },
    ]);

    const handleBookSlot = (day, time) => {
        const updatedSchedule = [...schedule];
        const dayIndex = updatedSchedule.findIndex((d) => d.day === day);
        const slotIndex = updatedSchedule[dayIndex].slots.findIndex((s) => s === time);
        const bookings = updatedSchedule[dayIndex].bookings;
        if (bookings[slotIndex] < 8) {
            bookings[slotIndex] += 1;
            updatedSchedule[dayIndex].slots[slotIndex] = "booked";
            updatedSchedule[dayIndex].bookings = bookings;
            setSchedule(updatedSchedule);
        }
    };

    return (
        <div className="bg-gray-200 p-4">
            <h1 className="text-3xl font-bold mb-4">Agenda</h1>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-400">
                    <thead>
                        <tr className="border-2 border-black">
                            <th className="border-2 border-black text-left px-4 py-2"></th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">8:00</th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">9:00</th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">10:00</th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">16:00</th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">17:00</th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">18:00</th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">19:00</th>
                            <th className="bg-[#009e3a] text-white border-2 border-black text-center px-4 py-2">20:00</th>
                         </tr>
                    </thead>

                    <tbody>
            {schedule.map((day, index) => (
              <tr key={index} className="border-2 border-black">
                <td className="border-2 border-black text-left px-4 py-2">{day.day}</td>
                {day.slots.map((slot, index) => (
                  <td
                    key={index}
                    className={`border-2 border-black text-center px-4 py-2 ${
                      slot === "" ? "bg-gray-400" : "bg-white"
                    } ${slot === "booked" ? "bg-red-500" : ""}`}
                    onClick={() => {
                      if (slot !== "" && slot !== "booked") {
                        handleBookSlot(day.day, slot);
                      }
                    }}
                  >
                    {slot === "booked" ? "Booked" : slot}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Booking;