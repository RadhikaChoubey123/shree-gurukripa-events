import ContactHero from "../components/Contact/ContactHero";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="bg-black text-white">

      <ContactHero />

      <ContactInfo />

      <ContactMap />

      {/* <ContactForm /> */}

    </div>
  );
};

export default Contact;