// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./SignInPage.css";
// // import { Link } from "react-router-dom";
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { login } from "../store/authSlice";
// // import Navbar from "../PaseLayOut/NavBar";

// // function VerifyAccount() {
// // }
// // export default VerifyAccount;

// import React, { useState } from 'react';
// import { verifyAccount } from '../api/api';
// import './VerifyAccount.css';

// const VerificationPage = () => {
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (index, value) => {
//     if (/^\d*$/.test(value) && value.length <= 1) {
//       const newCode = [...code];
//       newCode[index] = value;
//       setCode(newCode);

//       if (value && index < 5) {
//         document.getElementById(`code-input-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     const verificationCode = code.join('');

//     if (verificationCode.length !== 6) {
//       setError('الرجاء إدخال رمز التحقق المكون من 6 أرقام');
//       setIsLoading(false);
//       return;
//     }

//     setTimeout(() => {
//       setIsLoading(false);
//       console.log('تم إرسال الرمز:', verificationCode);
//       alert('تم التحقق بنجاح!');
//     }, 1500);
//   };

//   return (
//     <div>
//         <br>
//         </br>
//          <br>
//         </br>
//     <div className="verification-container">

//       <div className="verification-box">
//         <div className="verification-header">
//             <br></br>
//           <h2>تأكيد الحساب</h2>
//           <p>لقد أرسلنا رمز التحقق إلى بريدك الإلكتروني</p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="code-inputs-container">
//             <div className="code-inputs">
//               {code.map((digit, index) => (
//                 <input
//                   key={index}
//                   id={`code-input-${index}`}
//                   type="text"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleInputChange(index, e.target.value)}
//                   onFocus={(e) => e.target.select()}
//                   className="code-input"
//                   autoFocus={index === 0}
//                 />
//               ))}
//             </div>
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button
//             type="submit"
//             className="verify-button"
//             disabled={isLoading}
//           >
//             {isLoading ? 'جاري التحقق...' : 'موافق'}
//           </button>
//         </form>

//         <div className="resend-section">
//           <p>لم تستلم الرمز؟</p>
//           <button className="resend-button">إعادة إرسال الرمز</button>
//         </div>
//       </div>
//     </div>
//     </div>

//   );
// };

// export default VerificationPage;

import React, { useState } from "react";
import { verifyAccount } from "../api/api";
import "./VerifyAccount.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const location = useLocation();

  const email = location.state?.email || "";

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next
      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    console.log(email);
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    const verificationCode = code.join("");

    if (verificationCode.length !== 6) {
      setError("الرجاء إدخال رمز التحقق المكون من 6 أرقام");
      setIsLoading(false);
      return;
    }

    try {
      const response = await verifyAccount({
        email, // must be passed in props or context
        varification_code: verificationCode,
      });

      setSuccessMessage(
        "تم التحقق بنجاح! طلبك قيد المراجعة من قِبل الإدارة، وسيتم إشعارك عند اتخاذ القرار."
      );
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      const msg = err.response?.data?.detail || "حدث خطأ أثناء التحقق";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <div className="verification-container">
        <div className="verification-box">
          <div className="verification-header">
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
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}

            <button
              type="submit"
              className="verify-button"
              disabled={isLoading}
            >
              {isLoading ? "جاري التحقق..." : "موافق"}
            </button>
          </form>

          <div className="resend-section">
            <p>لم تستلم الرمز؟</p>
            <button className="resend-button">إعادة إرسال الرمز</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
