import React from "react";
import * as styled  from "./Header.style";

export default class App extends React.Component{

    render(): React.ReactNode {
        
        return(
            <styled.header>
                <h1 className="ao11y-hidden">REACT SHOPPING MALL WEB PAGE</h1>
                <h2 className="main-logo">LOGO</h2>
                <form>
                    <fieldset>

                    </fieldset>
                </form>
                <section>
                    SIGNIN SIGNUP
                </section>
            </styled.header>
        );

    };
}