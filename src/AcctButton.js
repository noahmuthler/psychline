import React from "react";

function AcctButton(props) {
    return(
        <div>
            <a href="public/signup.html">{props.name}</a>
        </div>
    );
}

export default AcctButton;