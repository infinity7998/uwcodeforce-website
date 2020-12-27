import styled, { css } from 'styled-components'
import myBigLogo from './../../media/codeforceregular.png';
import mySmallLogo from './../../media/codeforcelogo.png';
import { Link } from 'react-router-dom';


const PrimaryTitle = styled.h1`
    text-align: center;
    color: #282828;
`
const SecondaryTitle = styled.h4`
    text-align: center;
    color: #282828;
`

const TitleWrapper = styled.div`
    margin-top: -4em;
    padding: 1em;
    width: 100%;
    height: auto;
`

const LogoContainer = styled.img`
    @media(min-width: 768px){
        width: 50%; 
    }
    width: 100%;
    height: auto;
    padding: 0;
    margin-top: 0;
`


const NewsItem = styled.section`
    padding: 2em;
    width: 100%;
    margin: auto;
    font-weight: light;
    background: ${props => props.even ? 'rgb(240, 241, 242)' : '#525252'};
    color: ${props => props.even ? '#282828' : 'rgb(250, 251, 252)'};
`

const BigLogo = () => {
    return (
        <LogoContainer src={myBigLogo}/>
    )
}

const Logo = () => {
    return (
       <Link to="/">
           <img height="42px" width="52px" src={mySmallLogo}>
           </img>
       </Link>
    )
}

const CodeForceTitleSection = ()=>{
    return (
        <div className="row text-dark">
            <div className="col-sm-8 col-centered text-center p-0 w-100">
            <TitleWrapper>
                <BigLogo />
                <SecondaryTitle>Collaborate. Compete. Compile</SecondaryTitle>   
            </TitleWrapper>
            
            </div>
      </div>
    )
}




export {
    PrimaryTitle,
    SecondaryTitle,
    TitleWrapper,
    NewsItem,
    CodeForceTitleSection,
    Logo
};