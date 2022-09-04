import * as React from 'react';
import { List } from 'react-native-paper';

export const UserInfoList = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="View and Update Your Information">
      <List.Accordion
        title="Jane Doe"
        left={props => <List.Icon {...props} icon="cog" />}>
        <List.Item title="Jane" />
        <List.Item title="Doe" />
      </List.Accordion>

      <List.Accordion
        title="Email"
        left={props => <List.Icon {...props} icon="at" />}>
        <List.Item title="jane@email" />
      </List.Accordion>

      <List.Accordion
        title="Password"
        left={props => <List.Icon {...props} icon="key" />}>
        <List.Item title="Password" />
      </List.Accordion>

      <List.Accordion
        title="Animal"
        left={props => <List.Icon {...props} icon="star" />}>
        <List.Item title="Rat" />
      </List.Accordion>

    </List.Section>
  );
};


