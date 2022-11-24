import React from 'react'
import FormInput from './FormInput'

export default function SignUpSection() {
  const form_contact_info = [
    {
      name: "Legal Name",
      info: "What's your full legal name as exactly on your passport? Please make sure it matches exactly."
    },
    {
      name: "Nationality",
      info: "What's the country in your passport? If you have multiple, use the primary. All our spots for US citizens are full now."
    },
    {
      name: "Email",
      info: "Please use an email address we can contact you on easily. Don't use personal domain emails, they have really bad deliverability and we need to contact you easily. Use Gmail preferrably."
    },
    {
      name: "Phone",
      info: "Please use a phone number we can contact you on easily for urgent situations and use the int'l format like +1201234567",
      placeholder: "+1"
    }, {
      name: "Date of Birth",
      info: "Please write it in YYYY-MM-DD (year-month-day)",
      placeholder: "YYYY-MM-DD"
    }, {
      name: "Gender",
      info: "What's your legal gender on your passport?"
    }, {
      name: "Passport Number",
      info: "Please make sure it matches exactly"
    }, {
      name: "Passport Expiration Date",
      info: "Please write it in YYYY-MM-DD (year-month-day), if different we won't be able to accept it",
      placeholder: "YYYY-MM-DD"
    }, {
      name: "Residence",
      info: "What's your current legal country of residence? This is the country you're legally registered as a resident at the city or country government. If you don't have one now, use your last known."
    }, {
      name: "Residency Address",
      info: "What's your current legal address of residence? This is your home address where you're legally registered as a resident. Please write the full address building, street name and number, postal code, city etc. seperated by comma. If you don't have one now, use your last known."
    }
  ]
  const form_job_info = [
    {
      name: "Current Job",
      info: ""
    }, {
      name: "Source of Income",
      info: ""
    }, {
      name: "Include Family",
      info: ""
    }, {
      name: "Additional Comments",
      info: ""
    }
  ]
  return (
    <section className="mb-5">
      <h4 className="mb-5 text-center">
        <strong>Facilis consequatur eligendi</strong>
      </h4>

      <div className="row d-flex justify-content-center">
        <div className="col-9">
          <form>
            {/* <div className="row mb-4">
              <div className="col"> */}
                {
                form_contact_info.map(({
                  name,
                  info,
                  placeholder
                }, index) => index !== form_contact_info.length - 1 ? <>
                  <FormInput index={index}
                    name={name}
                    info={info}
                    placeholder={placeholder}/>
                  <hr/>
                </> : <div className="mb-5">
                  <FormInput index={index}
                    name={name}
                    info={info}
                    placeholder={placeholder}/>
                </div>)
              } 
              {/* </div>
            </div> */}
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" checked/>
              <label className="form-check-label" for="form2Example3">
                Subscribe to our newsletter
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign up
            </button>
            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
