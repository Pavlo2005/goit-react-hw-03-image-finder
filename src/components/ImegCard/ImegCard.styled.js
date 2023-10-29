import styled from 'styled-components';

export const Card = styled.div`
    width: 250px;
    height: 150px;
`
export const Imeg = styled.img`
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    position: relative;
    padding: ${p => p.theme.spacing(2)};
`

export const ActionBar = styled.div`
  position: absolute;
  display: flex;
  gap: ${p => p.theme.spacing(1)};
  top: ${p => p.theme.spacing(2)};
  right: ${p => p.theme.spacing(5)};
`;

export const ImegContainer = styled.div`
    width: 1000px;
    height: 700px;
`
