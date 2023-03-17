import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
`;

export const FilterLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 9px;
  padding: 0 5px;
  opacity: 0.8;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const FilterInput = styled.input`
  padding: 8px;
  background: transparent;
  border: 2px solid #rgb(48, 39, 39);
  border-radius: 5px;
  :focus {
    outline: 1px solid #rgb(48, 39, 39);
  }
  :focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -8px;
    font-size: 12px;
    background-color: white;
    opacity: 1;
  }
`;
