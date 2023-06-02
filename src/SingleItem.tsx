import { typeItem } from "./App";
export function SingleItem({
  item,
  removeItem,
  editItem
}: {
  item: typeItem;
  removeItem: (id: string) => void;
  editItem: (id: string) => void;
}) {

  const { id, name, completed } = item;


  return (
    <div key={id} className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />

      <p
        style={{
          textDecoration: item.completed ? "line-through":'',
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>

      <button className="remove-btn" onClick={() => removeItem(id)}>
        Remove
      </button>
    </div>
  );
}
