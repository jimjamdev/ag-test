import { FunctionComponent } from 'react';
import { Button } from '~components/atoms/button';
import { Form } from '~components/forms/form';
import { Input } from '~components/forms/input';
import { TextArea } from '~components/forms/textarea';
import { Grid } from '~components/atoms/grid';
import { IForm } from '~types';

export const MessageForm:FunctionComponent<IForm> = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Grid cols={1} tabletCols={1} desktopCols={1}>
        <Input
          type="text"
          name="username"
          placeholder="username"
          defaultValue="ian.jamieson"
          required
        />
        <TextArea name="message" placeholder="message" required />
      </Grid>
      <Button type="submit" className="margin-top-5">
        Create Message
      </Button>
    </Form>
  );
};
