import styled from 'styled-components';
import {textColor} from "@/shared/config";

export const Btn = styled.button`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 3px 12px;
  white-space: nowrap;
  user-select: none;
  text-align: center;
  font-size: 1em;
  font-family: inherit;
  line-height: 1.5;
  text-decoration: none;
  text-transform: none;
  color: ${textColor};
  border-radius: 3px;
  border: 1px solid hsl(0, 0%, 80%);
  background-color: hsl(0, 0%, 90%);
  background-image: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${textColor};
    background-color: hsl(0, 0%, 90%);
    border-color: hsl(0, 0%, 80%);
  }

  &--disabled,
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    color: ${textColor};
    background-color: hsl(0, 0%, 90%);
    border-color: hsl(0, 0%, 80%);
    pointer-events: none;
  }
`;
