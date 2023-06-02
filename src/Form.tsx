import { useState } from "react";

const Form = ({ addItem}:any) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          name="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="form-input"
        />
        <button className="btn">Add item</button>
      </div>
    </form>
  );
};
export default Form;
