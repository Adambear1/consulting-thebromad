import React from 'react'
import Card from './Card'

function TestimonialsSection() {
  const card = [
    {
      img: "",
      title: "Adam Birgenheier",
      info: ""
    }, {
      img: "",
      title: "Allie Zipprich",
      info: ""
    }, {
      img: "",
      title: "Johnny Chorinois",
      info: ""
    },
  ]
  return (
    <section className="text-center">
      <h4 className="mb-5" id="testimonials">
        <strong>Testimonials</strong>
      </h4>
      <div className="row">
        {
        card.map(({
          img,
          title,
          info
        }, index) => <div className="col-lg-4 col-md-12 mb-4"><Card key={index}
            img={img}
            title={title}
            info={info}/>
        </div>)
      } </div>
    </section>
  )
}

export default TestimonialsSection
