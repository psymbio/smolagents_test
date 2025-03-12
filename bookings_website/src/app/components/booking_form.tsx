"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const offices = ["8CS London", "Edinburgh", "Swansea"];
const times = Array.from({ length: 49 }, (_, i) => {
  const hours = Math.floor(i / 4) + 6;
  const minutes = (i % 4) * 15;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
});

export default function BookingForm() {
  const [office, setOffice] = useState(offices[0]);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState(times[0]);
  const [endTime, setEndTime] = useState(times[1]);
  const [availableDesks, setAvailableDesks] = useState<string[]>([]);
  const [selectedDesk, setSelectedDesk] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (office && date && startTime && endTime) {
      fetchAvailableDesks();
    }
  }, [office, date, startTime, endTime]);

  const fetchAvailableDesks = () => {
    // Simulating desk availability
    const desks = ["Desk A1", "Desk B2", "Desk C3", "Desk D4"];
    setAvailableDesks(desks);
    setSelectedDesk(desks[0]);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Desk ${selectedDesk} booked at ${office} on ${date} from ${startTime} to ${endTime}`);
    router.push(`/confirmation`);
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <main className="flex items-center justify-center px-8 py-12 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Book a Desk</h1>
            <p className="mt-4 text-gray-500">Choose your office, date, and time to book an available desk.</p>

            <form onSubmit={handleBooking} className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">Office Location</label>
                <select
                  value={office}
                  onChange={(e) => setOffice(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-lg"
                >
                  {offices.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 text-lg"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700">Start Time</label>
                <select
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 text-lg"
                >
                  {times.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700">End Time</label>
                <select
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 text-lg"
                >
                  {times.slice(times.indexOf(startTime) + 1).map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">Available Desks</label>
                <select
                  value={selectedDesk}
                  onChange={(e) => setSelectedDesk(e.target.value)}
                  className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 text-lg"
                >
                  {availableDesks.map((desk) => (
                    <option key={desk} value={desk}>{desk}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block w-full sm:w-auto rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition 
                  hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:ring-blue-300 focus:outline-none"
                >
                  Book Desk
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}