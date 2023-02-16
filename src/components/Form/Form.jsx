import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormBox, Input, Textarea, Button } from './Form.styled';
import { sendMessage } from '../../api';

export default function Form() {
  const nameInputId = nanoid();
  const emailInputId = nanoid();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await sendMessage(form);
      Notify.success('The message has been sent');
      form.reset();
    } catch (error) {
      new Error();
    }
  };

  return (
    <FormBox onSubmit={handleSubmit} autoComplete="off">
      <Input
        type="text"
        name="name"
        placeholder="Your name*"
        id={nameInputId}
        required
      />

      <Input
        type="email"
        name="email"
        placeholder="Your e-mail*"
        id={emailInputId}
        pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
        required
      />

      <Textarea
        name="message"
        id="message"
        placeholder="Your message*"
      ></Textarea>
      <Button type="submit">Send message</Button>
    </FormBox>
  );
}
