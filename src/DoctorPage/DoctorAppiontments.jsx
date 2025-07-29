import React, { useState, useEffect } from "react";
import "../PatientPage/DonationHistory";
import { useDispatch, useSelector } from "react-redux";

import { fetchDoctorAppointments } from "../store/doctorAppointmentsSlice";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import { Button, Popconfirm, Modal, Input, message } from "antd";
import { addMedicalRepoer , changeAppointmentStatus} from "../api/api";
const DoctorAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: doctorAppointments,
    loading,
    error,
  } = useSelector((state) => state.doctorAppointments);

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

  const openApproveModal = (id) => {
    setSelectedAppointmentId(id);
    setShowApproveModal(true);
  };

  const openRejectModal = (id) => {
    setSelectedAppointmentId(id);
    setShowRejectModal(true);
  };

  const confirmApprove = () => {
    handleApproveAppointment(selectedAppointmentId);
    setShowApproveModal(false);

  };

  const confirmReject = () => {
    handleCancelAppointment(selectedAppointmentId);
    setShowRejectModal(false);
  };

  const statusMap = {
    APP: { label: "تمت الموافقة", bg: "bg-green-100 text-green-800" },
    REJ: { label: "مرفوض", bg: "bg-red-100 text-red-800" },
    PEN: { label: "قيد الانتظار", bg: "bg-yellow-100 text-yellow-800" },
    COM: { label: "مكتمل", bg: "bg-blue-100 text-blue-800" },
    CAN: { label: "تم إالغاءه", bg: "bg-blue-100 text-blue-800" },

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

  const handleAddMedicalReport = async () => {
    if (!medicalReport.trim()) {
      message.warning("يرجى كتابة التقرير الطبي");
      return;
    }

    try {
      await addMedicalRepoer(selectedAppointment.id, {
        medical_report: medicalReport,
      });

      message.success("تم حفظ التقرير الطبي بنجاح");

      // Close modal
      setModal2Open(false);

      // Open view modal directly with updated report
          dispatch(fetchDoctorAppointments());

    } catch (error) {
      message.error("حدث خطأ أثناء حفظ التقرير الطبي");
      console.error("Save Error:", error);
    }
  };


  const handleApproveAppointment = async (id) => {
  try {
    await changeAppointmentStatus(id, { action: "approve" });
    setShowApproveModal(false);
     dispatch(fetchDoctorAppointments()); // refresh data
  } catch (error) {
    console.error("Error approving appointment:", error);
  }
};

const handleCancelAppointment = async (id) => {
  try {
    await changeAppointmentStatus(id, { action: "reject" });
    setShowRejectModal(false);
     dispatch(fetchDoctorAppointments()); // refresh data
  } catch (error) {
    console.error("Error rejecting appointment:", error);
  }
};


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
            <option value="APP">تمت الموافقة</option>
            <option value="REJ">مرفوض</option>
            <option value="PEN">قيد الانتظار</option>
            <option value="COM">مكتمل</option>
            <option value="CAN">تم إالغاءه</option>

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
                          backgroundColor: "white",
                          borderColor: "#fbbf65ff",
                          color: "#fbbf65ff",
                          width: "70%",
                          fontWeight: "bold",
                        }}
                        type="primary"
                        onClick={() => setModal2Open(true)}
                      >
                        إضافة تقرير طبي
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
                  color: "black",
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
                  onClick={handleAddMedicalReport}
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
                  color: "black",
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

          <Modal
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
              هل أنت متأكد من أنك تريد قبول الموعد؟
            </p>
          </Modal>

          <Modal
            title={
              <div
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                تأكيد رفض الموعد
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
              هل أنت متأكد من أنك تريد رفض الموعد؟
            </p>
          </Modal>
        </table>
      </div>
    </div>
  );
};

export default DoctorAppointments;
