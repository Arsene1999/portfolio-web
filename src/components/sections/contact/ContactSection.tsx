import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

import { ContactSectionWrapper, ContactSectionsTitle } from "./styles";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || "",
        process.env.REACT_APP_TEMPLATE_ID || "",
        form,
        process.env.REACT_APP_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    form.reset();
  };

  return (
    <ContactSectionWrapper id="contact">
      <ContactSectionsTitle>Contact</ContactSectionsTitle>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" disabled={isSubmitting} />
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
