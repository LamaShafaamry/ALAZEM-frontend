import React, { useState } from 'react';
import "./ServicesPage.css";

const ServicesPage = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "استشارة طبية عن بعد",
      category: "الرعاية الصحية",
      provider: "مستشفى المدينة",
      status: "متاحة",
      price: "مجانية",
      details: "استشارة طبية مع أخصائي عبر الهاتف أو الفيديو"
    },
    {
      id: 2,
      name: "نقل المرضى",
      category: "الخدمات اللوجستية",
      provider: "شركة الإسعاف",
      status: "غير متاحة",
      price: "200 ر.س",
      details: "خدمة نقل المرضى للمستشفيات والعيادات"
    },
    {
      id: 3,
      name: "تمريض منزلي",
      category: "الرعاية الصحية",
      provider: "مركز العناية",
      status: "متاحة",
      price: "150 ر.س/ساعة",
      details: "ممرض متخصص للرعاية المنزلية للمرضى"
    }
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    provider: '',
    status: 'متاحة',
    price: '',
    details: ''
  });

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newService = {
      id: services.length + 1,
      ...formData
    };
    setServices([...services, newService]);
    setFormData({
      name: '',
      category: '',
      provider: '',
      status: 'متاحة',
      price: '',
      details: ''
    });
    setShowForm(false);
  };

  return (
    <div className="services-section">
      <div className="manager-header">
        <h2>
          <i className="fas fa-concierge-bell"></i>
          إدارة الخدمات المقدمة
        </h2>

      </div>

      {showForm && (
        <div className="service-form">
          <h3>إضافة خدمة جديدة</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>اسم الخدمة:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>التصنيف:</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>مقدم الخدمة:</label>
                <input
                  type="text"
                  name="provider"
                  value={formData.provider}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>الحالة:</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="متاحة">متاحة</option>
                  <option value="غير متاحة">غير متاحة</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>السعر:</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>تفاصيل الخدمة:</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn btn-success">حفظ</button>
            </div>
          </form>
        </div>
      )}

      <div className="services-table">
        <table>
          <thead>
            <tr>
              <th>اسم الخدمة</th>
              <th>التصنيف</th>
              <th>مقدم الخدمة</th>
              <th>السعر</th>
              <th>الحالة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.category}</td>
                <td>{service.provider}</td>
                <td>{service.price}</td>
                <td>
                  <span className={`status-badge ${
                    service.status === "متاحة" ? "approved" : "rejected"
                  }`}>
                    {service.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn btn-info btn-sm"
                      onClick={() => handleViewDetails(service)}
                    >
                      التفاصيل
                    </button>
                    <button 
                      className="btn btn-danger btn-sm reject-btn"
                      onClick={() => setServices(services.filter(s => s.id !== service.id))}
                    >
                      حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedService && (
        <div className="service-details-modal">
          <div className="modal-content">
            <h3>تفاصيل الخدمة</h3>
            <div className="details-section">
              <h4>المعلومات الأساسية</h4>
              <p><strong>اسم الخدمة:</strong> {selectedService.name}</p>
              <p><strong>التصنيف:</strong> {selectedService.category}</p>
              <p><strong>مقدم الخدمة:</strong> {selectedService.provider}</p>
              <p><strong>السعر:</strong> {selectedService.price}</p>
              <p><strong>الحالة:</strong> 
                <span className={`status-badge ${
                  selectedService.status === "متاحة" ? "approved" : "rejected"
                }`}>
                  {selectedService.status}
                </span>
              </p>
            </div>
            
            <div className="details-section">
              <h4>تفاصيل الخدمة</h4>
              <p>{selectedService.details}</p>
            </div>

            <div className="modal-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedService(null)}
              >
                إغلاق
              </button>
              <button className="btn btn-primary">
                طلب الخدمة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;