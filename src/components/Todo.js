import axios from "axios";
import { useEffect, useState } from "react";

const Todo = () => {
  const [newItem, setNewItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddNewItem = () => {
    setTodoList((prev) => {
      return [newItem, ...prev];
    });
    setNewItem("");
  };

  const handleRemoveItem = (index) => {
    console.log("Removing item at index " + index);
    const newArr = todoList.filter((item, idx) => {
      return idx !== index;
    });
    setTodoList(newArr);
  };

  useEffect(() => {
    console.log("Running from useEffect()");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data;
        // for (let i = 0; i < data.length; i++) {
        //     const item = data[i];
        //     setTodoList((prev) => [item.name, ...prev])
        // }
        setTodoList(
          data.map((item) => {
            return item.name;
          })
        );
      })
      .catch((exception) => {
        console.log(exception);
      });
  }, []);

  return (
    <div>
      <h1>My Todo List</h1>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Add new Todo item..."
          style={{
            width: 300,
            padding: 10,
            fontSize: "1.2rem",
            marginRight: 20,
          }}
          onChange={(e) => {
            const value = e.target.value;
            setNewItem(value);
          }}
          value={newItem}
        />
        <button onClick={handleAddNewItem}>Add</button>
      </div>

      <div>
        {todoList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "rgba(255, 0, 0, 0.15)",
                alignItems: "center",
                justifyContent: "space-between",
                paddingInline: 20,
                margin: "5px 0",
              }}
            >
              <p>{item}</p>
              <button onClick={() => handleRemoveItem(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
