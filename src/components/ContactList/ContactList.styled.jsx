import styled from 'styled-components';

export const ListBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  :hover,
  :focus {
    opacity: 1;
  }
`;

export const ContactsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ContactsTableHead = styled.th`
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #18161694;
  :not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const ContactsTableRow = styled.tr`
  background-color: transparent;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #e5e0ff;
  }
`;

export const ContactsTableCeil = styled.td`
  padding: 10px;
  text-align: center;

  :not(:last-child) {
    border-right: 1px solid darkgrey;
  }
`;

export const ContactsFlexCeil = styled.td`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;

  :not(:last-child) {
    border-right: 1px solid darkgrey;
  }
`;
