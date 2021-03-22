import PropTypes from 'prop-types';
const Spinner =  ({spinnerType}) => {
    return (
        <div className={`spinner-border text-${spinnerType}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

Spinner.propTypes = {
    spinnerType: PropTypes.string
}
export default Spinner;
