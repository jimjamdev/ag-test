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
  const { data, isLoading, error } = useGetMessagesQuery({},
    { pollingInterval: 1000 }
  )

  /*
  Transform data
   */
  const messages = data?.data && data?.data.map(m => {
    const { username, message } = m?.attributes;
    return {
      id: m?.id,
      username: username,
      message: message,
    }
  })

  if (error) {
    // @ts-ignore - weird. it does exist
    return <div>{error?.message}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    // @ts-ignore
    <MessageList className={className} messages={messages} />
  );
};
