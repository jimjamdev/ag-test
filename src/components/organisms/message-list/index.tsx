import { FunctionComponent } from 'react';
import { ListItem } from '~components/atoms/list-item';
import { IBase, IMessage } from '~types';

export interface IMessageList extends IBase {
  messages: Array<IMessage>
  showAmount?: number;
}

// @ts-ignore - weird children error when children not specified
export const MessageList: FunctionComponent<IMessageList> = ({
  messages,
  className,
}) => {

  return (
    <article className={className}>
      {Array.isArray(messages) &&
        messages.map((item) => {
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
    </article>
  );
};
