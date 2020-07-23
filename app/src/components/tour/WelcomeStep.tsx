import React from 'react';
import { ReactourStepContentArgs } from 'reactour';
import { usePrefixedTranslation } from 'hooks';
import { useStore } from 'store';
import { Button } from 'components/base';
import { styled } from 'components/theme';
import TextStep from './TextStep';

const Styled = {
  Note: styled.p`
    font-size: ${props => props.theme.sizes.xs};
    font-style: italic;
    opacity: 0.8;
    margin-bottom: 50px;
  `,
  Footer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  LinkButton: styled(Button)`
    color: ${props => props.theme.colors.darkBlue};
    padding: 0;
    min-width: auto;
    height: auto;

    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  `,
  SmallButton: styled(Button)`
    font-size: ${props => props.theme.sizes.xs};
    min-width: auto;
    height: 34px;

    &:hover {
      color: ${props => props.theme.colors.offWhite};
      background-color: ${props => props.theme.colors.darkBlue};
    }
  `,
};

const WelcomeStep: React.FC<ReactourStepContentArgs> = props => {
  const { l } = usePrefixedTranslation('cmps.tour.WelcomeStep');
  const { uiStore } = useStore();

  const { Note, Footer, LinkButton, SmallButton } = Styled;
  return (
    <TextStep header={l('header')} showNext={false} {...props}>
      <p>{l('desc')}</p>
      <p>
        {l('walkthrough1')}{' '}
        <a
          href="https://github.com/lightninglabs/lightning-terminal/blob/45eb207c6cae1804020f4f017fd581a9664ed92b/doc/WALKTHROUGH.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          {l('walkthrough2')}
        </a>{' '}
        {l('walkthrough3')}
      </p>
      <Note>{l('note')}</Note>
      <p>{l('question')}</p>
      <Footer>
        <SmallButton onClick={uiStore.tourGoToNext}>{l('yes')}</SmallButton>
        <LinkButton ghost borderless onClick={uiStore.closeTour}>
          {l('noThanks')}
        </LinkButton>
      </Footer>
    </TextStep>
  );
};

export default WelcomeStep;
