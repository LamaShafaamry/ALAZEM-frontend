import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="success-card">
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4CAF50">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h2>تمت عملية الدفع بنجاح!</h2>
        <div className="success-details">
          <p className="success-message">شكراً لتبرعك الكريم، لقد تم استلام تبرعك بنجاح</p>
          <div className="donation-info">
      
          </div>
        </div>
        <button className="success-button">
          العودة إلى الصفحة الرئيسية
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;