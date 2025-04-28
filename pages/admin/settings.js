'use client';
import { useState, useEffect } from 'react';
import { FaSave, FaCog, FaUser, FaKey, FaBell, FaPalette } from 'react-icons/fa';
import AdminLayout from '../../components/AdminLayout';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [settingsUpdated, setSettingsUpdated] = useState(false);
  
  // General settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'दिंडोरी कृषि उत्पन्न बाजार समिती',
    siteDescription: 'दिंडोरी कृषि उत्पन्न बाजार समिती - अधिकृत वेबसाईट',
    contactEmail: 'info@dindoriapmc.org',
    contactPhone: '02557-232576',
    address: 'दिंडोरी, जिल्हा नाशिक, महाराष्ट्र - 422202',
    marketTimings: 'सकाळी ८:०० ते संध्याकाळी ६:००',
    footerText: '© २०२४ दिंडोरी कृषि उत्पन्न बाजार समिती. सर्व हक्क राखीव.'
  });
  
  // Account settings
  const [accountSettings, setAccountSettings] = useState({
    adminName: 'Admin User',
    adminEmail: 'admin@dindoriapmc.org',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newFarmerRegistration: true,
    newTraderRegistration: true,
    marketRateUpdates: true,
    systemUpdates: true,
    dailyReports: false,
    weeklyReports: true,
    monthlyReports: true
  });
  
  // Appearance settings
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'green',
    fontSize: 'medium',
    showWelcomeBanner: true,
    showLatestNews: true,
    showRecentMarketRates: true,
    compactView: false,
    language: 'mr'
  });

  // Handle general settings change
  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: value
    });
  };

  // Handle account settings change
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountSettings({
      ...accountSettings,
      [name]: value
    });
  };

  // Handle notification settings change
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    });
  };

  // Handle appearance settings change
  const handleAppearanceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAppearanceSettings({
      ...appearanceSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Save settings
  const saveSettings = () => {
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSettingsUpdated(true);
      
      setTimeout(() => {
        setSettingsUpdated(false);
      }, 3000);
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">सेटिंग्ज</h2>
          <button
            onClick={saveSettings}
            disabled={isSaving}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            {isSaving ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                जतन होत आहे...
              </>
            ) : (
              <>
                <FaSave className="mr-2" /> सेटिंग्ज जतन करा
              </>
            )}
          </button>
        </div>

        {settingsUpdated && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
            सेटिंग्ज यशस्वीरित्या अपडेट केल्या आहेत!
          </div>
        )}

        <div className="flex flex-col md:flex-row">
          {/* Settings Tabs */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-4">
            <div className="bg-gray-50 rounded-md p-2">
              <button
                onClick={() => setActiveTab('general')}
                className={`w-full text-left px-3 py-2 rounded flex items-center ${
                  activeTab === 'general' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
              >
                <FaCog className="mr-2" /> सामान्य सेटिंग्ज
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`w-full text-left px-3 py-2 rounded flex items-center ${
                  activeTab === 'account' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
              >
                <FaUser className="mr-2" /> खाते व्यवस्थापन
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full text-left px-3 py-2 rounded flex items-center ${
                  activeTab === 'notifications' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
              >
                <FaBell className="mr-2" /> नोटिफिकेशन्स
              </button>
              <button
                onClick={() => setActiveTab('appearance')}
                className={`w-full text-left px-3 py-2 rounded flex items-center ${
                  activeTab === 'appearance' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
              >
                <FaPalette className="mr-2" /> दृश्य सेटिंग्ज
              </button>
            </div>
          </div>

          {/* Settings Content */}
          <div className="w-full md:w-3/4">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="text-lg font-medium mb-4">सामान्य सेटिंग्ज</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      साइट नाव
                    </label>
                    <input
                      type="text"
                      name="siteName"
                      value={generalSettings.siteName}
                      onChange={handleGeneralChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      संपर्क ईमेल
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={generalSettings.contactEmail}
                      onChange={handleGeneralChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      संपर्क फोन
                    </label>
                    <input
                      type="text"
                      name="contactPhone"
                      value={generalSettings.contactPhone}
                      onChange={handleGeneralChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      बाजार वेळ
                    </label>
                    <input
                      type="text"
                      name="marketTimings"
                      value={generalSettings.marketTimings}
                      onChange={handleGeneralChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      साइट वर्णन
                    </label>
                    <input
                      type="text"
                      name="siteDescription"
                      value={generalSettings.siteDescription}
                      onChange={handleGeneralChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      पत्ता
                    </label>
                    <textarea
                      name="address"
                      value={generalSettings.address}
                      onChange={handleGeneralChange}
                      rows="2"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      फूटर टेक्स्ट
                    </label>
                    <input
                      type="text"
                      name="footerText"
                      value={generalSettings.footerText}
                      onChange={handleGeneralChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="text-lg font-medium mb-4">खाते व्यवस्थापन</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      अॅडमिन नाव
                    </label>
                    <input
                      type="text"
                      name="adminName"
                      value={accountSettings.adminName}
                      onChange={handleAccountChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      अॅडमिन ईमेल
                    </label>
                    <input
                      type="email"
                      name="adminEmail"
                      value={accountSettings.adminEmail}
                      onChange={handleAccountChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <h4 className="font-medium text-gray-700 mb-2">पासवर्ड बदला</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      सध्याचा पासवर्ड
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={accountSettings.currentPassword}
                      onChange={handleAccountChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      नवीन पासवर्ड
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={accountSettings.newPassword}
                      onChange={handleAccountChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      पासवर्ड पुष्टी करा
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={accountSettings.confirmPassword}
                      onChange={handleAccountChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="text-lg font-medium mb-4">नोटिफिकेशन्स</h3>
                
                <h4 className="font-medium text-gray-700 mb-2">नोटिफिकेशन चॅनेल्स</h4>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      id="emailNotifications"
                      checked={notificationSettings.emailNotifications}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="emailNotifications" className="ml-2 text-sm text-gray-700">
                      ईमेल नोटिफिकेशन्स
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="smsNotifications"
                      id="smsNotifications"
                      checked={notificationSettings.smsNotifications}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="smsNotifications" className="ml-2 text-sm text-gray-700">
                      एसएमएस नोटिफिकेशन्स
                    </label>
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-700 mb-2">नोटिफिकेशन प्रकार</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="newFarmerRegistration"
                      id="newFarmerRegistration"
                      checked={notificationSettings.newFarmerRegistration}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="newFarmerRegistration" className="ml-2 text-sm text-gray-700">
                      नवीन शेतकरी नोंदणी
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="newTraderRegistration"
                      id="newTraderRegistration"
                      checked={notificationSettings.newTraderRegistration}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="newTraderRegistration" className="ml-2 text-sm text-gray-700">
                      नवीन व्यापारी नोंदणी
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="marketRateUpdates"
                      id="marketRateUpdates"
                      checked={notificationSettings.marketRateUpdates}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="marketRateUpdates" className="ml-2 text-sm text-gray-700">
                      बाजार दर अपडेट्स
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="systemUpdates"
                      id="systemUpdates"
                      checked={notificationSettings.systemUpdates}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="systemUpdates" className="ml-2 text-sm text-gray-700">
                      सिस्टम अपडेट्स
                    </label>
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-700 mt-4 mb-2">अहवाल नोटिफिकेशन्स</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="dailyReports"
                      id="dailyReports"
                      checked={notificationSettings.dailyReports}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="dailyReports" className="ml-2 text-sm text-gray-700">
                      दैनिक अहवाल
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="weeklyReports"
                      id="weeklyReports"
                      checked={notificationSettings.weeklyReports}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="weeklyReports" className="ml-2 text-sm text-gray-700">
                      साप्ताहिक अहवाल
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="monthlyReports"
                      id="monthlyReports"
                      checked={notificationSettings.monthlyReports}
                      onChange={handleNotificationChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="monthlyReports" className="ml-2 text-sm text-gray-700">
                      मासिक अहवाल
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <div className="bg-gray-50 rounded-md p-4">
                <h3 className="text-lg font-medium mb-4">दृश्य सेटिंग्ज</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      थीम
                    </label>
                    <select
                      name="theme"
                      value={appearanceSettings.theme}
                      onChange={handleAppearanceChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="green">हिरवा (डीफॉल्ट)</option>
                      <option value="blue">निळा</option>
                      <option value="orange">केशरी</option>
                      <option value="red">लाल</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      फॉंट आकार
                    </label>
                    <select
                      name="fontSize"
                      value={appearanceSettings.fontSize}
                      onChange={handleAppearanceChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="small">छोटा</option>
                      <option value="medium">मध्यम (डीफॉल्ट)</option>
                      <option value="large">मोठा</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      भाषा
                    </label>
                    <select
                      name="language"
                      value={appearanceSettings.language}
                      onChange={handleAppearanceChange}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="mr">मराठी (डीफॉल्ट)</option>
                      <option value="hi">हिंदी</option>
                      <option value="en">इंग्रजी</option>
                    </select>
                  </div>
                </div>
                
                <h4 className="font-medium text-gray-700 mt-4 mb-2">डॅशबोर्ड विकल्प</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="showWelcomeBanner"
                      id="showWelcomeBanner"
                      checked={appearanceSettings.showWelcomeBanner}
                      onChange={handleAppearanceChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="showWelcomeBanner" className="ml-2 text-sm text-gray-700">
                      स्वागत बॅनर दाखवा
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="showLatestNews"
                      id="showLatestNews"
                      checked={appearanceSettings.showLatestNews}
                      onChange={handleAppearanceChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="showLatestNews" className="ml-2 text-sm text-gray-700">
                      नवीनतम बातम्या दाखवा
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="showRecentMarketRates"
                      id="showRecentMarketRates"
                      checked={appearanceSettings.showRecentMarketRates}
                      onChange={handleAppearanceChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="showRecentMarketRates" className="ml-2 text-sm text-gray-700">
                      अलीकडील बाजार दर दाखवा
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="compactView"
                      id="compactView"
                      checked={appearanceSettings.compactView}
                      onChange={handleAppearanceChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="compactView" className="ml-2 text-sm text-gray-700">
                      कॉम्पॅक्ट व्ह्यू वापरा
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
