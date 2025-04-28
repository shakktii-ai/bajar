'use client';
import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaUsers, FaCubes, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';
import AdminLayout from '../../components/AdminLayout';

export default function AdminDashboard() {
  
  // Sample data for dashboard
  const [dashboardData, setDashboardData] = useState({
    totalFarmers: 1250,
    totalTraders: 326,
    totalProducts: 58,
    dailyTransactions: 112,
    totalRevenue: 2568000,
    marketGrowth: 68,
    revenueGrowth: 74,
    productGrowth: 82,
    // Recent market rates
    recentRates: [
      { product: 'कांदा', avgRate: 2200, change: '+120', trend: 'up' },
      { product: 'टोमॅटो', avgRate: 1800, change: '-90', trend: 'down' },
      { product: 'बटाटा', avgRate: 1500, change: '+70', trend: 'up' },
      { product: 'मिरची', avgRate: 3200, change: '+220', trend: 'up' },
      { product: 'फुलकोबी', avgRate: 1100, change: '-40', trend: 'down' },
    ],
    // Recent activity
    recentActivity: [
      { action: 'नवीन व्यापारी नोंदणी', user: 'प्रशांत पाटील', time: '10:30 AM' },
      { action: 'दैनिक दर अपडेट', user: 'राहुल जाधव', time: '9:15 AM' },
      { action: 'दरपत्रक रिपोर्ट निर्माण', user: 'संदीप शिंदे', time: '8:45 AM' },
      { action: 'नवीन फोटो अपलोड', user: 'सुनील गावित', time: 'Yesterday' },
      { action: 'व्यापारी अहवाल जनरेशन', user: 'अनिल सावंत', time: 'Yesterday' },
    ]
  });

  // Get today's date in Marathi
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const todayMarathi = today.toLocaleDateString('mr-IN', options);

  return (
    <AdminLayout>
      {/* Main Dashboard Content */}
      <div>
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Farmers Card */}
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <FaUsers className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">एकूण शेतकरी</h3>
                <p className="text-2xl font-bold">{dashboardData.totalFarmers}</p>
                <p className="text-xs text-green-600">+82 मागील महिन्यापेक्षा</p>
              </div>
            </div>

            {/* Traders Card */}
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">एकूण व्यापारी</h3>
                <p className="text-2xl font-bold">{dashboardData.totalTraders}</p>
                <p className="text-xs text-green-600">+14 मागील महिन्यापेक्षा</p>
              </div>
            </div>

            {/* Products Card */}
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <FaCubes className="text-yellow-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">उत्पादने प्रकार</h3>
                <p className="text-2xl font-bold">{dashboardData.totalProducts}</p>
                <p className="text-xs text-green-600">+3 नवीन जोडले</p>
              </div>
            </div>

            {/* Daily Transactions */}
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="rounded-full bg-red-100 p-3 mr-4">
                <FaMoneyBillWave className="text-red-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm">आजचे व्यवहार</h3>
                <p className="text-2xl font-bold">{dashboardData.dailyTransactions}</p>
                <p className="text-xs text-green-600">₹{(dashboardData.totalRevenue/100000).toFixed(2)} लाख</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Market Growth */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-medium text-gray-700 mb-4">बाजारातील वाढ</h3>
              <div className="flex items-center">
                <div className="w-24 h-24 mr-6">
                  <CircularProgressbar
                    value={dashboardData.marketGrowth}
                    text={`${dashboardData.marketGrowth}%`}
                    styles={buildStyles({
                      textSize: '16px',
                      pathColor: '#047857',
                      textColor: '#047857',
                      trailColor: '#e5e7eb',
                    })}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">मागील वर्षाच्या तुलनेत</p>
                  <p className="text-sm text-green-600 font-medium">+12.3% वाढ दर्शविते</p>
                  <p className="text-xs text-gray-500 mt-2">2024-25 आर्थिक वर्ष</p>
                </div>
              </div>
            </div>

            {/* Revenue Growth */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-medium text-gray-700 mb-4">उत्पन्न वाढ</h3>
              <div className="flex items-center">
                <div className="w-24 h-24 mr-6">
                  <CircularProgressbar
                    value={dashboardData.revenueGrowth}
                    text={`${dashboardData.revenueGrowth}%`}
                    styles={buildStyles({
                      textSize: '16px',
                      pathColor: '#0369a1',
                      textColor: '#0369a1',
                      trailColor: '#e5e7eb',
                    })}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">मागील तिमाहीच्या तुलनेत</p>
                  <p className="text-sm text-green-600 font-medium">+8.7% वाढ</p>
                  <p className="text-xs text-gray-500 mt-2">दिंडोरी बाजार समिती सेस</p>
                </div>
              </div>
            </div>

            {/* Products Growth */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-medium text-gray-700 mb-4">उत्पादने व्यापार वाढ</h3>
              <div className="flex items-center">
                <div className="w-24 h-24 mr-6">
                  <CircularProgressbar
                    value={dashboardData.productGrowth}
                    text={`${dashboardData.productGrowth}%`}
                    styles={buildStyles({
                      textSize: '16px',
                      pathColor: '#b45309',
                      textColor: '#b45309',
                      trailColor: '#e5e7eb',
                    })}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">उत्पादने रेकॉर्ड केली</p>
                  <p className="text-sm text-green-600 font-medium">+15.2% विविधता</p>
                  <p className="text-xs text-gray-500 mt-2">58 वेगवेगळी उत्पादने</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Market Rates & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Market Rates */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="font-medium text-gray-700">आजचे बाजार दर</h3>
              </div>
              <div className="p-4">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="px-4 py-2">उत्पादन</th>
                      <th className="px-4 py-2">सरासरी दर (₹/क्विंटल)</th>
                      <th className="px-4 py-2">बदल</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dashboardData.recentRates.map((rate, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap">{rate.product}</td>
                        <td className="px-4 py-3 whitespace-nowrap">₹{rate.avgRate}</td>
                        <td className={`px-4 py-3 whitespace-nowrap ${rate.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {rate.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-3 text-right">
                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                  सर्व दर पहा
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="border-b border-gray-200 px-6 py-4">
                <h3 className="font-medium text-gray-700">अलीकडील क्रियाकलाप</h3>
              </div>
              <div className="p-4">
                <ul className="divide-y divide-gray-200">
                  {dashboardData.recentActivity.map((activity, index) => (
                    <li key={index} className="py-3">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.user}</p>
                        </div>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 px-6 py-3 text-right">
                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                  सर्व क्रियाकलाप पहा
                </button>
              </div>
            </div>
          </div>
      </div>
    </AdminLayout>
  );
}
