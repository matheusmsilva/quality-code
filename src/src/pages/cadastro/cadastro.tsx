import { Field } from '../../components/form/field'
import { Form } from '../../components/form/form'
import { Header } from '../../components/header/header'
import './cadastro.scss'

function Cadastro() {

    const onSubmit = () => {
        // ....
    }

    return (
        <div className='cadastro-page'>
            <Header/>
                
            
            <div className='form-container'>
                <h3>CADASTRO DE USUÁRIO</h3>
                <Form onSubmit={onSubmit}>
                    <Field label='Nome completo' required width={4}>
                        <input type="text" id='nome-input' name='nome_usuario' placeholder='Nome completo' />
                    </Field>

                    <Field label='Cargo' required width={4}>
                        <input type="text" id='cargo-input' name='nome_cargo' placeholder='Analista de testes' />
                    </Field>

                    <Field label='Perfil' required width={4}>
                        <select name='nome_perfil'>
                            <option value="" disabled>Selecione</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Analista">Analista</option>
                            <option value="Gerente">Gerente</option>
                        </select>
                    </Field>

                    <Field label='Email' required width={6}>
                        <input type="email" id='email-cadastro-input' name='email' placeholder='exemplo@email.com' />
                    </Field>

                    <Field label='Confirmar email' required width={6}>
                        <input type="text" id='confirmar-email-input' name='confirmar_email' placeholder='exemplo@email.com' />
                    </Field>

                    <Field label='Login de usuário' required width={4}>
                        <input type="text" id='login-input' name='login_usuario' placeholder='Nome de usuário' />
                    </Field>

                    <Field label='Senha' required width={4}>
                        <input type="password" id='senha-input' name='senha' placeholder='Insira sua senha' />
                    </Field>

                    <Field label='Confirmar senha' required width={4}>
                        <input type="password" id='confirmar-senha-input' name='confirmar_senha' placeholder='Confirme sua senha' />
                    </Field>

                    <div className='div-button'>
                        <button className='cancel-button' type='button'>
                            Cancelar
                        </button>

                        <button type='submit'>
                            Confirmar
                        </button>
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default Cadastro