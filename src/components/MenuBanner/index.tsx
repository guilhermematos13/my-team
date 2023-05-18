import { ButtonTriggerModal } from '../ButtonTriggerModal';
import { Container } from './styles';

interface MenuBannerProps {
  title: string;
  buttonTitle: string;
}

export function MenuBanner({ title, buttonTitle }: MenuBannerProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <ButtonTriggerModal title={buttonTitle} />
    </Container>
  );
}
