'use client';
import { useState } from 'react';
import { FaFileDownload, FaPrint, FaChartBar, FaRupeeSign, FaTable } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';

export default function ReportsManagement() {
  const [activeTab, setActiveTab] = useState('financial');
  const [selectedYear, setSelectedYear] = useState('2023-2024');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);

  // Financial data for reports
  const financialData = {
    '2023-2024': {
      income: {
        total: 7865000,
        market_fees: 3450000,
        license_fees: 1200000,
        rental_income: 2800000,
        other_income: 415000
      },
      expenses: {
        total: 5632000,
        staff_salary: 2500000,
        maintenance: 1200000,
        utilities: 800000,
        development: 800000,
        misc: 332000
      },
      assets: {
        total: 42500000,
        land: 25000000,
        buildings: 15000000,
        equipment: 2000000,
        cash_reserves: 500000
      }
    },
    '2022-2023': {
      income: {
        total: 6532000,
        market_fees: 2850000,
        license_fees: 980000,
        rental_income: 2300000,
        other_income: 402000
      },
      expenses: {
        total: 4876000,
        staff_salary: 2200000,
        maintenance: 950000,
        utilities: 750000,
        development: 650000,
        misc: 326000
      },
      assets: {
        total: 37800000,
        land: 25000000,
        buildings: 10500000,
        equipment: 1800000,
        cash_reserves: 500000
      }
    }
  };

  // Market data for reports
  const marketData = {
    '2023-2024': {
      totalFarmers: 1250,
      totalTraders: 326,
      totalTransactions: 45800,
      totalVolume: 25640, // in tons
      totalValue: 185000000,
      topProducts: [
        { name: 'कांदा (Onion)', volume: 8500, value: 68000000 },
        { name: 'टोमॅटो (Tomato)', volume: 4200, value: 29400000 },
        { name: 'बटाटा (Potato)', volume: 3800, value: 19000000 },
        { name: 'मिरची (Chili)', volume: 1600, value: 16000000 },
        { name: 'द्राक्षे (Grapes)', volume: 850, value: 12750000 }
      ]
    },
    '2022-2023': {
      totalFarmers: 1120,
      totalTraders: 298,
      totalTransactions: 41200,
      totalVolume: 23100, // in tons
      totalValue: 162000000,
      topProducts: [
        { name: 'कांदा (Onion)', volume: 7800, value: 58500000 },
        { name: 'टोमॅटो (Tomato)', volume: 3900, value: 25350000 },
        { name: 'बटाटा (Potato)', volume: 3500, value: 17500000 },
        { name: 'मिरची (Chili)', volume: 1400, value: 14000000 },
        { name: 'द्राक्षे (Grapes)', volume: 780, value: 11700000 }
      ]
    }
  };

  // License data for reports
  const licenseData = {
    '2023-2024': {
      totalLicenses: 326,
      newLicenses: 38,
      renewedLicenses: 288,
      expiredLicenses: 10,
      licensesByType: [
        { type: 'Trader A', count: 156, fees: 780000 },
        { type: 'Trader B', count: 98, fees: 294000 },
        { type: 'Trader C', count: 72, fees: 126000 }
      ]
    },
    '2022-2023': {
      totalLicenses: 298,
      newLicenses: 42,
      renewedLicenses: 256,
      expiredLicenses: 14,
      licensesByType: [
        { type: 'Trader A', count: 142, fees: 710000 },
        { type: 'Trader B', count: 90, fees: 270000 },
        { type: 'Trader C', count: 66, fees: 115500 }
      ]
    }
  };

  // Handle report generation
  const generateReport = () => {
    setIsGenerating(true);
    // Simulate API call or report generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('रिपोर्ट यशस्वीरित्या तयार केला गेला आहे!');
    }, 1500);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">अहवाल व्यवस्थापन</h2>
          <div className="flex space-x-2">
            <button 
              onClick={generateReport}
              disabled={isGenerating}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  जनरेट होत आहे...
                </>
              ) : (
                <>
                  <FaFileDownload className="mr-2" /> रिपोर्ट जनरेट करा
                </>
              )}
            </button>
            <button 
              onClick={() => window.print()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FaPrint className="mr-2" /> प्रिंट करा
            </button>
          </div>
        </div>

        {/* Report Filters */}
        <div className="mb-6 flex flex-wrap gap-4 items-center bg-gray-50 p-4 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">आर्थिक वर्ष</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">महिना</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">सर्व महिने</option>
              <option value="04">एप्रिल</option>
              <option value="05">मे</option>
              <option value="06">जून</option>
              <option value="07">जुलै</option>
              <option value="08">ऑगस्ट</option>
              <option value="09">सप्टेंबर</option>
              <option value="10">ऑक्टोबर</option>
              <option value="11">नोव्हेंबर</option>
              <option value="12">डिसेंबर</option>
              <option value="01">जानेवारी</option>
              <option value="02">फेब्रुवारी</option>
              <option value="03">मार्च</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">अहवाल प्रकार</label>
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab('financial')}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-l-md ${
                  activeTab === 'financial'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaRupeeSign className="mr-2" /> आर्थिक
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('market')}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                  activeTab === 'market'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaChartBar className="mr-2" /> बाजार
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('license')}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-r-md ${
                  activeTab === 'license'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaTable className="mr-2" /> परवाने
              </button>
            </div>
          </div>
        </div>

        {/* Financial Report */}
        {activeTab === 'financial' && (
          <div className="space-y-6" id="financial-report">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">दिंडोरी कृषि उत्पन्न बाजार समिती</h3>
              <p className="text-lg font-semibold mt-1">आर्थिक अहवाल: {selectedYear}</p>
              <p className="text-sm text-gray-600">{selectedMonth === 'all' ? 'वार्षिक अहवाल' : 'मासिक अहवाल'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Income Statement */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-green-800 border-b pb-2 mb-3">उत्पन्न</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">बाजार शुल्क</span>
                    <span>{formatCurrency(financialData[selectedYear].income.market_fees)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">परवाना शुल्क</span>
                    <span>{formatCurrency(financialData[selectedYear].income.license_fees)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">भाडे उत्पन्न</span>
                    <span>{formatCurrency(financialData[selectedYear].income.rental_income)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">इतर उत्पन्न</span>
                    <span>{formatCurrency(financialData[selectedYear].income.other_income)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 mt-2 border-t border-gray-300">
                    <span>एकूण उत्पन्न</span>
                    <span className="text-green-700">{formatCurrency(financialData[selectedYear].income.total)}</span>
                  </div>
                </div>
              </div>

              {/* Expense Statement */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-red-800 border-b pb-2 mb-3">खर्च</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">कर्मचारी वेतन</span>
                    <span>{formatCurrency(financialData[selectedYear].expenses.staff_salary)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">देखभाल</span>
                    <span>{formatCurrency(financialData[selectedYear].expenses.maintenance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">वापरासाठी शुल्क</span>
                    <span>{formatCurrency(financialData[selectedYear].expenses.utilities)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">विकास</span>
                    <span>{formatCurrency(financialData[selectedYear].expenses.development)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">इतर खर्च</span>
                    <span>{formatCurrency(financialData[selectedYear].expenses.misc)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 mt-2 border-t border-gray-300">
                    <span>एकूण खर्च</span>
                    <span className="text-red-700">{formatCurrency(financialData[selectedYear].expenses.total)}</span>
                  </div>
                </div>
              </div>

              {/* Assets Statement */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-blue-800 border-b pb-2 mb-3">मालमत्ता</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">जमीन</span>
                    <span>{formatCurrency(financialData[selectedYear].assets.land)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">इमारती</span>
                    <span>{formatCurrency(financialData[selectedYear].assets.buildings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">उपकरणे</span>
                    <span>{formatCurrency(financialData[selectedYear].assets.equipment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">रोख साठा</span>
                    <span>{formatCurrency(financialData[selectedYear].assets.cash_reserves)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 mt-2 border-t border-gray-300">
                    <span>एकूण मालमत्ता</span>
                    <span className="text-blue-700">{formatCurrency(financialData[selectedYear].assets.total)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Net Profit */}
            <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-200">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-green-800">निव्वळ नफा</h4>
                <div>
                  <span className="text-xl font-bold text-green-700">
                    {formatCurrency(financialData[selectedYear].income.total - financialData[selectedYear].expenses.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Market Report */}
        {activeTab === 'market' && (
          <div className="space-y-6" id="market-report">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">दिंडोरी कृषि उत्पन्न बाजार समिती</h3>
              <p className="text-lg font-semibold mt-1">बाजार अहवाल: {selectedYear}</p>
              <p className="text-sm text-gray-600">{selectedMonth === 'all' ? 'वार्षिक अहवाल' : 'मासिक अहवाल'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-green-600 mb-1">नोंदणीकृत शेतकरी</h4>
                <p className="text-2xl font-bold">{marketData[selectedYear].totalFarmers}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-blue-600 mb-1">नोंदणीकृत व्यापारी</h4>
                <p className="text-2xl font-bold">{marketData[selectedYear].totalTraders}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-purple-600 mb-1">एकूण व्यवहार</h4>
                <p className="text-2xl font-bold">{marketData[selectedYear].totalTransactions.toLocaleString()}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-yellow-600 mb-1">एकूण मूल्य</h4>
                <p className="text-2xl font-bold">{formatCurrency(marketData[selectedYear].totalValue)}</p>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h4 className="font-semibold text-gray-800">सर्वाधिक विक्री झालेली उत्पादने</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        उत्पादन
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        प्रमाण (टन)
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        मूल्य
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        टक्केवारी
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {marketData[selectedYear].topProducts.map((product, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {product.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.volume.toLocaleString()} टन
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatCurrency(product.value)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {((product.value / marketData[selectedYear].totalValue) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">अहवाल सारांश</h4>
              <p className="text-gray-700">
                {selectedYear} या आर्थिक वर्षामध्ये दिंडोरी कृषि उत्पन्न बाजार समितीमध्ये एकूण {marketData[selectedYear].totalFarmers} शेतकरी आणि {marketData[selectedYear].totalTraders} व्यापाऱ्यांनी सहभाग घेतला. 
                या कालावधीत एकूण {marketData[selectedYear].totalTransactions.toLocaleString()} व्यवहार झाले, ज्याची एकूण किंमत {formatCurrency(marketData[selectedYear].totalValue)} होती.
                बाजारातील {marketData[selectedYear].totalVolume.toLocaleString()} टन उत्पादनांची विक्री झाली, ज्यापैकी सर्वाधिक विक्री {marketData[selectedYear].topProducts[0].name} या उत्पादनाची झाली.
              </p>
            </div>
          </div>
        )}

        {/* License Report */}
        {activeTab === 'license' && (
          <div className="space-y-6" id="license-report">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">दिंडोरी कृषि उत्पन्न बाजार समिती</h3>
              <p className="text-lg font-semibold mt-1">परवाना अहवाल: {selectedYear}</p>
              <p className="text-sm text-gray-600">{selectedMonth === 'all' ? 'वार्षिक अहवाल' : 'मासिक अहवाल'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-blue-600 mb-1">एकूण परवाने</h4>
                <p className="text-2xl font-bold">{licenseData[selectedYear].totalLicenses}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-green-600 mb-1">नवीन परवाने</h4>
                <p className="text-2xl font-bold">{licenseData[selectedYear].newLicenses}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-yellow-600 mb-1">नूतनीकरण केलेले परवाने</h4>
                <p className="text-2xl font-bold">{licenseData[selectedYear].renewedLicenses}</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg shadow-sm text-center">
                <h4 className="text-sm font-medium text-red-600 mb-1">कालबाह्य परवाने</h4>
                <p className="text-2xl font-bold">{licenseData[selectedYear].expiredLicenses}</p>
              </div>
            </div>

            <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h4 className="font-semibold text-gray-800">परवाना प्रकारानुसार वर्गीकरण</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        परवाना प्रकार
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        संख्या
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        शुल्क
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        टक्केवारी
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {licenseData[selectedYear].licensesByType.map((license, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {license.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {license.count}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatCurrency(license.fees)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {((license.count / licenseData[selectedYear].totalLicenses) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">अहवाल सारांश</h4>
              <p className="text-gray-700">
                {selectedYear} या आर्थिक वर्षामध्ये दिंडोरी कृषि उत्पन्न बाजार समितीमध्ये एकूण {licenseData[selectedYear].totalLicenses} व्यापारी परवाने कार्यरत होते. 
                यापैकी {licenseData[selectedYear].newLicenses} नवीन परवाने जारी करण्यात आले आणि {licenseData[selectedYear].renewedLicenses} परवान्यांचे नूतनीकरण करण्यात आले.
                सर्वाधिक परवाने {licenseData[selectedYear].licensesByType[0].type} या प्रकारात आहेत, ज्यामध्ये एकूण {licenseData[selectedYear].licensesByType[0].count} व्यापारी आहेत.
                या वर्षात परवाना शुल्कापोटी एकूण {formatCurrency(licenseData[selectedYear].licensesByType.reduce((acc, curr) => acc + curr.fees, 0))} उत्पन्न प्राप्त झाले.
              </p>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
