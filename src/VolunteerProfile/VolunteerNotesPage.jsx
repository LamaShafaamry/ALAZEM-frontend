import React, { useState, useEffect } from "react";
import "../PatientPage/DonationHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolunteerNotes } from "../store/getVolunteerNotesSlice";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import { Button, Popconfirm } from "antd";
import { Modal, Input, message } from "antd"; // make sure you have antd installed
import { fetchNotes } from "../store/addNoteSlice";
import { addNotes , updateNotes} from "../api/api";
// import { fetchUpdateNotes } from "../store/updateNotesSlicer";

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

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState("");

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { TextArea } = Input;

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [editedNoteContent, setEditedNoteContent] = useState("");


  
  const handleDelete = () => {
    console.log("Confirmed!");
    setShowModal(false);
    // put your delete logic here
  };

  const showAddNoteModal = () => {
    setNewNoteContent("");
    setAddModalVisible(true);
  };

  // const handleAddNote = () => {
  //   if (!newNoteContent.trim()) {
  //     message.warning("يرجى إدخال الملاحظة");
  //     return;
  //   }

  const handleAddNote = async () => {
    if (!newNoteContent.trim()) {
      message.warning("يرجى إدخال الملاحظة");
      return;
    }

    try {
      // إرسال الملاحظة إلى الخادم
      await addNotes({ content: newNoteContent });

      // عرض رسالة نجاح
      message.success("تمت إضافة الملاحظة بنجاح");

      // إغلاق النافذة
      setAddModalVisible(false);

      // إعادة تحميل الملاحظات بدون مغادرة الصفحة
      dispatch(fetchVolunteerNotes());

      // مسح الحقل
      setNewNoteContent("");
    } catch (error) {
      console.error(error);
      message.error("حدث خطأ أثناء إضافة الملاحظة");
    }

    // Replace this with dispatch/post to API
    // const newNote = {
    //   id: notes.length + 1,
    //   creation_date: new Date().toISOString().split("T")[0],
    //   content: newNoteContent,
    // };

    // Temporary append to notes (until API is hooked)
    // notes.unshift(newNote);

    setAddModalVisible(false);
    message.success("تمت إضافة الملاحظة بنجاح");
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

  const handleUpdateNote = async () => {
  if (!editedNoteContent.trim()) {
    message.warning("يرجى كتابة الملاحظة");
    return;
  }

  try {
    await updateNotes(currentNote.id, { content: editedNoteContent });
    message.success("تم تعديل الملاحظة بنجاح");

    setEditModalVisible(false);
    dispatch(fetchVolunteerNotes());
  } catch (error) {
    console.error(error);
    message.error("فشل تعديل الملاحظة");
  }
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "20px",
          }}
        >
          <Button
            type="primary"
            onClick={showAddNoteModal}
            style={{
              backgroundColor: "orange",
              borderColor: "orange",
              width: "30%",
              fontWeight: "bold",
            }}
          >
            + إضافة ملاحظة
          </Button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">رقم الملاحظة </th>
              <th className="text-center">تاريخ الملاحظة</th>
              <th className="text-center">الملاحظة</th>
              <th className="text-center">تعديل</th>
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
                    <Button
                      size="small"
                      style={{ backgroundColor: "orange", color: "white"}}
                      onClick={() => {
                        setCurrentNote(note);
                        setEditedNoteContent(note.content);
                        setEditModalVisible(true);
                      }}
                    >
                      تعديل
                    </Button>
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
                إضافة ملاحظة جديدة
              </div>
            }
            visible={addModalVisible}
            onCancel={() => setAddModalVisible(false)}
            footer={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={() => setAddModalVisible(false)}
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
                  onClick={handleAddNote}
                  style={{
                    backgroundColor: "orange",
                    borderColor: "orange",
                    color: "white",
                    width: "100px",
                  }}
                >
                  إضافة
                </Button>
              </div>
            }
          >
            <TextArea
              rows={4}
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              placeholder="اكتب الملاحظة هنا..."
            />
          </Modal>

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
                تعديل الملاحظة
              </div>
            }
            open={editModalVisible}
            onCancel={() => setEditModalVisible(false)}
            footer={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={() => setEditModalVisible(false)}
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
                  onClick={handleUpdateNote}
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
            <TextArea
              rows={4}
              value={editedNoteContent}
              onChange={(e) => setEditedNoteContent(e.target.value)}
              placeholder="قم بتعديل الملاحظة هنا..."
            />
          </Modal>
        </table>
      </div>
    </div>
  );
};

export default NotesPage;
