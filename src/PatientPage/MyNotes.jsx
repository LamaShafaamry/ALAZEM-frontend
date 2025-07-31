import React, { useState, useEffect } from "react";
import "./DonationHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyNotes } from "../store/myNoteSlice";
import { useNavigate } from "react-router-dom";

const MyNotes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(null);

  const {
    data: myNotes,
    loading,
    error,
  } = useSelector((state) => state.myNotes);

  useEffect(() => {
    dispatch(fetchMyNotes());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg">
        جارٍ تحميل الملف الشخصي...
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  if (!myNotes) {
    return null;
  }

  return (
    <div className="patient-page">
        <br></br>
        <br></br>
      <div className="patient-header text-center mb-6">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800">
          ملاحظاتي
        </h2>
      </div>

      <br />

      <div className="appointments-list">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">المتطوع</th>
              <th className="text-center">تاريخ الملاحظة</th>
              <th className="text-center">الملاحظة</th>
            </tr>
          </thead>
          <tbody>
            {myNotes.map((myNote, index) => (
              <tr key={index} onClick={() => setSelectedNote(myNote)}>
                <td className="text-center" dir="ltr">
                  {myNote.id}
                </td>
                <td className="text-center" dir="ltr">
                  {myNote.volunteer_name}
                </td>
                <td className="text-center" dir="ltr">
                  {myNote.creation_date}
                </td>
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
                  {myNote.content}
                </div>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyNotes;
