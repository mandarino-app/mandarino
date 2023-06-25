'use client'
// import { HomePage } from 'ui/pages'

const HomePage = () => {
  return (
    <>
      <h1> Mandarino </h1>
      <p>mandarino helps you learn mandarin fast and fun</p>
      <button
        onClick={() => {
          alert('mandarino')
        }}
        className=''
      >
        search
      </button>
    </>
  )
}

export default HomePage
