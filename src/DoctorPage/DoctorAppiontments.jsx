import React, { useState, useEffect } from "react";
import "../PatientPage/DonationHistory";
import { useDispatch, useSelector } from "react-redux";

import { fetchDoctorAppointments } from "../store/doctorAppointmentsSlice";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import { Button, Popconfirm } from "antd";

const DoctorAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: doctorAppointments,
    loading,
    error,
  } = useSelector((state) => state.doctorAppointments);

  const [appointment, setAppointment] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleDelete = () => {
    console.log("Confirmed!");
    setShowModal(false);
    // put your delete logic here
  };

  useEffect(() => {
    dispatch(fetchDoctorAppointments());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">جارٍ تحميل المواعيد...</div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }
  console.log(doctorAppointments);

  if (!doctorAppointments) {
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
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const statusMap = {
    APP: { label: "تمت الموافقة", bg: "bg-green-100 text-green-800" },
    REJ: { label: "مرفوض", bg: "bg-red-100 text-red-800" },
    PEN: { label: "قيد الانتظار", bg: "bg-yellow-100 text-yellow-800" },
    COM: { label: "مكتمل", bg: "bg-blue-100 text-blue-800" },
  };

  const filteredAppointments =
    selectedStatus === "APP"
      ? doctorAppointments.filter(
          (appointment) =>
            appointment.is_completed === false &&
            appointment.appointment_status === "APP"
        )
      : selectedStatus === "COM"
      ? doctorAppointments.filter(
          (appointment) =>
            appointment.is_completed === true &&
            appointment.appointment_status === "APP"
        )
      : selectedStatus
      ? doctorAppointments.filter(
          (appointment) => appointment.appointment_status === selectedStatus
        )
      : doctorAppointments;

  return (
    <div className="patient-page relative">
      {" "}
      {/* add relative if you want but usually not needed */}
      <div className="patient-header text-center mb-6">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800">
          المواعيد
        </h2>
      </div>
      <br></br>
      
      <div className="appointments-list">
        <div className="flex justify-end mb-4">
<label className="appointment-filter">حالة الموعد</label>
        <select
          className="form-select appointment-select-filter border rounded"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">عرض الكل</option>
          <option value="APP">تمت الموافقة</option>
          <option value="REJ">مرفوض</option>
          <option value="PEN">قيد الانتظار</option>
          <option value="COM">مكتمل</option>
        </select>
      </div>
        <table className="table">
          <thead>

            <tr>
              <th className="text-center">الرقم الموعد</th>
              <th className="text-center">اسم المريض</th>
              <th className="text-center">التاريخ والوقت</th>
              <th className="text-center">حالة الموعد</th>
              <th className="text-center">الاجراء</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment, index) => (
                <tr
                  key={index}
                  onClick={() => setSelectedAppointment(appointment)}
                >
                  <td className="text-center" dir="ltr">
                    {appointment.id}
                  </td>
                  <td className="text-center">
                    {appointment.patient_first_name}{" "}
                    {appointment.patient_last_name}
                  </td>
                  <td className="text-center" dir="ltr">
                    {appointment.appointment_date}
                  </td>
                  {appointment.is_completed === false ? (
                    <td
                      className={`text-center p-2 rounded ${
                        statusMap[appointment.appointment_status].bg
                      }`}
                    >
                      {statusMap[appointment.appointment_status].label}
                    </td>
                  ) : (
                    <td
                      className={`text-center p-2 rounded ${"bg-green-100 text-green-800"}`}
                    >
                      مكتمل
                    </td>
                  )}

                  <td className="text-center">
                    {appointment.is_completed === false &&
                    appointment.appointment_status === "PEN" ? (
                      <>
                        <div className="d-flex gap-2 justify-content-center">
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() =>
                              handleCancelAppointment(appointment.id)
                            }
                          >
                            إلغاء الطلب
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() =>
                              handleApproveAppointment(appointment.id)
                            }
                          >
                            قبول
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {appointment.is_completed === true ? (
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          setSelectedAppointment(appointment);
                          window.$("#reportModal").modal("show");
                        }}
                      >
                        عرض التقرير
                      </button>
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  لا يوجد مواعيد لعرضها
                </td>
              </tr>
            )}
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

export default DoctorAppointments;
