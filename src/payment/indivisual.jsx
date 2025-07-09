import React, { useState } from 'react';
import './Individual.css';

const IndividualDonation = () => {
  const [donationData, setDonationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'education',
    paymentMethod: 'credit',
    isRecurring: false,
    message: ''
  });

  const donationTypes = [
    { value: 'education', label: 'دعم التعليم' },
    { value: 'health', label: 'الرعاية الصحية' },
    { value: 'food', label: 'الإغاثة الغذائية' }
  ];

  const paymentMethods = [
    { value: 'credit', label: 'بطاقة ائتمان' },
    { value: 'bank', label: 'حوالة بنكية' },
    { value: 'mobile', label: 'محفظة إلكترونية' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`شكراً لتبرعك لدعم ${donationTypes.find(t => t.value === donationData.donationType).label}`);
    console.log('Donation Data:', donationData);
  };

  return (
    <div className="individual-donation">
      <div className="donation-header">
        <h1>التبرع الفردي</h1>
        <p>اختر مجال التبرع الذي تريد دعمه وساهم في تغيير حياة الأفراد</p>
      </div>

      <div className="donation-container">
        <div className="donation-form-container">
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-section">
              <h2>معلومات المتبرع</h2>
              <div className="form-group">
                <label htmlFor="fullName">الاسم الكامل</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={donationData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={donationData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={donationData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>تفاصيل التبرع</h2>
              <div className="form-group">
                <label htmlFor="donationType">مجال التبرع</label>
                <select
                  id="donationType"
                  name="donationType"
                  value={donationData.donationType}
                  onChange={handleChange}
                >
                  {donationTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amount">مبلغ التبرع </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={donationData.amount}
                  onChange={handleChange}
                  min="50"
                  step="10"
                  required
                />
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="isRecurring"
                  name="isRecurring"
                  checked={donationData.isRecurring}
                  onChange={handleChange}
                />
                <label htmlFor="isRecurring">تبرع شهري متكرر</label>
              </div>
            </div>

     
            <button type="submit" className="submit-btn">
              تأكيد التبرع
            </button>
          </form>
        </div>

        <div className="donation-info">
          <div className="info-card">
            <h3>كيف يستخدم تبرعك؟</h3>
            <p>سيوجه تبرعك بالكامل إلى المجال الذي اخترته لدعم الأفراد المحتاجين.</p>
            <ul className="benefits-list">
              <li>شفافية كاملة في توزيع التبرعات</li>
              <li>تقارير دورية عن تأثير تبرعك</li>
              <li>إيصال ضريبي معتمد</li>
            </ul>
          </div>

          <div className="info-card contact-card">
            <h3>للاستفسارات</h3>
            <p><i className="icon phone"></i> 920000000</p>
            <p><i className="icon email"></i> donations@example.org</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualDonation;