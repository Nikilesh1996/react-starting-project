export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

/*
// Can also be initalized like this:
export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}
*/
