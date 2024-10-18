import React from "react";

export default function UserForm({ newUser, setNewUser, addUser }) {
  return (
    <div className="mb-4 flex gap-2">
      <input
        className="border rounded px-2 py-1 flex-grow"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        className="border rounded px-2 py-1 flex-grow"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        onClick={addUser}
      >
        Add User
      </button>
    </div>
  );
}
