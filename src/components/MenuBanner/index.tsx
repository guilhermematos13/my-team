import { ButtonSecondary } from '../ButtonSecondary';
import { Container } from './styles';

interface MenuBannerProps {
  title: string;
  buttonTitle: string;
}

export function MenuBanner({ title, buttonTitle }: MenuBannerProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <ButtonSecondary title={buttonTitle} />
    </Container>
  );
}
