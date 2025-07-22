import React, { useState } from 'react';
import './Individual.css'; 

const IndividualDonation = () => {
  const [donationData, setDonationData] = useState({
    firstName: '',
    lastName: '',
    mothersName: '',
    fatherName: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'education',
    isRecurring: false,
    patients: []
  });

  const donationTypes = [
    { value: 'education', label: 'دعم التعليم' },
    { value: 'health', label: 'الرعاية الصحية' },
    { value: 'food', label: 'الإغاثة الغذائية' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addPatient = () => {
    const { firstName, lastName, fatherName, mothersName } = donationData;
    
    if (!firstName || !lastName || !fatherName || !mothersName) {
      alert('الرجاء إدخال جميع حقول الاسم');
      return;
    }

    const fullName = `${firstName} ${fatherName}  ${lastName}`;
    
    setDonationData(prev => ({
      ...prev,
      patients: [...prev.patients, {
        name: fullName,
        isSelected: true
      }],
      firstName: '',
      lastName: '',
      fatherName: '',
      mothersName: ''
    }));
  };

  const togglePatientSelection = (index) => {
    const updatedPatients = [...donationData.patients];
    updatedPatients[index].isSelected = !updatedPatients[index].isSelected;
    setDonationData(prev => ({
      ...prev,
      patients: updatedPatients
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(donationData.patients.length === 0) {
      alert('الرجاء إضافة مريض على الأقل');
      return;
    }
    alert('تم تقديم التبرع بنجاح');
    console.log('Donation Data:', donationData);
  };

  return (
    <div className="donation-container">
      <br></br>
      <br></br>
      <div className="donation-card">
        <div className="donation-header">
          <h1>التبرع الفردي</h1>
          <p>اختر مجال التبرع الذي تريد دعمه وساهم في تغيير حياة الأفراد</p>
        </div>

        <div className="donation-content">
          <div className="donation-info">
            <h2>معلومات عن التبرع</h2>
            <p>سيوجه تبرعك بالكامل إلى المجال الذي اخترته لدعم الأفراد المحتاجين.</p>
            <ul className="benefits-list">
              <li>شفافية كاملة في توزيع التبرعات</li>
              <li>تقارير دورية عن تأثير تبرعك</li>
              <li>إيصال ضريبي معتمد</li>
            </ul>

            <div className="contact-box">
              <h3>للاستفسارات:</h3>
              <p>هاتف: 0998 766 972</p>
              <p>بريد إلكتروني: jmytalzmalmsnatalkfyfat@gmail.com</p>
            </div>
          </div>

          <div className="donation-form">
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label>الاسم الأول</label>
                <input
                  type="text"
                  name="firstName"
                  value={donationData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>الاسم الأخير</label>
                <input
                  type="text"
                  name="lastName"
                  value={donationData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>اسم الأب</label>
                <input
                  type="text"
                  name="fatherName"
                  value={donationData.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>
              <div className="form-group">
                <label>اسم الأم</label>
                <input
                  type="text"
                  name="mothersName"
                  value={donationData.mothersName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br></br>

            

             
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
              <br></br>

              <div className="form-group">
                <label>مبلغ التبرع</label>
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
              <br></br>
               {/* قائمة المرضى المضافين */}
               <div className="patients-list">
                {donationData.patients.map((patient, index) => (
                  <div key={index} className="patient-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={patient.isSelected}
                        onChange={() => togglePatientSelection(index)}
                      />
                      {patient.name}
                    </label>
                  </div>
                ))}
              </div>
              <br></br>



              <button type="submit" 
                className="submit-btn"
                onClick={addPatient}>
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

export default IndividualDonation;