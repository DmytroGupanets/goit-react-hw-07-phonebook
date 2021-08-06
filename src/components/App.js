import ContactForm from "./contactForm/ContactForm";
import ContactsList from "./contactsList/ContactsList";
import Filter from "./filter/Filter";

const App = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default App;
