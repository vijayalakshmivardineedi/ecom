import Header from "../Headers"


const Layout=(props)=>{
    return(
        <>
            <Header/>
            {props.children}
        </>
    )
}

export default Layout