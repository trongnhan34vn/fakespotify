import React from 'react'
import LoadingOverlay from 'react-loading-overlay';

const LoadingOverlayComp = ({ isActive, message }) => {
  return (
    <LoadingOverlay
      className='fixed top-0 bottom-0 left-0 right-0 z-40'
      active={isActive}
      spinner={true}
      text='Loading your content...'
    >
      <p>Some content or children or something.</p>
    </LoadingOverlay>
  )
}

export default LoadingOverlayComp