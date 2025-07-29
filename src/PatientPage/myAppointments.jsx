// import React, { useState, useEffect } from "react";
// import "./DonationHistory.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMyAppointments } from "../store/myAppointmentSlice";
// import { useNavigate } from "react-router-dom";
// import ConfirmModal from "../components/ConfirmModal";
// import { Button, Popconfirm, Modal, Input } from "antd";

// const MyAppointments = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const {
//     data: myAppointments,
//     loading,
//     error,
//   } = useSelector((state) => state.myAppointments);
//   // const [appointment, setAppointment] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);

//   const [isViewOnly, setIsViewOnly] = useState(false); // Add this
//   const [viewReportModalOpen, setViewReportModalOpen] = useState(false);

//   const [showApproveModal, setShowApproveModal] = useState(false);
//   const [showRejectModal, setShowRejectModal] = useState(false);
//   const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

//   const [modal2Open, setModal2Open] = useState(false);
//   const [appointment, setAppointment] = useState([]);

//   const [selectedStatus, setSelectedStatus] = useState("");

//   const handleDelete = () => {
//     console.log("Confirmed!");
//     setShowModal(false);
//     // put your delete logic here
//   };

//   useEffect(() => {
//     dispatch(fetchMyAppointments());
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <div className="text-center mt-10 text-lg">جارٍ تحميل المواعيد...</div>
//     );
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-600">{error}</div>;
//   }
//   console.log(myAppointments);

//   if (!myAppointments) {
//     return null;
//   }

//   const showPopconfirm = () => {
//     setOpen(true);
//   };

//   const handleOk = () => {
//     setConfirmLoading(true);

//     setTimeout(() => {
//       setOpen(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleCancel = () => {
//     console.log("Clicked cancel button");
//     setOpen(false);
//   };

//   const openApproveModal = (id) => {
//     setSelectedAppointmentId(id);
//     setShowApproveModal(true);
//   };

//   const openRejectModal = (id) => {
//     setSelectedAppointmentId(id);
//     setShowRejectModal(true);
//   };

//   const confirmApprove = () => {
//     handleApproveAppointment(selectedAppointmentId);
//     setShowApproveModal(false);
//   };

//   const confirmReject = () => {
//     handleCancelAppointment(selectedAppointmentId);
//     setShowRejectModal(false);
//   };

//   return (
//     <div className="patient-page relative">
//       {" "}
//       {/* add relative if you want but usually not needed */}
//       <div className="patient-header text-center mb-6">
//         <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800">
//           المواعيد
//         </h2>
//       </div>
//       <br></br>
//       <div className="appointments-list">
//         <table className="table">
//           <thead>
//             <tr>
//               <th className="text-center">اسم الطبيب</th>
//               <th className="text-center">الاختصاص</th>
//               <th className="text-center">التاريخ</th>
//               <th className="text-center">حالة الموعد</th>
//               <th className="text-center">الاجراء</th>
//             </tr>
//           </thead>
//           <tbody>
//             {myAppointments.map((appointment, index) => (
//               <tr
//                 key={index}
//                 onClick={() => setSelectedAppointment(appointment)}
//               >
//                 <td className="text-center">
//                   {appointment.doctor_first_name} {appointment.doctor_last_name}
//                 </td>
//                 <td className="text-center">{appointment.speciality}</td>
//                 <td className="text-center" dir="ltr">
//                   {appointment.appointment_date}
//                 </td>
//                 <td className="text-center">
//                   {/* {appointment.is_completed == false ?
//                     (
//                     <>
//                         <button
//                               className="btn btn-danger btn-sm reject-btn"
//                               onClick={() =>
//                                 handleCancelAppointment(appointment.id)
//                               }
//                             >
//                               إلغاء الطلب
//                             </button>
//                     </>
//                   ) :
//                     (
//                     <>
//                     <button
//                               className="btn btn-info btn-sm"
//                               onClick={() => {
//                                 setSelectedAppointment(appointment);
//                                 window.$("#reportModal").modal("show");
//                               }}
//                             >
//                               عرض التقرير
//                             </button>
//                     </>
//                 )
//             }
//                    */}
//                   {appointment.is_completed === true ? (
//                     <Button
//                       style={{
//                         backgroundColor: "#fbbf65ff",
//                         borderColor: "#fbbf65ff",
//                         color: "white",
//                         width: "70%",
//                         fontWeight: "bold",
//                       }}
//                       type="primary"
//                       onClick={() => {
//                         setSelectedAppointment(appointment);
//                         setMedicalReport(appointment.report || ""); // load existing report
//                         setViewReportModalOpen(true);
//                       }}
//                     >
//                       عرض تقرير طبي
//                     </Button>
//                   ) : (
//                     <></>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           <Popconfirm
//             title="Title"
//             description="Open Popconfirm with async logic"
//             open={open}
//             onConfirm={handleOk}
//             okButtonProps={{ loading: confirmLoading }}
//             onCancel={handleCancel}
//           ></Popconfirm>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;

