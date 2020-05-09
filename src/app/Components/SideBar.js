import React, { useState } from 'react'
import { Icon, Image, Menu, Segment, Sidebar, Container, Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function SideBar({ children }) {
    const [visible, setVisible] = useState(false)

    return (
        <div >
            <Sidebar.Pushable style={{ minHeight: '100vh', display: 'flex', flexFlow: 'column nowrap' }}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='wide'

                >
                    <Card centered style={{ width: '100%' }}>
                        <Image src='https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10732/10732.png' centered ui={true} style={{ height: 150, width: 150 }} />
                        <Card.Content>
                            <Card.Header>Venados F.C</Card.Header>
                        </Card.Content>
                    </Card>

                    <Menu.Item onClick={() => setVisible(false)} as={Link} to='/' >
                        <Icon name='home' />
                    Vista Principal
                </Menu.Item >

                    <Menu.Item onClick={() => setVisible(false)} as={Link} to='/statistics'>
                        <Icon name='pie chart' />
                    Estadisticas
                </Menu.Item>
                    <Menu.Item onClick={() => setVisible(false)} as={Link} to='/players'>
                        <Icon name='soccer' />
                    Jugadores
                </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher>
                    <Segment >
                        <Button onClick={() => setVisible(true)} icon='bars'>
                        </Button>
                    </Segment>
                    <Container>
                        {children}
                    </Container>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    )
}
