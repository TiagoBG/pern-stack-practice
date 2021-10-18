import { React } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { estacion: '' }
    }

    render() {
        let saludo = 'HIIIIEEEEE EARTHLINGS'

        let estaciones = ['Canaria', 'Fernández', 'Pasillo', 'Renegade', 'Ferrara', 'Transilvania', 'Tomoeda', 'Shanghai', 'Shibuya', 'Lyoko', 'Clocks', 'Mérida', 'Évora', 'Smaointe', 'Aldebaran', 'Lothlorien', 'Adiemus', 'Book of Days', 'Fairytale', 'China Roses', 'The Celts', 'Orinoco Flow', 'Caribbean Blue', 'Glósóli', 'Staralfur', 'Hoppípolla', 'Paradise', 'Heartland', 'Early Birdie']

        function indicarEstacion() {
            for (let estacion of estaciones) {
                setTimeout(() => {
                    return estacion
                }, 5000);
            }
        }

        return (
            <section>
                <h1>{saludo}</h1>
                <h2>Próxima estación { indicarEstacion()}</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        )
    }
}

export default Login;