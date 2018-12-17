import {Button, Image, List, Segment} from "semantic-ui-react";
import * as React from "react";

export const ExampleList = () => <Segment>
    <List divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button primary>Add</Button>
            </List.Content>
            <Image avatar
                   src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'/>
            <List.Content>
                <List.Header>Lena</List.Header>
                <List.Description>
                    Last seen watching netflix 10 hours ago.
                </List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Content floated='right'>
                <Button primary>Add</Button>
            </List.Content>
            <Image avatar
                   src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'/>
            <List.Content>
                <List.Header>Peter</List.Header>
                <List.Description>
                    Last seen watching ghost busters 99 hours ago.
                </List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Content floated='right'>
                <Button primary>Add</Button>
            </List.Content>
            <Image avatar
                   src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'/>
            <List.Content>
                <List.Header>Mark</List.Header>
                <List.Description>
                    lorem ipsum
                </List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Content floated='right'>
                <Button primary>Add</Button>
            </List.Content>
            <Image avatar
                   src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'/>
            <List.Content>Molly</List.Content>
        </List.Item>
    </List>
</Segment>;