import React, { useEffect } from 'react'
import { Grid, Loader, Dimmer } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectAllPlayers, selectIsPlayerFetching } from '../../redux/players/PlayerSelector'
import { fetchPlayerAsync } from '../../redux/players/PlayerAction'
import PlayerItem from './PlayerItem'

function Players({ fetchPlayerAsync, players, isFeching }) {

    useEffect(() => {
        fetchPlayerAsync()
    }, [fetchPlayerAsync])

    if (isFeching) {
        return (
            <div>
                <Dimmer active inverted>
                    <Loader size='massive' />
                </Dimmer>
            </div>
        )
    }
    return (
        <Grid columns='three'>
            <PlayerItem players={players} />
        </Grid>
    )
}

const mapStateToProps = createStructuredSelector({
    players: selectAllPlayers,
    isFeching: selectIsPlayerFetching
})

const mapDispatchToProps = dispatch => ({
    fetchPlayerAsync: () => dispatch(fetchPlayerAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)