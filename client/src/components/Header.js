import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {

    // sets the user name from the localStorage
    const user = localStorage.getItem("user");
    let history = useHistory();

    // logsout a signed in user
    const handleLogout = () => {

        window.localStorage.setItem("user", "");
        history.push('/');
        window.location.reload();
    }

    return  <Wrapper >
                <Logo>
                    <h1><StyledNavLink to="/">Toolbux</StyledNavLink></h1>
                </Logo>

                <Links>
                    
                    {/* if a user is loged in, show the menu */}
                    {
                        user ? 
                        <>
                            <Nav>
                                    <StyledNavLink to={`/mytools/${user}`}>My Tools</StyledNavLink> 
                                    
                                
                            </Nav>

                            <Nav>
                                
                                    <StyledNavLink to={`/myrents/${user}`}>My Rents</StyledNavLink> 
                                    
                                
                            </Nav>

                            <Nav>
                                
                                    <StyledNavLink to="/upload">Upload Tool</StyledNavLink> 
                                    
                            </Nav> 
                        </> :
                                
                            ""
                    }

                    <LoginLoged>
                        {
                        user ? (
                        <UserLogout>
                            <UserSpan>User: {user}</UserSpan> 
                            <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
                        </UserLogout>
                        ) :
                        <SignupLogin>
                            <StyledNavLink1 to="/login">Login</StyledNavLink1>
                            <StyledNavLink to="/signup">Sign up</StyledNavLink>
                        </SignupLogin>
                        }
                    </LoginLoged>
                </Links>

            </Wrapper>
}

const Wrapper = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(0, 0, 0);
    margin-top: 0;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    z-index: 10;
`;

const Logo = styled.div`

    margin-left: 35px;
`;

const LoginLoged = styled.nav`

    font-size: 18px;
    margin-right: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Nav = styled.nav`

    font-size: 20px;
    margin-right: 100px;
    padding-right: 10px;
`;

const StyledNavLink = styled(NavLink)`

    text-decoration: none;
    color: #ff7366;
    margin-left: 10px;

    &:hover{
        color: #ff1500;
        text-decoration: underline;
    }
`;

const StyledNavLink1 = styled(NavLink)`

    text-decoration: none;
    color: #ff7366;
    border-right: #ff7366 solid 2px;
    padding-right: 10px;

    &:hover{
        color: #ff1500;
        text-decoration: underline;
    }
`;

const Links = styled.div`

    display: flex;
    align-items: center;
    margin-right: 35px;
`;

const UserSpan = styled.span`

    color: #ff7366;
`;

const LogoutBtn = styled.button`

    color: #ff7366;
    background-color: black;
    border: #ff7366 solid 1px;
    border-radius: 3px;
    width: fit-content;
    margin-top: 10px;
    padding: 1px;
    font-size: 12px;

    &:hover{
        color: #ff1500;
        text-decoration: underline;
    }
`;

const UserLogout = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SignupLogin = styled.div`

    font-size: 15px;
`;

export default Header;