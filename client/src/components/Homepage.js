import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tool from "./Tool";
import Header from "./Header";

const Homepage = () => {

    const [status, setStatus] = useState("leading");
    const [tools, setTools] = useState([]);

    useEffect(() => {

        // sets the tool collection from the database to the tools state
        fetch('/getTools')
        .then(res => res.json())
        .then(data => {
            setTools(data.data)
            setStatus('idle')
            })
        .catch(error => console.log("home fetch error: ", error))
    }, [])

    return(
        <Wrapper>
            <Header />
            <MainBody>
                <div>
                    {
                        <>
                            <ToolsSpanDiv>Available tools</ToolsSpanDiv>

                            <ToolsDiv>
                                {
                                    // maps the tools array to display each available tool
                                    tools.map(tool => {
                                        
                                        return(
                                            <React.Fragment key={Math.floor(Math.random()*14000000000)}>
                                                <Tool
                                                    _id={tool._id}
                                                    category={tool.category}
                                                    city={tool.city}
                                                    pricePerDay={tool.pricePerDay}
                                                    toolName={tool.toolName}
                                                    type={tool.type}
                                                    imgUrl={tool.imgUrl}
                                                    isAvailable={tool.isAvailable}
                                                />
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </ToolsDiv>

                        </>
                    }
                </div>
            </MainBody>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`;

const MainBody = styled.div`

`;

const ToolsSpanDiv = styled.h1`

    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 50px 0;
`;

const ToolsDiv = styled.div`

    display: flex;
    flex-wrap: wrap;
    position: absolute;
    width: 1150px;
    left: 20%;
    top: 125px;
    margin-right: 0;
    color: black;
`;

export default Homepage;