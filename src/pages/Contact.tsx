import React from 'react';


interface MessageProps {
    title: string;
}

const Contact : React.FunctionComponent<MessageProps> = ({ title }) => {

    return (
        <>
           <div>This is contact us page</div>
           <h1>Welcome {title}</h1>
        </>
        
    )
}
export default Contact;