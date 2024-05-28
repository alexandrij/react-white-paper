import styled from 'styled-components';

export const BorderedContainer = styled.div({
  boxSizing: 'border-box',
  borderColor: 'white',
  borderStyle: 'solid',
  borderWidth: 1,
});

export const Root = styled.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
});

export const Header = styled(BorderedContainer)({
  display: 'flex',
  height: '200px',
  width: '100%',
});

export const Main = styled(BorderedContainer)({
  display: 'flex',
  flex: 1,
});
