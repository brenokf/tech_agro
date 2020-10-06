import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  position: relative;
  flex-direction: column;
`;
export const InputPos = styled(Input)`
  position: absolute;
  left: 51px;
  top: 50px;
  display: flex;
`;
export const EditButton = styled(Button)`
  flex-shrink: 0;
  position: relative;
  width: 148px;
  height: 56px;
  left: 381px;
  top: 10vw;
  font-size: 15px;
`;

export const Form = styled.form`
  display: flex;
`;
