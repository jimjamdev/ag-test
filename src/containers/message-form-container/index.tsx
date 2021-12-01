import { SyntheticEvent } from 'react';
import { MessageForm } from '~components/organisms/message-form';
import { useCreateMessageMutation } from '~store/messages/message.service';

export const MessageFormContainer = () => {

  const [createMessage, { isLoading }] = useCreateMessageMutation()

  const handleSubmit = async(event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const { username, message } = target;

    await createMessage(
      {
          username: username?.value,
          message: message?.value
      }
    )
  };

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <MessageForm onSubmit={handleSubmit} />;
};
