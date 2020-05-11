import React, { useEffect } from 'react'
import { Grid, Image, Container, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAllGames, selectIsGamesFetching } from '../../redux/games/GameSelector'
import { fetchGamesAsync, filterByCopaMx, fetchGamesAsyncAscensoMx } from '../../redux/games/GameAction'
import HomeItem from './HomeItem'

function Home({ fetchGamesAsync, games, fetchGamesAsyncAscensoMx, isFeching }) {

    useEffect(() => {
        fetchGamesAsync()
    }, [fetchGamesAsync])

    return (
        <Container>
            {isFeching &&
                <div>
                    <Dimmer active >
                        <Loader size='massive' />
                    </Dimmer>
                </div>
            }
            <Image style={{ marginBottom: 20 }} src='https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png' size='medium' centered />
            <Grid columns='2'>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Segment onClick={fetchGamesAsync}>COPA MX</Segment>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Segment onClick={fetchGamesAsyncAscensoMx}>ASCENSO MX</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <HomeItem games={games} />
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    games: selectAllGames,
    isFeching: selectIsGamesFetching,
})

const mapDispatchToProps = dispatch => ({
    fetchGamesAsync: () => dispatch(fetchGamesAsync()),
    filterByCopaMx: () => dispatch(filterByCopaMx()),
    fetchGamesAsyncAscensoMx: () => dispatch(fetchGamesAsyncAscensoMx())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)