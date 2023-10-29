import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  align-items: end;
  gap: ${p => p.theme.spacing(1)};
  max-width: 500px;
`;

export const Group = styled.label`
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  padding-bottom: 12px;
`;

export const Button = styled.button`
  position: absolute;
  top: ${p => p.theme.spacing(5)};
  right: ${p => p.theme.spacing(5)};
  width: 80px;
  height: 28px;
`

export const ErrMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -4px;
  color: ${p => p.theme.colors.error};
  font-size: 12px;
`;