import './login.scss'
import logo from '../../assets/logo.png'
import { Field } from '../../components/form/field'
import { Form } from '../../components/form/form'

function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <h2 className='titulo'>
                    BEM VINDO
                </h2>
                <Form>
                    <Field label='E-mail ou usuário'>
                        <input type="email" id='email-input' placeholder='exemplo@email.com' />
                    </Field>

                    <Field label='Senha'>
                        <input type="password" id='senha-input' placeholder='Insira sua senha' />
                    </Field>
                    <div className='login-form-actions'>
                        <button type='submit'>
                            Login
                        </button>

                        <a>
                            Esqueceu sua senha?
                        </a>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login
