'use client';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export default function index() {
    const percentage = 76;
  return (
    <>
    

      {/* Main Dashboard */}
      <main className="flex-1 p-8 bg-[#6c57ec] bg-opacity-20 m-20 rounded-xl">
        <div className="bg-white text-center flex items-center justify-around gap-4 p-4 rounded-lg">
            <div>
        <h2 className="text-4xl font-bold  text-purple-700">Total User</h2>
        <h2 className="text-xl  ">Number of registered employees</h2>
        </div>
        <p className="text-4xl font-extrabold">2,500</p>
        </div>
        {/* Cards Section */}

        <div className='grid grid-cols-3 md:grid-cols-2 gap-4 bg-white mt-20 rounded-xl p-4'>

        <div className='m-2'>
      <h2 className="text-purple-700 font-bold text-lg">Active Tests</h2>
        <div className="bg-purple-200 rounded-2xl p-4 w-64 shadow-md">
      <div className="flex items-center gap-4 mt-3">
        <div className="w-20 h-16">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: 'black',
              textColor: 'black',
              trailColor: '#e5e5e5',
            })}
          />
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Active Test</p>
          <p className="text-purple-600 text-sm">Ongoing tests being attempted</p>
        </div>
      </div>
      </div>
      </div>
        <div className='m-2'>
      <h2 className="text-purple-700 font-bold text-lg">Completed Tests</h2>
        <div className="bg-purple-200 rounded-2xl p-4 w-64 shadow-md">
      <div className="flex items-center gap-4 mt-3">
        <div className="w-20 h-16">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: 'black',
              textColor: 'black',
              trailColor: '#e5e5e5',
            })}
          />
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Completed Tests</p>
          <p className="text-purple-600 text-sm">Total tests completed so far</p>
        </div>
      </div>
      </div>
      </div>
        <div className='m-2'>
      <h2 className="text-purple-700 font-bold text-lg">Average Test Score</h2>
        <div className="bg-purple-200 rounded-2xl p-4 w-64 shadow-md">
      <div className="flex items-center gap-4 mt-3">
        <div className="w-20 h-16">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: 'black',
              textColor: 'black',
              trailColor: '#e5e5e5',
            })}
          />
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Average Test Score</p>
          <p className="text-purple-600 text-sm">Overall employee performance</p>
        </div>
      </div>
      </div>
      </div>
        <div className='m-2'>
      <h2 className="text-purple-700 font-bold text-lg">Pass Rate</h2>
        <div className="bg-purple-200 rounded-2xl p-4 w-64 shadow-md">
      <div className="flex items-center gap-4 mt-3">
        <div className="w-20 h-16">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: 'black',
              textColor: 'black',
              trailColor: '#e5e5e5',
            })}
          />
        </div>
        <div>
          <p className="text-gray-700 font-semibold">Pass Rate</p>
          <p className="text-purple-600 text-sm">Percentage of employees passing tests</p>
        </div>
      </div>
      </div>
      </div>
    </div>
      </main>
    </>
  );
}
