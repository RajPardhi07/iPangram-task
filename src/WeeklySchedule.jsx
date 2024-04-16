import React, { useState, useEffect } from 'react';

const WeeklySchedule = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timezone, setTimezone] = useState('UTC-0');
    const [schedule, setSchedule] = useState([]);
    const [check, setCheck] = useState()

    useEffect(() => {
        loadSchedule();
    }, [selectedDate, timezone]);

    const loadSchedule = () => {
        // Logic to load weekly schedule based on selectedDate and timezone
        // For demonstration, let's mock the schedule
        const mockSchedule = [
            { day: 'Monday', time: '08:00 - 23:00', checked: false },
            { day: 'Tuesday', time: '08:00 - 23:00', checked: false },
            { day: 'Wednesday', time: '08:00 - 23:00', checked: false },
            { day: 'Thursday', time: '08:00 - 23:00', checked: false },
            { day: 'Friday', time: '08:00 - 23:00', checked: false }


        ];
        setSchedule(mockSchedule);
    };

    const handlePreviousWeek = () => {
        // Logic to navigate to previous week
        const prevWeek = new Date(selectedDate);
        prevWeek.setDate(selectedDate.getDate() - 7);
        setSelectedDate(prevWeek);
    };

    const handleNextWeek = () => {
        // Logic to navigate to next week
        const nextWeek = new Date(selectedDate);
        nextWeek.setDate(selectedDate.getDate() + 7);
        setSelectedDate(nextWeek);
    };

    const handleTimezoneChange = (e) => {
        setTimezone(e.target.value);
    };

    return (
        <div className="w-full bg-white h-screen mx-auto  shadow-md rounded-md p-4">

            <div className=" w-full bg-slate-200 flex px-3 py-3 rounded-lg justify-between items-center mb-4">
                <div className='flex items-center gap-32'>
                    <button onClick={handlePreviousWeek} className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Previous</button>

                    <div className="flex items-center ">
                        <label htmlFor="date" className="mr-2">Date:</label>
                        <input type="date" id="date" value={selectedDate.toISOString().split('T')[0]} className="border rounded-md px-2 py-1" />
                    </div>
                </div>



                <button onClick={handleNextWeek} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Next</button>
            </div>
            <div className=" py-2 border-[1px] border-gray-400 rounded-lg px-3 items-center mb-4">
                <label htmlFor="timezone" className="mr-2 w-full">Timezone:</label>
                <select id="timezone" value={timezone} onChange={handleTimezoneChange} className="border rounded-md px-2 py-1">
                    <option value="UTC-0">UTC-0</option>
                    <option value="UTC+3">UTC+3</option>
                </select>
            </div>
            <div className="space-y-2">
                {schedule.map((item, index) => (
                    <div key={index} className="flex  gap-8  items-center">
                        <span className="mr-2">{item.day}</span>

                        <div className='flex items-center gap-1'>

                            <input type="checkbox" onChange={(e) => setCheck(e.target.value) } checked={item.checked} className="" />
                            <span>{item.time}AM</span>
                        </div>

                       

                        <div className='flex items-center gap-1'>

                            <input type="checkbox" checked={item.checked} className="" />
                            <span>{item.time}AM</span>
                        </div>

                        <div className='flex items-center gap-1'>

                            <input type="checkbox" checked={item.checked} className="" />
                            <span>{item.time}AM</span>
                        </div>

                        <div className='flex items-center gap-1'>

                            <input type="checkbox" checked={item.checked} className="" />
                            <span>{item.time}AM</span>
                        </div>

                        <div className='flex items-center gap-1'>

                            <input type="checkbox" checked={item.checked} className="" />
                            <span>{item.time}AM</span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeeklySchedule;
