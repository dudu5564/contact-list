import { useState } from "react"
import "./ContactForm.css";

function ContactForm({ onAdd, onClose }){
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
}

function handleSubmit(event){
    event.preventDefault(); // Evita que a pagina seja recarregada


const newContact = {
    name: name,
    phone: phone,
    email: email,
};

// Chama a função passa por props para salvar os dados
onAdd(newContact);

// Limpa os inputs
setName("");
setPhone("");
setEmail("");
}
return (
    <form onSubmit={handleSubmit} className="">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
        />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Fone" required />
        <input type="email" value={email} onChange={(e) =setEmail(e.target.value)} placeholder="E-mail" required />
        <button type="submit">Adicionar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
    </form>
)
