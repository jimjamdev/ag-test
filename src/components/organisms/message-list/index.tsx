import { FunctionComponent } from 'react';
import { ListItem } from '~components/atoms/list-item';
import { IBase, IMessages } from '~types';

export interface IMessageList extends IBase, IMessages {
  showAmount?: number;
}

// @ts-ignore - weird children error when children not specified
export const MessageList: FunctionComponent<IMessageList> = ({
  messages,
  showAmount= 10,
  className,
}) => {

  const truncatedMessages = messages.slice(0, showAmount);

  return (
    <div className={className}>
      {Array.isArray(truncatedMessages) &&
      truncatedMessages.map((item) => {
          const { id, username, message } = item;
          return (
            <ListItem
              key={id}
              className="color-secondary-600 bg-mono-100 padding-5 margin-bottom-1"
            >
              {id} {username} {message}
            </ListItem>
          );
        })}
    </div>
  );
};
