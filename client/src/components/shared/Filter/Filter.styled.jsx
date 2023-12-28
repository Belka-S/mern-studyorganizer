import styled from 'styled-components';

import { themes } from 'styles/themes';

const { colors, radiuses } = themes;
const heightSize = '30px';
const fontSize = '16px';
const offsetY = `calc(${heightSize} * 1.1)`;

export const FilterDiv = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;

  input {
    width: 100%;
    height: 38px; // ${heightSize};
    padding-inline: ${offsetY};

    border: 1px solid transparent;
    border-radius: ${radiuses.xl};
    border-color: ${colors.background};
    outline: transparent;
    transition: border-color 250ms, outline 300ms;

    &:hover {
      border-color: ${colors.borderLight};
    }

    &:focus {
      border-color: ${colors.hovered};
    }

    &::placeholder {
      width: fit-content;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      transition: left 300ms, transform 300ms;
      font-size: ${fontSize};
    }

    &:focus::placeholder {
      left: 0;
      transform: ${`translateX(${offsetY})`};
    }

    & + svg {
      position: absolute;
      top: 50%;
      left: calc(50% - 2.5 * ${fontSize});
      transform: translate(-50%, -50%);
      transition: left 300ms, transform 300ms, fill 300ms;
      cursor: text;
    }

    &:focus + svg,
    &:not(:placeholder-shown) + svg {
      left: calc(${heightSize} * 0.65);
      fill: ${colors.hovered};
    }
  }
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: calc(${heightSize} * 0.65);
  transform: translate(50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid transparent;
  border-radius: 50%;
  background-color: ${colors.border};
  color: ${colors.white};
  transition: background-color 250ms;

  &:hover {
    background-color: ${colors.accent};
  }
`;