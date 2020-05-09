import React from 'react'
import { Grid, Image, Header, Statistic } from 'semantic-ui-react'

export default function StatisticsItem(props) {

    return (
        <React.Fragment>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Header size='tiny'>Tabla General</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header size='tiny'>JJ</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header size='tiny'>DG</Header>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Header size='tiny'>PTS</Header>
                    </Grid.Column>
                </Grid.Row>
                {
                    props.statistics && (
                        props.statistics.statistics.map((statistic, idx) => (
                            <Item key={idx} statistic={statistic} />
                        ))
                    )
                }
            </Grid>
        </React.Fragment>
    )
}

function Item(props) {
    return (
        <Grid.Row color='green'>
            <Grid.Column width={10} style={{ display: 'flex' }} >
                <Statistic.Group >
                    <Statistic>
                        <Statistic.Value text>{props.statistic.position}</Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>
                            <Image size='mini' src={props.statistic.image} />
                        </Statistic.Value>
                    </Statistic>
                    <Statistic>
                        <Statistic.Label >{props.statistic.team}</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Grid.Column>
            <Grid.Column width={2}>
                <Header size='tiny'>{props.statistic.games}</Header>
            </Grid.Column>
            <Grid.Column width={2}>
                <Header size='tiny'>{props.statistic.score_diff}</Header>
            </Grid.Column>
            <Grid.Column width={2}>
                <Header size='tiny'>{props.statistic.points}</Header>
            </Grid.Column>
        </Grid.Row>
    )
}