import React, {  useRef, useState } from "react";
import "./contact.scss";
import ControlLng from "../../shared/controlLng/ControlLng";
import emailjs from "@emailjs/browser";

 
type Props = {};

const Contact = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //const [success, setSuccess] = useState(true);
  const isTrue = ControlLng();
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
     
    if (name.length > 0 && email.length > 0 && subject.length > 0 && message.length) {
      emailjs
        .sendForm(
          "service_2rdbkla",
          "template_mpxa1pa",
          form.current,
          "zTrobJPFAiOsQ127H"
        )
        .then(
          (result: any) => {
            alert(isTrue ?
              'Messaggio Inviato Correttamente Grazie Per Avermi Contattato'
              : 'Message sent thanks for your message'
            )
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
          //  setSuccess(true);
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    } else {
      alert(isTrue?
        'Inserisci i campi correttamente'
        : 'Please fill in all the fields'
      )
    }
  };

  return (<>
    

    <section className="mb-4 content-section">     
      <h2 className="h1-responsive font-weight-bold text-center my-4 menu animate__animated animate__bounceInRight">
        {isTrue ? "Contattami" : "Contact Me"}
      </h2>

      <p className="text-center w-responsive mx-auto mb-5 menu animate__animated animate__bounceInLeft">
        {isTrue
          ? "Hai qualche domanda? Non Esitare A Contattarmi"
          : "Do you have any questions? Please do not hesitate to contact me"}
      </p>

      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="form-control"
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    placeholder="John"
                  />
                  <label className="">
                    {isTrue ? "Il Tuo Nome" : "Your name"}
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="user_email"
                    className="form-control"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@gmial.com"
                  />
                  <label className="">
                    {isTrue ? "La Tua Email" : "Your email"}
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="user_subject"
                    className="form-control"
                    value={subject} onChange={(e)=>setSubject(e.target.value)}
                    placeholder="New Work Assignment"
                  />
                  <label className="">{isTrue ? "Oggetto" : "Subject"}</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control md-textarea"
                    value={message} onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                  <label>{isTrue ? "Il Tuo Messaggio" : "Your message"}</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <button type="submit" value={'Send'} onClick={sendEmail} className="btn btn-primary">
              {isTrue ? "Invia" : "Send"}
            </button>
          </div>
          <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>ROMA, 00178, ITA</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+39 373 8219139</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>developcisco@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>);
};

export default Contact;
