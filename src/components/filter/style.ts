import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputField = styled.input`
  width: 100%;
  background: #F2F2F2;
  padding: 8px 20px;
  border: none;
  box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
  border-radius: 40px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(33, 33, 33, 0.8);
  }
`;
export const Inner = styled.div`
  display: flex;
  gap: 64px;
`