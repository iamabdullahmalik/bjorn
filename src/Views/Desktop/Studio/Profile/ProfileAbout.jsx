import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StudioProfileWrapper = styled.div`
  grid-column: 2/5;
  grid-row: 1;
  margin-top: 2rem;
`;

const StudioProfileTextWrapper = styled.div`
  z-index: 50;
  height: 100%;
  max-height: 80vh;
  overflow-y: scroll;
  background-image: ${(props) => `url('./${props.image}.jpg')`};
  background-repeat: no-repeat;
  background-size: 30%;
  background-position: 80% 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: max-content max-content max-content;
  transition: background-image 0.3s ease-in;
`;

const StudioProfileText = styled.p`
  font-size: 1.4vw;
  font-size: 2.8rem;
  margin-bottom: 2rem;
  pointer-events: none;
  color: inherit;
  mix-blend-mode: difference;
  color: #fff;
  z-index: 50;
  grid-column: 1/3;
  height: max-content;
`;

const ReadMoreButton = styled.button`
  font-size: 1.4vw;
  font-size: 2.8rem;
  text-decoration: underline dotted;
  font-family: Suisse Works, serif;
  grid-column: 1;
  align-self: flex-start;
  justify-self: start;
`;

const HoverSpan = styled.span`
  text-decoration: underline dotted;
  text-underline-offset: 2px;
  pointer-events: auto;
`;

export const ProfileAbout = () => {
  const [readMore, setReadMore] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const { t } = useTranslation();
  return (
    <StudioProfileWrapper>
      <StudioProfileTextWrapper image={backgroundImage}>
        <StudioProfileText>
          {t('Established')}{' '}
          <HoverSpan
            onMouseEnter={() => setBackgroundImage('bjorn')}
            onMouseLeave={() => setBackgroundImage(null)}>
            Bjorn Verlinde¹
          </HoverSpan>{' '}
          {t('Designer')}{' '}
          <HoverSpan
            onMouseEnter={() => setBackgroundImage('team')}
            onMouseLeave={() => setBackgroundImage(null)}>
            team²
          </HoverSpan>{' '}
          lorem ipsum dolor sit amter. Sigat amor calcium prozac fin famosa
          purit fame bowie.
        </StudioProfileText>
        {readMore ? (
          <StudioProfileText>{t('AboutMore')}</StudioProfileText>
        ) : (
          ''
        )}
        <ReadMoreButton onClick={() => setReadMore(!readMore)}>
          {readMore ? `- ${t('ReadLess')}` : `+ ${t('ReadMore')}`}
        </ReadMoreButton>
      </StudioProfileTextWrapper>
    </StudioProfileWrapper>
  );
};
