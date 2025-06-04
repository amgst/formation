import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const GenericPage = ({ title, children }) => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {children || <p>Content coming soon.</p>}
    </main>
    <Footer />
  </>
)

export default GenericPage
