import PropTypes from 'prop-types'

export const FirstApp = ( { title, subtitle, name } ) => {
  return (
    <>
    <h1> {title} </h1>
    <p> {subtitle} </p>
    <p> {name} </p>
    </>
  )
}

FirstApp.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: "David",
  subtitle: "No hay subtitulo",
  title: "No hay título",
}