import React, { useState, useEffect } from "react";
import "./DonationHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyAppointments } from "../store/myAppointmentSlice";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import { Button, Popconfirm, Modal, Input } from "antd";
import {cancelMyAppointment} from "../api/api"
const MyAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: myAppointments,
    loading,
    error,
  } = useSelector((state) => state.myAppointments);

  const [isViewOnly, setIsViewOnly] = useState(false); // Add this
  const [addReportModalOpen, setAddReportModalOpen] = useState(false);
  const [viewReportModalOpen, setViewReportModalOpen] = useState(false);

  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const [medicalReport, setMedicalReport] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
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
    dispatch(fetchMyAppointments());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">جارٍ تحميل المواعيد...</div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }
  console.log(myAppointments);

  if (!myAppointments) {
    return null;
  }

  const openApproveModal = (id) => {
    setSelectedAppointmentId(id);
    setShowApproveModal(true);
  };

  const openRejectModal = (id) => {
    setSelectedAppointmentId(id);
    setShowRejectModal(true);
  };



  const confirmReject = () => {
    handleCancelMyAppointment(selectedAppointmentId);
    setShowRejectModal(false);
  };

const handleCancelMyAppointment = async (id) => {
  try {
    await cancelMyAppointment(id);
    setShowRejectModal(false);
     dispatch(fetchMyAppointments()); // refresh data
  } catch (error) {
    console.error("Error rejecting appointment:", error);
  }
};


  const statusMap = {
    APP: { label: "معتمد", bg: "bg-green-100 text-green-800" },
    REJ: { label: "مرفوض", bg: "bg-red-100 text-red-800" },
    PEN: { label: "قيد الانتظار", bg: "bg-yellow-100 text-yellow-800" },
    COM: { label: "مكتمل", bg: "bg-blue-100 text-blue-800" },
    CAN: { label: "تم إالغاءه", bg: "bg-blue-100 text-blue-800" },

  };

  const filteredAppointments =
    selectedStatus === "APP"
      ? myAppointments.filter(
          (appointment) =>
            appointment.is_completed === false &&
            appointment.appointment_status === "APP"
        )
      : selectedStatus === "COM"
      ? myAppointments.filter(
          (appointment) =>
            appointment.is_completed === true &&
            appointment.appointment_status === "APP"
        )
      : selectedStatus
      ? myAppointments.filter(
          (appointment) => appointment.appointment_status === selectedStatus
        )
      : myAppointments;




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
            className="form-select appointment-select-filter rounded"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">عرض الكل</option>
            <option value="APP">معتمد</option>
            <option value="COM">مكتمل</option>
            <option value="CAN">تم إالغاءه</option>

          </select>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">رقم الموعد</th>
              <th className="text-center">اسم الطبيب</th>
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
                    {appointment.doctor_first_name}{" "}
                    {appointment.doctor_last_name}
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
                            onClick={() => openRejectModal(appointment.id)}
                          >
                            إلغاء الطلب
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => openApproveModal(appointment.id)}
                          >
                            قبول
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    {appointment.is_completed === false &&
                    appointment.appointment_status === "APP" ? (
                      <Button
                        style={{
                          backgroundColor: "#d84f36ff",
                          borderColor: "red",
                          color: "white",
                          width: "70%",
                          fontWeight: "bold",
                        }}
                        type="primary"
                        onClick={() => openRejectModal(appointment.id)}
                      >
                        الاعتذار عن الموعد
                      </Button>
                    ) : (
                      <></>
                    )}
                    {(appointment.is_completed === false &&
                    appointment.appointment_status === "REJ" ) || (appointment.is_completed === false &&
                    appointment.appointment_status === "CAN")? (
                      <div style={{ color: "gray" }}>
                        لا يمكنك اتخاذ إجراءات
                      </div>
                    ) : (
                      <></>
                    )}
                    {appointment.is_completed === true ? (
                      <Button
                        style={{
                          backgroundColor: "white",
                          borderColor: "#fbbf65ff",
                          color: "#fbbf65ff",
                          width: "70%",
                          fontWeight: "bold",
                        }}
                        type="primary"
                        onClick={() => {
                          setSelectedAppointment(appointment);
                          setMedicalReport(appointment.medical_report || ""); // load existing report
                          setViewReportModalOpen(true);
                        }}
                      >
                        عرض تقرير طبي
                      </Button>
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

          <Modal
            title={
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "bold",
                  color: "#fbbf65ff",
                }}
              >
                إضافة تقرير طبي
              </div>
            }
            centered
            open={modal2Open}
            onCancel={() => setModal2Open(false)}
            footer={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={() => setModal2Open(false)}
                  style={{
                    backgroundColor: "white",
                    borderColor: "orange",
                    color: "orange",
                    width: "100px",
                  }}
                >
                  إلغاء
                </Button>
                <Button
                  onClick={() => {
                    // You can also trigger the withdraw action here if needed
                    setModal2Open(false);
                  }}
                  style={{
                    backgroundColor: "orange",
                    borderColor: "orange",
                    color: "white",
                    width: "100px",
                  }}
                >
                  تأكيد
                </Button>
              </div>
            }
          >
            <br></br>

            <Input.TextArea
              style={{ borderColor: "orange" }}
              rows={4}
              placeholder="اكتب التقرير الطبي هنا..."
              value={medicalReport}
              onChange={(e) => setMedicalReport(e.target.value)}
            />
          </Modal>

          <Modal
            title={
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fbbf65ff",
                }}
              >
                التقرير الطبي
              </div>
            }
            centered
            open={viewReportModalOpen}
            onCancel={() => setViewReportModalOpen(false)}
            footer={null}
          >
            <Input.TextArea
              style={{ borderColor: "orange" }}
              rows={4}
              value={medicalReport}
              readOnly
            />
          </Modal>

          {/* <Modal
            title={
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                تأكيد قبول الموعد
              </div>
            }
            centered
            open={showApproveModal}
            onCancel={() => setShowApproveModal(false)}
            footer={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={() => setShowApproveModal(false)}
                  style={{
                    backgroundColor: "white",
                    borderColor: "orange",
                    color: "orange",
                    width: "100px",
                  }}
                >
                  إلغاء
                </Button>
                <Button
                  onClick={confirmApprove}
                  style={{
                    backgroundColor: "orange",
                    borderColor: "orange",
                    color: "white",
                    width: "100px",
                  }}
                >
                  تأكيد
                </Button>
              </div>
            }
          >
            <br />
            <p style={{ textAlign: "center" }}>
              هل أنت متأكد من أنك تريد الاعتذار الموعد؟
            </p>
          </Modal> */}

          <Modal
            title={
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                تأكيد الاعتذار عن الموعد
              </div>
            }
            centered
            open={showRejectModal}
            onCancel={() => setShowRejectModal(false)}
            footer={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={() => setShowRejectModal(false)}
                  style={{
                    backgroundColor: "white",
                    borderColor: "orange",
                    color: "orange",
                    width: "100px",
                  }}
                >
                  إلغاء
                </Button>
                <Button
                                  onClick={confirmReject}
                                  style={{
                                    backgroundColor: "orange",
                                    borderColor: "orange",
                                    color: "white",
                                    width: "100px",
                                  }}
                                >
                                  تأكيد
                                </Button>
              </div>
            }
          >
            <br />
            <p style={{ textAlign: "center" }}>
              هل أنت متأكد من أنك تريد الاعتذار الموعد؟
            </p>
          </Modal>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
