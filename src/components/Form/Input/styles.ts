import styled, { css, DefaultTheme } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasErrors: boolean;
}

const inputModifiers = {
  focused: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
    border-color: ${theme.colors.shapes};
  `,

  filled: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
    border-color: ${theme.colors.green};
  `,

  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.alert}; ;
  `,
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, isFilled, isFocused, hasErrors }) => css`
    display: flex;
    align-items: center;

    width: 100%;

    color: ${theme.colors.heading};
    background: ${theme.colors.shapesSecondary};
    border: 1px solid ${theme.colors.shapesTernary};
    border-radius: 10px;

    padding: 16px;

    & + div {
      margin-top: 8px;
    }

    ${isFocused && inputModifiers.focused(theme)};
    ${isFilled && inputModifiers.filled(theme)};
    ${hasErrors && inputModifiers.error(theme)};

    input {
      flex: 1;
      border: 0;
      outline: 0;
      background: ${theme.colors.shapesSecondary};
      color: ${theme.colors.heading};

      &::placeholder {
        color: ${theme.colors.body};
      }
    }
  `}
`;

export const ErrorMessageText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.body};
  `}
`;
