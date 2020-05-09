import React, { useState } from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'
import ModalCustom from './ModalCustom'

export default function PlayerItem(props) {

    const opetationSimplifiedArray = () => {
        let simplified = Object.values(props.players.team).map((v) => {
            let t = [];
            v.forEach(o => {
                t.push({
                    name: o.name || "",
                    position: o.position || "Sin posición",
                    image: o.image || "",
                    first_surname: o.first_surname || "",
                    second_surname: o.second_surname || "",
                    birthday: o.birthday || "",
                    birth_place: o.birth_place || "",
                    weight: o.weight || "",
                    height: o.height || "",
                    last_team: o.last_team || ''
                });
            });
            return t;
        }).reduce((c, v) => c.concat(v), []);
        return (<React.Fragment>{simplified.map((value, idx) => <Item key={idx} value={value} onOpen={props.onOpen} />)}</React.Fragment>)
    }
    if (props.players) {
        opetationSimplifiedArray()
    }
    return (
        <Grid.Row>
            {props.players &&
                opetationSimplifiedArray()
            }
        </Grid.Row>
    )
}

function Item(props) {

    const [open, setOpen] = useState(false)
    const onOpen = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return (
        <Grid.Column>
            <Image onClick={onOpen} style={{ margin: 'auto', cursor: 'pointer' }} circular size='medium' src={props.value.image} />
            <Header className='centered' size='medium'>{props.value.position}</Header>
            <Header className='centered' size='tiny'>{props.value.name} {props.value.first_surname}</Header>
            <br />
            <ModalCustom data={props.value} open={open} onClose={onClose} />
        </Grid.Column>
    )
}

