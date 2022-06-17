import PropTypes from "prop-types";

export default function FirstApp({ title, subTitle, name }) {
	return (
		<>
			<h1 data-testid="test-title">{title}</h1>
			<p>{subTitle}</p>
			<p>{name}</p>
		</>
	);
}

FirstApp.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
	name: "Jorge Mena",
	subTitle: "there is no subTitle",
	title: "No hay título",
};
