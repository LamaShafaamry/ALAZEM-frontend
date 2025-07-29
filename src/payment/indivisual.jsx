import React, { useState } from 'react';
import { createDonation , verifyPatientExist} from '../api/api';
import './Individual.css'; 

const IndividualDonation = () => {
  const [donationData, setDonationData] = useState({
    firstName: '',
    lastName: '',
    mothersName: '',
    fatherName: '',
    email: '',
    
    amount: '',
    
    isRecurring: false,
    patients: []
  });

 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

 // import it

const addPatient = async () => {
  const { firstName, lastName, fatherName, mothersName , amount} = donationData;

  if (!firstName || !lastName || !fatherName || !mothersName) {
    alert('الرجاء إدخال جميع حقول الاسم');
    return;
  }

  const patientData = {
    first_name: firstName,
    last_name: lastName,
    father_name: fatherName,
    mother_name: mothersName,
  };

  try {
    const response = await verifyPatientExist(patientData);
    const patient = response.data;

    const fullName = `${patient.first_name} ${patient.father_name} ${patient.last_name}`;

    setDonationData((prev) => ({
      ...prev,
      patients: [
        ...prev.patients,
        {
          id: patient.id,
          name: fullName,
          amount: amount.trim(), // Use current amount
          isSelected: true,
        },
      ],
      firstName: '',
      lastName: '',
      fatherName: '',
      mothersName: '',
    }));
  } catch (error) {
    console.error('Error adding patient:', error);
    alert('حدث خطأ أثناء إضافة المريض');
  }
};


  const togglePatientSelection = (index) => {
    const updatedPatients = [...donationData.patients];
    updatedPatients[index].isSelected = !updatedPatients[index].isSelected;
    setDonationData(prev => ({
      ...prev,
      patients: updatedPatients
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(donationData.patients.length === 0) {
      alert('الرجاء إضافة مريض على الأقل');
      return;
    }

const donationRequest = {
  email: donationData.email,
  donation_type: "IND", // or other type depending on context
  amount: donationData.amount.trim(), // remove whitespace just in case
  donations: donationData.patients
    .filter((p) => p.isSelected)
    .map((p) => ({
      id: p.id,
      amount: p.amount, // make sure each patient has amount defined
    })),
  is_individual: true,
  is_recurring: donationData.isRecurring
};

    try {
      const response = await createDonation(donationRequest);
      alert('تم تقديم التبرع بنجاح');
      console.log('Donation Response:', response.data);
      
      // إعادة تعيين النموذج
      setDonationData({
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
    } catch (error) {
      alert('حدث خطأ أثناء إرسال التبرع');
      console.error('Donation Error:', error);
    }
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
              <p>بريد إلكتروني: ALAZEM@gmail.com</p>
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
              
              <div className="patients-list">
  {donationData.patients.map((patient, index) => (
    <div key={index} className="patient-item">
      <label>
        <input
          type="checkbox"
          checked={patient.isSelected}
          onChange={() => togglePatientSelection(index)}
        />
        {patient.name} - مبلغ التبرع: {patient.amount} ل.س
      </label>
    </div>
  ))}
</div>

              <br></br>

              <button 
                type="button" 
                className="submit-btn"
                onClick={addPatient}
              >
                تأكيد التبرع
              </button>

                <button 
                type="submit" 
                className="submit-btn"
                onClick={handleSubmit}
              >
                إرسال
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