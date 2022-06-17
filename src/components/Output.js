import PropTypes from "prop-types";

const Output = ({ children }) => {
	return <p>{children}</p>;
};

export default Output;

Output.propTypes = {
	children: PropTypes.node.isRequired,
};
