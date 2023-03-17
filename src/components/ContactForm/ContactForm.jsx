import PropTypes from 'prop-types';

import {
  Form,
  LabelContainer,
  Label,
  InputContainer,
  Input,
  Button,
} from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(
      e.currentTarget.elements.name.value,
      e.currentTarget.elements.number.value
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <LabelContainer>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Input>
          <Label htmlFor="name">Name</Label>
        </LabelContainer>

        <LabelContainer>
          <Input
            type="tel"
            id="number"
            name="number"
            placeholder=" "
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
          <Label>Number</Label>
        </LabelContainer>
      </InputContainer>
      <Button>Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
