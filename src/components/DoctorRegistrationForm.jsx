import React, { useState } from 'react';
import './VolunteerRequestPage.css';

const DoctorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    specialty: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'البريد الإلكتروني مطلوب';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'بريد إلكتروني غير صالح';
    
    if (!formData.password) newErrors.password = 'كلمة السر مطلوبة';
    else if (formData.password.length < 6) newErrors.password = 'كلمة السر يجب أن تكون 6 أحرف على الأقل';
    
    if (!formData.firstName) newErrors.firstName = 'الاسم الأول مطلوب';
    if (!formData.lastName) newErrors.lastName = 'الاسم الأخير مطلوب';
    if (!formData.specialty) newErrors.specialty = 'التخصص مطلوب';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'رقم الهاتف مطلوب';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
    }
  };

  return (
    <div className="donation-container">
      <div className="donation-card">
        <div className="donation-header">
            <br></br>
            <br></br>
          <h1>تسجيل طبيب جديد</h1>
          <p>الرجاء تعبئة النموذج التالي لتسجيل بيانات الطبيب</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* قسم معلومات الحساب */}
          <div className="form-section">
            <h2>معلومات الحساب</h2>
            <div className="form-rows-4">
              <div className="input-field">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="input-field">
                <label htmlFor="password">كلمة السر</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="******"
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
            </div>
          </div>

          {/* قسم المعلومات الشخصية */}
          <div className="form-section">
            <h2>المعلومات الشخصية</h2>
            <div className="form-rows-4">
              <div className="input-field">
                <label htmlFor="firstName">الاسم الأول</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="الاسم الأول"
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>

              <div className="input-field">
                <label htmlFor="lastName">الاسم الأخير</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="الاسم الأخير"
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </div>

              <div className="input-field">
                <label htmlFor="specialty">التخصص</label>
                <input
                  type="text"
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  placeholder="أدخل التخصص"
                />
                {errors.specialty && <span className="error">{errors.specialty}</span>}
              </div>

              <div className="input-field">
                <label htmlFor="phoneNumber">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="963XXXXXXXXX"
                />
                {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">تسجيل الطبيب</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorRegistrationForm;