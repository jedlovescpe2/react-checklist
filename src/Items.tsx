import { SingleItem } from './SingleItem';
export function Items({items,removeItem,editItem}:any) {
  return (
    <section className="items">
      { items.map((item:any)=> {
        return (
          <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem}  />
        )
      })}
    </section>
  );
}
