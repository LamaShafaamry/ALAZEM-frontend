import React, { useState } from 'react';
import './Full.css'; 

const FullAssociationDonation = () => {
  const [donationData, setDonationData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    paymentMethod: 'credit',
    message: '',
    isAnonymous: false
  });

  const paymentMethods = [
    { value: 'credit', label: 'بطاقة ائتمان' },
    { value: 'bank', label: 'حوالة بنكية' },
    { value: 'cash', label: 'نقداً في المقر' }
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
    console.log('Donation submitted:', donationData);
    alert('شكراً لتبرعك الكريم! سنتصل بك لتأكيد التفاصيل.');
  };

  return (
    <div className="donation-container">
      <div className="donation-card">
        <div className="donation-header">
          <h1>التبرع لكامل الجمعية</h1>
          <p>تبرعك يساهم في دعم جميع أنشطة الجمعية وبرامجها</p>
        </div>

        <div className="donation-content">
          <div className="donation-info">
            <h2>معلومات عن التبرع</h2>
            <ul className="benefits-list">
              <li>التبرع الشامل يدعم جميع برامج الجمعية</li>
              <li>يتم تخصيص التبرع حيث الحاجة الأكبر</li>
              <li>إمكانية الحصول على إعفاء ضريبي</li>
              <li>إيصال تبرع رسمي يصلك عبر البريد</li>
            </ul>

            <div className="contact-box">
              <h3>للاستفسارات:</h3>
              <p>هاتف: 1234567890</p>
              <p>بريد إلكتروني: donations@example.com</p>
            </div>
          </div>

          <div className="donation-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  value={donationData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={donationData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>رقم الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={donationData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>مبلغ التبرع </label>
                <input
                  type="number"
                  name="amount"
                  value={donationData.amount}
                  onChange={handleChange}
                  min="100"
                  step="100"
                  placeholder="أدخل المبلغ"
                  required
                />
              </div>

            
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="isAnonymous"
                  name="isAnonymous"
                  checked={donationData.isAnonymous}
                  onChange={handleChange}
                />
                <label htmlFor="isAnonymous">التبرع بشكل مجهول</label>
              </div>

              <button type="submit" className="submit-btn">
                تأكيد التبرع
              </button>
            </form>
          </div>
        </div>

        <div className="donation-footer">
          <p>جميع التبرعات خاضعة للوائح وأنظمة الجمعية</p>
          <p>شكراً لدعمكم ومساهمتكم في أعمال الخير</p>
        </div>
      </div>
    </div>
  );
};

export default FullAssociationDonation;