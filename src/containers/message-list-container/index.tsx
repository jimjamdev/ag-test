import { FunctionComponent } from 'react';
import { MessageList } from '~components/organisms/message-list';
import { useGetMessagesQuery } from '~store/messages/message.service';
import { IBase } from '~types';

// @ts-ignore
export const MessageListContainer:FunctionComponent<IBase> = ({
  className,
}) => {
  /*
    Fetch our data from RTX Query
   */
  const { data, isLoading } = useGetMessagesQuery({
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

  if (isLoading) {
    return '...Loading'
  }

  return (
    // @ts-ignore
    <MessageList className={className} messages={messages} />
  );
};
