import { useSelector } from "react-redux";

const Navbar=()=>{
    const amount = useSelector(state=>state.amount)
    return(
        <>
        <div className="navBar">
            <span>NKJoshi007 </span>
            <ul className="navBar-ul">
                <li>Home</li>
                <li>Contact us</li>
                <li>About us</li>
            </ul>
            <button className="btn navBar-btn">Amount : {amount}</button>
        </div>
        </>
    )
}

export default Navbar;