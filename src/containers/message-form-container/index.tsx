import { SyntheticEvent } from 'react';
import { MessageForm } from '~components/organisms/message-form';
import { createMessage, useAppDispatch } from '~store';

export const MessageFormContainer = () => {

  const dispatch = useAppDispatch();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const { username, message } = target;

    dispatch(
      createMessage({
        username: username?.value,
        message: message?.value,
      }),
    );
  };

  return <MessageForm onSubmit={handleSubmit} />;
};
