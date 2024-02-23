import PropTypes from 'prop-types'

export const FirstApp = ( { title } ) => {
  return (
    <>
    <h1>{ title }</h1>
    <div>holi</div>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}