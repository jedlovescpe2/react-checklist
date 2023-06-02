import { Items } from "./Items";
import "./index.css";
import Form from "./Form";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface typeItem {
  name: string;
  completed: boolean;
  id: string;
}
const setLocalStorage = (items: typeItem[]) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const App = () => {
  const toastContainerRef = useRef<null | React.ElementRef<
    typeof ToastContainer
  >>(null);
  const [items, setItems] = useState<typeItem[]>(defaultList);

  const addItem = (itemName: string) => {
    if (!itemName || itemName.trim().length === 0) {
      toast.error("Please provide a valid item.");
      return;
    }

    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setLocalStorage(newItems);
    toast.dismiss(); // Dismiss previous toast
    toast.success(`${itemName} has been added.`);
  };

  const editItem = (itemId: string) => {
    let itemName = "";
    let checked = false;
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        itemName = item.name;
        const newItem = { ...item, completed: !item.completed };
        checked = !item.completed ? true: false
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.dismiss(); // Dismiss previous toast
    if(checked)
      toast.success(`${itemName} has been acquired.`);
    else
      toast.warning(`${itemName} has added back to list.`);
  };

  const removeItem = (id: string) => {
    let itemName = "";
    const newItems = items.filter((item) => {
      itemName = item.name;
      return item.id !== id;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.dismiss(); // Dismiss previous toast
    toast.warning(`${itemName} has been removed.`);
  };
  return (
    <div className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer
        ref={toastContainerRef}
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
      />
    </div>
  );
};

export default App;
