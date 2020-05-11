import React from 'react'
import { Statistic, Segment, Icon, Image, Divider } from 'semantic-ui-react'
import moment from 'moment'
import 'moment/locale/es'
import '../../index.css'

moment.locale('es')

export default function HomeItem(props) {
    return (
        <>
            {props.games &&
                <GameItem games={props.games} />
            }
        </>
    )
}
function GameItem(props) {

    const groupedGames = props.games.reduce((acc, val) => {
        const valMonth = moment(val.datetime).format('MMMM').toUpperCase();
        const gameGroup = acc.find(plan => plan.month === valMonth);

        if (!gameGroup) {
            acc.push({ month: valMonth, games: [val] })
        } else {
            gameGroup.games = [...gameGroup.games, val];
        }

        return acc;
    }, [])

    return (
        <>
            {
                groupedGames.map((game, idx) => (
                    <React.Fragment key={idx}>
                        <Segment color='grey' inverted>{game.month}</Segment>
                        {game.games.map((game, idx) => <Item key={idx} game={game} />)}
                    </React.Fragment>
                ))
            }
        </>
    )
}

function Item(props) {
    const { game } = props
    return (
        <>
            <Statistic.Group widths='four' color='green' size='mini'>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='calendar' size='small' />
                    </Statistic.Value>
                    <Statistic.Label >{moment(game.datetime).format('DD')}</Statistic.Label>
                    <Statistic.Label>{moment(game.datetime).format('MMMM').substr(0, 3)}</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        <Image size='mini' src={game.image} className='circular inline' />
                    </Statistic.Value>
                    <Statistic.Label>
                        Venados F.C
                                    </Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value style={{ marginTop: 20 }}>{game.home_score} - {game.away_score}</Statistic.Value>
                </Statistic>

                <Statistic className='warp-content'>
                    <Statistic.Label>
                        <Image style={{ height: '35px' }} src={game.opponent_image} className='circular inline' />
                    </Statistic.Label>
                    <Statistic.Label>
                        {game.opponent}
                    </Statistic.Label>
                </Statistic>
            </Statistic.Group>
            <Divider />
        </>
    )
}