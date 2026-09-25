import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:jamesallen.villamor@cit.edu" text="jamesallen.villamor@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/al-jayy" text="github.com/al-jayy" />
        {/* <ContactLink label="LinkedIn" href="https://linkedin.com/in/juandelacruz" text="linkedin.com/in/juandelacruz" /> */}
      </ul>
    </section>
  )
}

export default ContactSection