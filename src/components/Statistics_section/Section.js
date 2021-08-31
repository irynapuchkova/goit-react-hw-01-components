import PropTypes from 'prop-types';


export default function Section({title = "Upload stats", children }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
}