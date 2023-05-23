import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface LoadingProps {
    width: number;
}

export function LoadingScreen({ width }: LoadingProps) {
    const theme = useTheme();
    return (
        <Container>
            <ReactLoading type={'spinningBubbles'} color={theme['green-500']} width={width} />
        </Container>
    );
}
