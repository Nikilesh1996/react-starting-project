export default function Section({ title, children, ...props }) {
  console.log("This is to see what props would contain", props);
  
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
