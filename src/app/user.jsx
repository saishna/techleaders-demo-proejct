import { useState } from "react";
import UserList from "../components/user-list";
import EditUserModal from "../components/edit-user";
import UserForm from "../components/user-form";

const User = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
      setNewUser({ name: "", email: "" });
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const startEditing = (user) => {
    setEditingUser({ ...user });
    setIsDialogOpen(true);
  };

  const saveEdit = (editedUser) => {
    setUsers(
      users.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
    setEditingUser(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <UserForm newUser={newUser} setNewUser={setNewUser} addUser={addUser} />
      <UserList users={users} onEdit={startEditing} onDelete={deleteUser} />

      {isDialogOpen && (
        <EditUserModal
          user={editingUser}
          onSave={saveEdit}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default User;
