import { SoccerBall } from '@phosphor-icons/react';
import { ButtonSecondary } from '../ButtonSecondary';
import { Container } from './styles';

interface MenuBannerProps {
  title: string;
}

export function MenuBanner({ title }: MenuBannerProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <ButtonSecondary
        title="Clique aqui para ver as formações"
        icon={<SoccerBall size={32} />}
      />
    </Container>
  );
}
