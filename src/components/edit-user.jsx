import React, { useState } from "react";

const EditUserModal = ({ user, onSave, onClose }) => {
  const [editingUser, setEditingUser] = useState(user);

  const handleSave = () => {
    onSave(editingUser);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            className="border rounded px-2 py-1 w-full"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            className="border rounded px-2 py-1 w-full"
            value={editingUser.email}
            onChange={(e) =>
              setEditingUser({ ...editingUser, email: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded mr-2 hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
