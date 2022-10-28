import {Navbar} from "./common/Navbar";

export const Layout = ({children}) => {
    return(
        <>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
        </>
    )
}