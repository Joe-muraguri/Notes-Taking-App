import { Link } from "react-router-dom";
// import {ReactComponent as AddBtn } from "../assests/add.png"
import {ReactComponent as AddIcon} from "../assests/addd.svg"
const Addbtn = () => {
    return (
        <Link to="note/new" className="float-button">
            <button className="add-button">ADD</button>
        </Link>
    );
}
 
export default Addbtn;