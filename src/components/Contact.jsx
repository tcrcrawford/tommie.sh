import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || ''

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Contact</p>
        <h2>
          Interesse? <em style={{ color: '#94a3b8' }}>Neem contact op.</em>
        </h2>
        <p>
          Op zoek naar een engineer die zowel een solide webapplicatie bouwt als de cloud-infrastructuur
          erachter inricht? Stuur een bericht — ik reageer doorgaans binnen een werkdag.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="from_name">Naam</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Jan de Vries"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reply_to">E-mailadres</label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder="jan@bedrijf.nl"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Bericht</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Vertel me over uw uitdaging of vraagstuk..."
              required
            />
          </div>

          <div className="contact-form-footer">
            <button
              type="submit"
              className="btn btn-contact-primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Versturen…' : 'Stuur bericht'}
            </button>

            {status === 'success' && (
              <p className="form-feedback form-feedback--success">
                Bericht verzonden. Ik neem doorgaans binnen een werkdag contact op.
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-feedback--error">
                Er ging iets mis. Probeer het opnieuw of mail naar{' '}
                <a href="mailto:info@tommie.sh">info@tommie.sh</a>.
              </p>
            )}
          </div>
        </form>

      </div>
    </section>
  )
}
