import { useEffect, useState } from "react";
import UserList from "./commponents/Cart/UserList";
import { IUser } from "./types/types";
import axios from "axios";
const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers()
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
 <UserList users = {users}/>
    </div>
  );
};

export default App;
