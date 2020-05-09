import React from 'react'
import { Grid, Image, Container, Segment, Statistic, Icon, Divider } from 'semantic-ui-react'

export default function Home() {
    console.log('render')
    return (
        <Container>
            <Image style={{ marginBottom: 20 }} src='https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png' size='medium' centered />
            <Grid columns='2'>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Segment onClick={() => console.log('copa mx')}>COPA MX</Segment>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Segment>ASCENSO MX</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Segment color='grey' inverted>Agosto</Segment>
            <Statistic.Group widths='four' color='green' size='mini'>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='calendar' size='small' />
                    </Statistic.Value>
                    <Statistic.Label >16</Statistic.Label>
                    <Statistic.Label>SEP</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        <Image src='https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11/11.png' className='circular inline' />
                    </Statistic.Value>
                    <Statistic.Label>
                        Pachuca
                    </Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value style={{ marginTop: 20 }}>2-1</Statistic.Value>
                </Statistic>

                <Statistic>
                    <Statistic.Value>
                        <Image src='https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos64x64/11/11.png' className='circular inline' />
                    </Statistic.Value>
                    <Statistic.Label>
                        Pachuca
                    </Statistic.Label>
                </Statistic>
            </Statistic.Group>
            <Divider />
        </Container>
    )
}
