import * as React from "react";
import {Placeholder, Segment} from "semantic-ui-react";

class BookPlaceholder extends React.Component {
    render() {
        return (
            <Segment>
                <Placeholder>
                    <Placeholder.Header>
                        <Placeholder.Line/>
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line/>
                        <Placeholder.Line/>
                        <Placeholder.Line/>
                        <Placeholder.Line/>
                        <Placeholder.Line/>
                    </Placeholder.Paragraph>
                </Placeholder>
            </Segment>
        );
    }
}

export default BookPlaceholder;