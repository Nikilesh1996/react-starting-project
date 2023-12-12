export default function CoreConcepts({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}


/*
// Alternate declaration of the component.
function CoreConcepts(props) {
  const { title, description } = props;

  return (
    <li>
      <img src={props.image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
*/