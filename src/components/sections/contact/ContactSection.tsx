import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  ContactSectionButton,
  ContactSectionContainer,
  ContactSectionForm,
  ContactSectionInput,
  ContactSectionTextarea,
  ContactSectionWrapper,
  ContactSectionsTitle,
} from "./styles";

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
          }, 5000);
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
      <ContactSectionsTitle>Contato</ContactSectionsTitle>
      <ContactSectionContainer>
        <ContactSectionForm onSubmit={sendEmail}>
          <ContactSectionInput
            type="text"
            name="user_name"
            placeholder="Your name"
          />
          <ContactSectionTextarea name="message" placeholder="Your text" />
          <ContactSectionButton
            type="submit"
            value="Send"
            disabled={isSubmitting}
          />
          {stateMessage && <p>{stateMessage}</p>}
        </ContactSectionForm>
      </ContactSectionContainer>
    </ContactSectionWrapper>
  );
};

export default ContactSection;
