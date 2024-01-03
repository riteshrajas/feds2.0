import React from 'react';
import styled from 'styled-components';

const NoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
`;

const NotFoundText = styled.h1`
    font-size: 2rem;
    background: linear-gradient(90deg, rgba(84,0,0,1) 0%, rgba(52,42,111,1) 23%, rgba(48,47,126,1) 26%, rgba(46,49,132,1) 31%, rgba(44,52,140,1) 37%, rgba(42,55,147,1) 43%, rgba(32,41,110,1) 53%, rgba(30,38,101,1) 60%, rgba(27,34,92,1) 67%, rgba(26,33,89,1) 72%, rgba(25,32,86,1) 78%, rgba(25,32,85,1) 80%, rgba(24,31,83,1) 84%, rgba(23,30,81,1) 88%, rgba(23,29,79,1) 91%, rgba(23,29,78,1) 93%, rgba(22,28,75,1) 98%, rgba(0,0,0,1) 98%, rgba(0,0,0,1) 100%, rgba(18,0,98,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;: transparent;
`;

const Nopage = () => {
    return (
        <NoPageContainer>
            <h6></h6><br/>
            <NotFoundText>Oops! Page not found.</NotFoundText>
        </NoPageContainer>
    );
}

export default Nopage;
