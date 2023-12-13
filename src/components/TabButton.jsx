export default function TabButton({ children, onSelect }) {
  

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
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
