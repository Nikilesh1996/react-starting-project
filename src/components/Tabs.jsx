export default function Tabs({ buttons, children, buttonsContainer }) {
  // React somehow treats this as a component.
  // This is why custom components should always 
  // start with upper case character.
  const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
