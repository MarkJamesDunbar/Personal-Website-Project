import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 300px;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: between;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const SidebarList = styled.ul`
    height: auto;
    padding: 0;
    width: 300px;
`;

export const SidebarRow = styled.li`
    width: 100%;
    height: 100px;
    list-style-type: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: transform 0.6s;
    transform: scale(1);    
    &:hover {
        background-color: #515152;
        cursor: pointer;
        transform: scale(1.05);
    }
    ${({ isSelected }) => isSelected && "background-color: #515152"}
`;

export const SidebarIcon = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
    font-size: 13pt;
`;

export const SidebarTitle = styled.div`
    flex: 70%;
    font-size: 13pt;
`;
