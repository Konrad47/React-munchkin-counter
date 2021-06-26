import PropTypes from "prop-types"
import { GiCrossedSwords } from "react-icons/gi";

const Header = ({ title }) => {

    return(
        <header className="header">
            <h1>{title} <GiCrossedSwords /></h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Munchkin Counter",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header