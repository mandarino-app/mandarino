import { Button, Header } from 'ui'

export default function Page () {
  return (
    <>
      <Header text='Web' />
      <Button
        onClick={() => {
          alert('mandarino')
        }}
        className=''
        text='search'
      />
    </>
  )
}
