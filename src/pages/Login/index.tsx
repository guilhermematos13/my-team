import { Keyhole } from '@phosphor-icons/react';
import { Input } from '../../components/Input';
import { Container, LoginStyled, Title } from './styles';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { useContext, useState } from 'react';
import { fetchLogin } from '../../services/requests/login';
import { Loading } from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
import { MyTeamContext } from '../../context/MyTeamContext';

export function Login() {
    const [apiKey, setApiKey] = useState('');
    const [loading, setLoading] = useState(false);
    const { setToken } = useContext(MyTeamContext);

    const navigate = useNavigate();

    return (
        <Container>
            <LoginStyled>
                <Title>API Key</Title>
                <Input
                    icon={<Keyhole />}
                    type="text"
                    placeholder="Insira sua chave de autenticação"
                    onChange={event => {
                        setApiKey(event.target.value);
                    }}
                />
                <div>
                    {loading ? (
                        <Loading width={50} />
                    ) : (
                        <ButtonPrimary
                            disabled={apiKey === ''}
                            type="submit"
                            title="Entrar"
                            onClick={() => {
                                fetchLogin({ apiKey, setLoading, navigate, setToken });
                            }}
                        />
                    )}
                </div>
            </LoginStyled>
        </Container>
    );
}
