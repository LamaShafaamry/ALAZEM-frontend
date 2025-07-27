import React, { useState,useEffect } from 'react';
import "./DonationHistory.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyDonation } from '../store/myDonationSlice';
import { useNavigate } from 'react-router-dom';

const DonationHistory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [selectedDonation, setSelectedDonation] = useState(null);

   const { data: myDonation, loading, error } = useSelector((state) => state.myDonation);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    dispatch(fetchMyDonation());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center mt-10 text-lg">جارٍ تحميل الملف الشخصي...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }
console.log(myDonation);

  if (!myDonation) {
    return null;
  }



  return (
    <div className="patient-page" >
      <div className="patient-header text-center mb-6">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800">
        التبرعات
      </h2>
    </div>

      <br />

      <div className="appointments-list">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">تاريخ التبرع</th>
              <th className="text-center">المبلغ</th>
            </tr>
          </thead>
          <tbody>
            {myDonation.map((myDonation, index) => (
              <tr key={index} onClick={() => setSelectedDonation(myDonation)}>
                <td className="text-center" dir="ltr">{myDonation.creation_date}</td>
                <td className="text-center">{myDonation.amount} ل.س</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
</div>
       
  );
};



export default DonationHistory;
