import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

type LayoutDefaultProps = {
  children: React.ReactNode
}

const LayoutDefault = ({ children }: LayoutDefaultProps): JSX.Element => {
  return (
    <section className="">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </section>
  )
}

export default LayoutDefault
