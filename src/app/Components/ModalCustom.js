import React from 'react'
import { Modal, Image, Header, Container } from 'semantic-ui-react'
import moment from 'moment'
export default function ModalCustom(props) {
    console.log(props.data)
    return (
        <Modal open={props.open} onClose={props.onClose} centered>
            <Modal.Header style={{ background: 'green', padding: 0, margin: 0 }} ><Header className='centered' >FICHA TÉCNICA</Header></Modal.Header>
            <Modal.Content image className='centered' style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                <Container textAlign='center' style={{ background: 'green', padding: 0, margin: 0 }}>
                    <Image className='centered' circular src={props.data.image} size='medium' />
                    <Header size='large'>{props.data.name} {props.data.first_surname} {props.data.second_surname}</Header>
                    <Header size='medium' style={{ paddingBottom: 50 }}>{props.data.position}</Header>
                </Container>
                <Container textAlign='center' >
                    <Header size='large'>FECHA DE NACIMIENTO</Header>
                    <Header size='small'>{moment(props.data.birthday).format('DD/MM/YYYY')}</Header>
                    <Header size='large'>LUGAR DE NACIMIENTO</Header>
                    <Header size='small'>{props.data.birth_place}</Header>
                    <Header size='large'>PESO</Header>
                    <Header size='small'>{props.data.weight} KG</Header>
                    <Header size='large'>ALTURA</Header>
                    <Header size='small'>{props.data.height} M</Header>
                    <Header size='large'>ULTIMO EQUIPO</Header>
                    <Header size='small'>{props.data.last_team}</Header>
                </Container>
            </Modal.Content>
        </Modal>
    )
}
