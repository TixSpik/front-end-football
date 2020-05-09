import React from 'react'
import { Statistic, Segment, Icon, Image, Divider } from 'semantic-ui-react'
import moment from 'moment'
import 'moment/locale/es'
import '../../index.css'

moment.locale('es')

export default function HomeItem(props) {

    const currentDate = (idx) => {
        if (props.games) {
            return props.games[idx + 1] ? props.games[idx + 1].datetime : 0
        }
    }

    return (
        <>
            {props.games &&
                props.games.map((game, idx) => <Item key={idx} date={currentDate(idx)} game={game} />)
            }
        </>
    )
}
function Item(props) {
    const datetime = moment(props.game.datetime).format('MMMM')
    const date = moment(props.date).format('MMMM')

    return (
        <>
            {datetime === date ?
                (<Segment color='grey' inverted>{moment(props.game.datetime).format('MMMM').toUpperCase()}</Segment>)
                : (<></>)}
            <Statistic.Group widths='four' color='green' size='mini'>
                <Statistic>
                    <Statistic.Value>
                        <Icon name='calendar' size='small' />
                    </Statistic.Value>
                    <Statistic.Label >{moment(props.game.datetime).format('DD')}</Statistic.Label>
                    <Statistic.Label>{moment(props.game.datetime).format('MMMM').substr(0, 3)}</Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value>
                        <Image src={props.game.image} className='circular inline' />
                    </Statistic.Value>
                    <Statistic.Label>
                        Venados F.C
                    </Statistic.Label>
                </Statistic>
                <Statistic>
                    <Statistic.Value style={{ marginTop: 20 }}>{props.game.home_score} - {props.game.away_score}</Statistic.Value>
                </Statistic>

                <Statistic className='warp-content'>
                    <Statistic.Label>
                        <Image src={props.game.opponent_image} className='circular inline' />
                    </Statistic.Label>
                    <Statistic.Label>
                        {props.game.opponent}
                    </Statistic.Label>
                </Statistic>
            </Statistic.Group>
            <Divider />
        </>
    )
}
