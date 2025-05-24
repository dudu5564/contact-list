import { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";
function App() {
 const [contacts, setContacts] = useState([]);
 useEffect(() => {
 fetch("http://localhost:3001/contacts")
 .then(function(response) {
 return response.json();
 })
 .then(function(data) {
 setContacts(data);
 })
 .catch(function(error) {
 console.error("Erro ao buscar contatos:", error);
 });
 }, []);
 return (
 <div className="container">
 <h1>Agenda de Contatos</h1>
{/* Botão para mostrar o form */}
{!showForm && (<button onClick={() => setShowForm(true)}>Novo Contrato</button>)}

{/* Form visivel apenas de showForm for true */}

{showForm && (<contactForm onAdd={addContact} onClose={() => setShowForm(false)}/>)}
 <ContactList contacts={contacts} />
 </div>
 );
}
export default App;