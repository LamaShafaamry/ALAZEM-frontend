import React, { useState } from "react";
import { createDonation } from "../api/api";
import "./Full.css";
import { Link } from "react-router-dom";

const FullAssociationDonation = () => {
  const [donationData, setDonationData] = useState({
    email: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!donationData.email || !donationData.amount) {
      showMessage("الرجاء تعبئة جميع الحقول المطلوبة", "error");
      return;
    }

    setLoading(true);
    const donationRequest = {
      email: donationData.email,
      donation_type: "ASS", // or other type depending on context
      amount: donationData.amount.trim(), // remove whitespace just in case
      // donations: donationData.patients
      //   .filter((p) => p.isSelected)
      //   .map((p) => ({
      //     id: p.id,
      //     amount: p.amount, // make sure each patient has amount defined
      //   })),
      // is_individual: true,
      // is_recurring: donationData.isRecurring,
    };
    try {
      const response = await createDonation(donationRequest);

      if (response.status === 201) {
        showMessage("تم إرسال التبرع بنجاح", "success");
        setDonationData({ email: "", amount: "" });
      } else {
        showMessage("حدث خطأ أثناء إرسال التبرع", "error");
      }
    } catch (error) {
      showMessage("حدث خطأ في الاتصال بالخادم", "error");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 5000);
  };

  return (
    <div className="donation-container">
      <br></br>
      <br></br>
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
              <li>إيصال تبرع رسمي يصلك عبر البريد</li>
            </ul>

            <div className="contact-box">
              <h3>للاستفسارات:</h3>
              <p>هاتف: 0998 766 972</p>
              <p>بريد إلكتروني: ALAZEM@gmail.com</p>
            </div>
          </div>

          <div className="donation-form">
            <form onSubmit={handleSubmit}>
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
              <br></br>

              <button
                type="submit"
                className="submit-btn"
                disabled={!donationData.email || !donationData.amount}
              >
                {loading ? "جاري الإرسال..." : "تأكيد التبرع"}
              </button>
            </form>

            {message.text && (
              <div
                style={{
                  color: message.type === "error" ? "red" : "green",
                  marginTop: "15px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                // className={` alert-${message.type === 'error' ? 'danger' : 'success'}`}
              >
                {message.text}
              </div>
            )}
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
