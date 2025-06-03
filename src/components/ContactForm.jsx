import { useState } from "react";
import "./ContactForm.css";

function ContactForm({ onAdd, onClose, initialData = {} }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: initialData.id,
      name: name,
      phone: phone,
      email: email,
    };

    onAdd(newContact);
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        type="text"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        placeholder="Fone"
        type="tel"
        required
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <input
        placeholder="E-mail"
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <div className="button-group">
        <button type="submit">Adicionar</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
