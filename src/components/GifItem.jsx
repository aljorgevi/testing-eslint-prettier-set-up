import PropTypes from "prop-types";

export const GifItem = ({ title, url, id }) => {
	return (
		<div className="card">
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

GifItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
