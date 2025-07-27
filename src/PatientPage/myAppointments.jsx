import React, { useState,useEffect } from 'react';
import "./DonationHistory.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyAppointments } from '../store/myAppointmentSlice';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../components/ConfirmModal';
import { Button, Popconfirm } from 'antd';

const MyAppointments = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

   const { data: myAppointments, loading, error } = useSelector((state) => state.myAppointments);
  const [appointment, setAppointment] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);


  const handleDelete = () => {
    console.log("Confirmed!");
    setShowModal(false);
    // put your delete logic here
  };

  useEffect(() => {
    dispatch(fetchMyAppointments());
  }, [dispatch]);

  if (loading) {
    return <div className="text-center mt-10 text-lg">جارٍ تحميل المواعيد...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }
console.log(myAppointments);

  if (!myAppointments) {
    return null;
  }



  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };


  return (
    <div className="patient-page relative"> {/* add relative if you want but usually not needed */}

      <div className="patient-header text-center mb-6">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800">
          المواعيد
        </h2>
      </div>
<br></br>

    
      <div className="appointments-list">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">اسم الطبيب</th>
              <th className="text-center">الاختصاص</th>
              <th className="text-center">التاريخ</th>
              <th className="text-center">الاجراء</th>
              

            </tr>
          </thead>
          <tbody>
            {myAppointments.map((appointment, index) => (
              <tr key={index} onClick={() => setSelectedAppointment(appointment)}>
                <td className="text-center">{appointment.doctor_first_name} {appointment.doctor_last_name}</td>
                <td className="text-center">{appointment.speciality}</td>
                <td className="text-center" dir="ltr">{appointment.appointment_date}</td>
                <td className="text-center">
                    {appointment.is_completed == false ?
                    (
                    <>
                        <button
                              className="btn btn-danger btn-sm reject-btn"
                              onClick={() =>
                                handleCancelAppointment(appointment.id)
                              }
                            >
                              إلغاء الطلب
                            </button>               
                    </>
                  ) :
                    (
                    <>
                    <button
                              className="btn btn-info btn-sm"
                              onClick={() => {
                                setSelectedAppointment(appointment);
                                window.$("#reportModal").modal("show");
                              }}
                            >
                              عرض التقرير
                            </button>
                    </> 
                )
            }
                  
                  
                </td>
              </tr>
            ))}
          </tbody>
          <Popconfirm
      title="Title"
      description="Open Popconfirm with async logic"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    ></Popconfirm>
        </table>
      </div>
    </div>
  );
};



export default MyAppointments;
