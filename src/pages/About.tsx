import React from 'react';


interface MessageProps {
    title: string;
}

const About : React.FunctionComponent<MessageProps> = ({ title }) => {

    return (
        <>
           <div>This is about us page</div>
           <h1>Welcome {title}</h1>
        </>
        
    )
}
export default About;