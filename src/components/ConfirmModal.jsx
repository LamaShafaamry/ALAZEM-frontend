// ConfirmModal.js
const ConfirmModal = ({ show, message, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h5 className="text-lg font-semibold">تأكيد</h5>
          <button onClick={onCancel} className="text-xl font-bold">&times;</button>
        </div>
        <p className="text-center text-gray-800 mb-6">{message}</p>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
            onClick={onCancel}
          >
            إلغاء
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            onClick={onConfirm}
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
