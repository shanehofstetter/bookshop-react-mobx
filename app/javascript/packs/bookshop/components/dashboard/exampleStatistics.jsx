import * as React from "react";
import {Grid, Segment, Statistic} from "semantic-ui-react";

export const ExampleStatistics = () => <Grid>
    <Grid.Column computer={4} mobile={8}>
        <Segment textAlign='center' color='green'>
            <Statistic size='small'>
                <Statistic.Value>5,550</Statistic.Value>
                <Statistic.Label>Books</Statistic.Label>
            </Statistic>
        </Segment>
    </Grid.Column>
    <Grid.Column computer={4} mobile={8}>
        <Segment textAlign='center' color='orange'>
            <Statistic size='small'>
                <Statistic.Value>1680</Statistic.Value>
                <Statistic.Label>Tapes</Statistic.Label>
            </Statistic>
        </Segment>
    </Grid.Column>
    <Grid.Column computer={4} mobile={8}>
        <Segment textAlign='center'>
            <Statistic size='small'>
                <Statistic.Value>56734</Statistic.Value>
                <Statistic.Label>Images</Statistic.Label>
            </Statistic>
        </Segment>
    </Grid.Column>
</Grid>;