import { FunctionComponent } from 'react';
import { MessageList } from '~components/organisms/message-list';
import { useGetMessagesQuery } from '~store';
import { IBase } from '~types';

// @ts-ignore
export const MessageListContainer:FunctionComponent<IBase> = ({
  className,
}) => {
  const { data, error, isLoading } = useGetMessagesQuery({
    pollingInterval: 1000,
  })

  const messages = data?.data.flatMap(m => {
    const { username, message } = m?.attributes;
    return {
      id: m?.id,
      username: username,
      message: message,
    }
  })

  if(error) {
    return error
  }

  if (isLoading) {
    return '...Loading'
  }

  return (
    <MessageList className={className} messages={messages} />
  );
};
