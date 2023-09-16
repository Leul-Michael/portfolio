type ContactTemplateProps = {
  name: string
  email: string
  intersted_in: string
  budget: string
  details: string
}

const ContactTemplate = ({
  name,
  email,
  intersted_in,
  budget,
  details,
}: ContactTemplateProps) => {
  return (
    <div
      style={{
        display: "grid",
        gap: "0.25rem",
      }}
    >
      <h1>Hello from {name}</h1>
      <p>
        At <span style={{ fontWeight: "bold" }}>{email}</span>
      </p>
      <p>
        Intersted in <span style={{ fontWeight: "bold" }}>{intersted_in}</span>
      </p>
      <p>
        My Budget <span style={{ fontWeight: "bold" }}>{budget}</span>
      </p>
      <p>More info</p>
      <p>{details}</p>
    </div>
  )
}

export default ContactTemplate
