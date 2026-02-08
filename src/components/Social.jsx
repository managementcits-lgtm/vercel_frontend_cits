import { NavLink } from "react-router-dom";
function Social(){
    return(
        <div>
            <NavLink to="/linkedin">Linkedin</NavLink>
            <NavLink to="/twitter">Twitter</NavLink>
            <NavLink to="/facebook">Facebook</NavLink>

        </div>

    );
}
export default Social;