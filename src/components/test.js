import PropTypes from 'prop-types';

const Elem = ({ title = 'victory', name = 30 }) => {
  return (<p>{title}
    <span>{name}</span></p>
  );
}


Elem.propTypes = {
  title: PropTypes.string,
}

export default Elem;