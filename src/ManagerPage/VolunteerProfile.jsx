import React, { useState } from "react";

const VolunteerProfile = ({ volunteer, onClose }) => {
  const [newNote, setNewNote] = useState("");
  const [patientNotes, setPatientNotes] = useState([]);

  const handleAddNote = () => {
    if (newNote.trim()) {
      setPatientNotes([...patientNotes, {
        id: Date.now(),
        text: newNote,
        date: new Date().toLocaleString(),
        read: false
      }]);
      setNewNote("");
    }
  };

  return (
    <div className="volunteer-profile-modal">
      <div className="profile-header">
        <h3>البروفايل الشخصي للمتطوع</h3>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>

      <div className="profile-content">
        <div className="basic-info">
          <h4>{volunteer.name}</h4>
          <p><strong>البريد الإلكتروني:</strong> {volunteer.email}</p>
          <p><strong>الهاتف:</strong> {volunteer.phone}</p>
          <p><strong>تاريخ الانضمام:</strong> {volunteer.profile.joinDate}</p>
          <p><strong>آخر نشاط:</strong> {volunteer.profile.lastActive}</p>
        </div>

        <div className="patient-section">
          <h4>المريض المكلف</h4>
          <p className="patient-name">{volunteer.assignedPatient || "لا يوجد"}</p>
          
          <div className="notes-section">
            <h5>ملاحظات عن حالة المريض:</h5>
            <div className="notes-list">
              {patientNotes.map(note => (
                <div key={note.id} className={`note-item ${note.read ? 'read' : ''}`}>
                  <p>{note.text}</p>
                  <small>{note.date}</small>
                </div>
              ))}
            </div>
            
            <div className="add-note">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="أضف ملاحظة جديدة عن حالة المريض..."
              />
              <button onClick={handleAddNote}>إضافة ملاحظة</button>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h4>إحصائيات المتطوع</h4>
          <div className="stats-grid">
            <div className="stat-item">
              <span>المهام المكتملة</span>
              <span className="stat-value">{volunteer.profile.tasksCompleted}</span>
            </div>
            <div className="stat-item">
              <span>التقييم</span>
              <span className="stat-value">{volunteer.profile.rating}/5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-footer">
        <button className="btn btn-warning">
          طلب انسحاب المتطوع
        </button>
      </div>
    </div>
  );
};

export default VolunteerProfile;