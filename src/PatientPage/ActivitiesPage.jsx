import React, { useState } from 'react';
import "./ActivitiesPage.css";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "ورشة التوعية الصحية",
      type: "توعوي",
      date: "2023-06-15",
      time: "10:00 صباحاً",
      location: "قاعة المؤتمرات - المستشفى الرئيسي",
      status: "منتهي",
      participants: 35,
      description: "ورشة عمل حول التغذية الصحية لمرضى السكري"
    },
    {
      id: 2,
      title: "حملة التبرع بالدم",
      type: "تطوعي",
      date: "2023-07-20",
      time: "9:00 صباحاً - 3:00 مساءً",
      location: "بنك الدم المركزي",
      status: "قيد التنفيذ",
      participants: 12,
      description: "حملة تبرع بالدم لدعم مخزون بنك الدم"
    },
    {
      id: 3,
      title: "جلسة دعم نفسي",
      type: "علاجي",
      date: "2023-08-05",
      time: "4:00 مساءً",
      location: "عيادة الصحة النفسية",
      status: "قادم",
      participants: 8,
      description: "جلسة دعم جماعية لمرضى السرطان وأسرهم"
    }
  ]);

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredActivities = activities.filter(activity => {
    if (activeTab === "all") return true;
    if (activeTab === "completed") return activity.status === "منتهي";
    if (activeTab === "upcoming") return activity.status === "قادم";
    if (activeTab === "ongoing") return activity.status === "قيد التنفيذ";
    return true;
  });

  return (
    <div className="patient-page">
      <div className="patient-header">
        <h2>
          <i className="fas fa-calendar-alt"></i>
          النشاطات والفعاليات
        </h2>
      </div>

      <div className="patient-tabs">
        <button 
          className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          الكل
        </button>
        <button 
          className={`tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
          onClick={() => setActiveTab("upcoming")}
        >
          قادمة
        </button>
        <button 
          className={`tab-btn ${activeTab === "ongoing" ? "active" : ""}`}
          onClick={() => setActiveTab("ongoing")}
        >
          جارية
        </button>
        <button 
          className={`tab-btn ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => setActiveTab("completed")}
        >
          منتهية
        </button>
      </div>

      <div className="appointments-list">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">اسم النشاط</th>
              <th className="text-center">النوع</th>
              <th className="text-center">التاريخ والوقت</th>
              <th className="text-center">المكان</th>
              <th className="text-center">الحالة</th>
              <th className="text-center">المشاركون</th>
              <th className="text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredActivities.map(activity => (
              <tr key={activity.id}>
                <td className="text-center">{activity.title}</td>
                <td className="text-center">
                  <span className={`type-badge ${
                    activity.type === "توعوي" ? "awareness" :
                    activity.type === "تطوعي" ? "voluntary" : "therapeutic"
                  }`}>
                    {activity.type}
                  </span>
                </td>
                <td className="text-center">
                  <div>{activity.date}</div>
                  <div className="text-muted">{activity.time}</div>
                </td>
                <td className="text-center">{activity.location}</td>
                <td className="text-center">
                  <span className={`status-badge ${
                    activity.status === "منتهي" ? "completed" :
                    activity.status === "قيد التنفيذ" ? "ongoing" : "upcoming"
                  }`}>
                    {activity.status}
                  </span>
                </td>
                <td className="text-center">{activity.participants} مشارك</td>
                <td className="text-center">
                  <div className="action-buttons">
                    <button 
                      className="btn btn-info btn-sm"
                      onClick={() => setSelectedActivity(activity)}
                    >
                      التفاصيل
                    </button>
                    {activity.status === "قادم" && (
                      <div></div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedActivity && (
        <div className="activity-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{selectedActivity.title}</h3>
              <button onClick={() => setSelectedActivity(null)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="activity-details">
                <div className="detail-row">
                  <span className="detail-label">نوع النشاط:</span>
                  <span className={`type-badge ${
                    selectedActivity.type === "توعوي" ? "awareness" :
                    selectedActivity.type === "تطوعي" ? "voluntary" : "therapeutic"
                  }`}>
                    {selectedActivity.type}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">التاريخ والوقت:</span>
                  <span>{selectedActivity.date} - {selectedActivity.time}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">المكان:</span>
                  <span>{selectedActivity.location}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">الحالة:</span>
                  <span className={`status-badge ${
                    selectedActivity.status === "منتهي" ? "completed" :
                    selectedActivity.status === "قيد التنفيذ" ? "ongoing" : "upcoming"
                  }`}>
                    {selectedActivity.status}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">عدد المشاركين:</span>
                  <span>{selectedActivity.participants} مشارك</span>
                </div>
                <div className="detail-row full-width">
                  <span className="detail-label">وصف النشاط:</span>
                  <p>{selectedActivity.description}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {selectedActivity.status === "قادم" && (
                <button className="btn btn-primary">
                  <i className="fas fa-user-plus"></i> تسجيل مشاركة
                </button>
              )}
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedActivity(null)}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivitiesPage;