'use client';

import Image from 'next/image';
import styled from 'styled-components';
import styles from './page.module.css';
import { stations, getHalfResult } from './function/hoge';
import { useState } from 'react';
import kumaImage from './images/kuma.jpg';
import nikukyuImage from './images/nikukyu.jpg';

export default function Home() {
  const [options, setOptions] = useState(stations);

  function onClick() {
    setOptions(getHalfResult(options));
  }

  return (
    <main className={styles.main}>
      <StyledH1>旅行するならどこに行きたい？</StyledH1>
      <button onClick={onClick}>
        <Image src={kumaImage} alt="旅行するならどこへ行きたい" />
      </button>
      <StyledSection>
        {options.map((option, i) => (
          <OptionText key={i}>{option}</OptionText>
        ))}
      </StyledSection>
    </main>
  );
}

const StyledH1 = styled.h1`
  font-size: 48px;
  font-style: 'bold';
`;

const OptionText = styled.p`
  font-size: 48px;
  margin: 0;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
`;
