import { FunctionComponent } from 'react';
import { MessageList } from '~components/organisms/message-list';
import { messagesSelector, useAppSelector } from '~store';
import { IBase } from '~types';

export const MessageListContainer: FunctionComponent<IBase> = ({
  className,
}) => {
  const { messages } = useAppSelector(messagesSelector);

  return <MessageList className={className} messages={messages} />;
};
