import React, { useState, useEffect } from "react";
import "../PatientPage/DonationHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolunteerNotes } from "../store/getVolunteerNotesSlice";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import { Button, Popconfirm } from "antd";

const NotesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: notes,
    loading,
    error,
  } = useSelector((state) => state.volunteernotes);
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
    dispatch(fetchVolunteerNotes());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">جارٍ تحميل الملاحظات...</div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }
  console.log(notes);

  if (!notes) {
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

  return (
    <div className="patient-page relative">
      {" "}
      {/* add relative if you want but usually not needed */}
      <div className="patient-header text-center mb-6">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800">
          ملاحظاتي
        </h2>
      </div>
      <br></br>
      <div className="appointments-list">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">رقم الملاحظة </th>
              <th className="text-center">تاريخ الملاحظة</th>
              <th className="text-center">الملاحظة</th>
            </tr>
          </thead>
          <tbody>
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <tr key={index} onClick={() => setSelectedAppointment(note)}>
                  <td className="text-center">{note.id} </td>
                  <td className="text-center" dir="ltr">
                    {note.creation_date}
                  </td>
                  <td className="text-center" dir="ltr">
  <div
    style={{
      maxWidth: "450px",
      maxHeight: "150px",
      overflow: "auto",
      whiteSpace: "pre-wrap", // allows line breaks in the content
      wordWrap: "break-word", // breaks long words if needed
      margin: "0 auto", // center the content in the cell
      textAlign: "left",
    }}
  >
    {note.content}
  </div>
</td>
                  <td className="text-center">
                    {/* {appointment.is_completed == false ?
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
                   */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  لا يوجد ملاحظات لعرضها
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

export default NotesPage;
