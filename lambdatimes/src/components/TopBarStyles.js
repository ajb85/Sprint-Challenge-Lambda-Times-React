import React from "react";
import styled from "styled-components";

export const TopBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

export const TBContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
`;

const TBAlignedEle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  span {
    cursor: pointer;
  }
`;

export const TBLeft = styled(TBAlignedEle)`
  flex: 1;
  font-size: 11px;

  span {
    margin-right: 25%;
    font-weight: bold;
  }
`;
export const TBCenter = styled(TBAlignedEle)`
  flex: 3;
  font-size: 9px;

  span {
    margin-right: 5%;
  }

  span:last-child {
    margin-right: 0;
  }

  span:hover {
    text-decoration: underline;
  }
`;

export const TBRight = styled(TBAlignedEle)`
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
