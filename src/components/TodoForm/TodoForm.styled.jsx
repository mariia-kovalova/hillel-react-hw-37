import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  gap: 8px;`;

export const Input = styled.input`
  flex: 1;
  color: #fff;
  background: #262626;
  border: 1px solid #0D0D0D;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;

  &::placeholder{
    color: #808080;
  }`;

export const CreateBtn = styled.button`
  cursor: pointer;
  padding: 0 16px;
  background: #1E6F9F;
  color: #fff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 14px;`;
