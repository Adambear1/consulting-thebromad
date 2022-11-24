import React from 'react'
import AboutSection from './AboutSection'
import SignUpSection from './SignUpSection'
import TestimonialsSection from './TestimonialsSection'

export default function Main() {
  return (
  <main className="mt-5">
    <div className="container">
      <AboutSection/>
      <hr className="my-5" />
      <TestimonialsSection/>
      <hr className="my-5" />
      <SignUpSection/>
    </div>
  </main>
  )
}
