"use client";

import { useState } from "react";

const offices = ["8CS London", "Edinburgh", "Swansea"];
const times = Array.from({ length: 49 }, (_, i) => {
  const hours = Math.floor(i / 4) + 6;
  const minutes = (i % 4) * 15;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
});

const generateRandomDesks = () => {
  const deskCount = Math.floor(Math.random() * 15) + 1; // Show 1 to 6 desks
  return Array.from({ length: deskCount }, (_, i) => `Desk ${i + 1}`);
};

export default function BookingForm() {
  const [office, setOffice] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [availableDesks, setAvailableDesks] = useState<string[]>([]);
  const [bookings, setBookings] = useState<{ office: string; date: string; startTime: string; endTime: string; desk: string }[]>([]);

  const handleApplyFilter = () => {
    if (!office || !date || !startTime || !endTime) {
      alert("Please select all fields before applying the filter!");
      return;
    }
    setAvailableDesks(generateRandomDesks());
  };

  const handleBookDesk = (desk: string) => {
    const newBooking = { office, date, startTime, endTime, desk };
    setBookings((prev) => [...prev, newBooking]);
    alert(`You have booked ${desk} at ${office} on ${date} from ${startTime} to ${endTime}`);
  };

  return (
    <section className="bg-white min-h-screen flex">
      {/* Booking Form (Left Side) */}
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold text-gray-900">Book a Desk 🏢</h1>
        <p className="mt-2 text-gray-500">Select an office, date, and time slot to find available desks.</p>

        <form className="mt-6 space-y-6">
          {/* Office Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Office Location</label>
            <select
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-2 text-lg shadow-sm focus:ring-blue-300 focus:border-blue-300"
              value={office}
              onChange={(e) => setOffice(e.target.value)}
            >
              <option value="">Select an Office</option>
              {offices.map((office) => (
                <option key={office} value={office}>
                  {office}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <div id="date-range-picker" className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  📅
                </div>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 bg-white p-2 pl-10 text-lg shadow-sm focus:ring-blue-300 focus:border-blue-300"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Start & End Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Time</label>
              <select
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-2 text-lg shadow-sm focus:ring-blue-300 focus:border-blue-300"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              >
                <option value="">Select Start Time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Time</label>
              <select
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white p-2 text-lg shadow-sm focus:ring-blue-300 focus:border-blue-300"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              >
                <option value="">Select End Time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Apply Filter Button */}
          <button
            type="button"
            className="w-full rounded-md border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3"
            onClick={handleApplyFilter}
          >
            Apply Filter
          </button>
        </form>

        {/* Available Desks Section */}
        {availableDesks.length > 0 && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Available Desks:</h2>
            <ul className="mt-2 space-y-2">
              {availableDesks.map((desk, index) => (
                <li
                  key={index}
                  className="cursor-pointer rounded-md bg-white p-3 shadow-sm hover:bg-blue-100"
                  onClick={() => handleBookDesk(desk)}
                >
                  {desk}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bookings Section (Right Side) */}
      <div className="w-1/2 p-8 border-l">
        <h2 className="text-3xl font-bold text-gray-900">Your Bookings 📅</h2>

        {bookings.length === 0 ? (
          <p className="mt-2 text-gray-500">Looks like your schedule is open! Book a desk to get started.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {bookings.map((booking, index) => (
              <li key={index} className="p-4 border rounded-lg bg-gray-50">
                <p className="text-lg font-medium text-gray-800">{booking.office}</p>
                <p className="text-gray-600">{booking.date}</p>
                <p className="text-gray-600">
                  {booking.startTime} - {booking.endTime}
                </p>
                <p className="text-blue-600 font-semibold">Desk: {booking.desk}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
