import React, { useState } from 'react';
import './VerificationPage.css';

const VerificationPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    const verificationCode = code.join('');
    
    if (verificationCode.length !== 6) {
      setError('الرجاء إدخال رمز التحقق المكون من 6 أرقام');
      setIsLoading(false);
      return;
    }
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('تم إرسال الرمز:', verificationCode);
      alert('تم التحقق بنجاح!');
    }, 1500);
  };

  return (
    <div className="verification-container">
      <div className="verification-box">
        <div className="verification-header">
            <br></br>
          <h2>تأكيد الحساب</h2>
          <p>لقد أرسلنا رمز التحقق إلى بريدك الإلكتروني</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="code-inputs-container">
            <div className="code-inputs">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`code-input-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onFocus={(e) => e.target.select()}
                  className="code-input"
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button 
            type="submit" 
            className="verify-button"
            disabled={isLoading}
          >
            {isLoading ? 'جاري التحقق...' : 'موافق'}
          </button>
        </form>
        
        <div className="resend-section">
          <p>لم تستلم الرمز؟</p>
          <button className="resend-button">إعادة إرسال الرمز</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;