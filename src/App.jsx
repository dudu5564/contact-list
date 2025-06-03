import "./App.css";
import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://localhost:3001/contacts");
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Erro ao buscar contatos:", error);
      }
    };
    fetchContacts();
  }, []);

  function addContact(newContact) {
    fetch("http://localhost:3001/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContact)
    })
      .then(response => response.json())
      .then(data => {
        setContacts(prev => [...prev, data]);
        setShowForm(false);
      })
      .catch(error => {
        console.error("Erro ao adicionar contato: ", error);
      });
  }

  function deleteContact(id) {
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (!response.ok) throw new Error("Erro ao deletar contato!");
        setContacts(prev => prev.filter(contact => contact.id !== id));
      })
      .catch(error => {
        console.error("Erro na requisição: ", error);
      });
  }

  function handleEdit(contact) {
    setEditingContact(contact);
  }

  function updateContact(updatedContact) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedContact)
    };

    fetch(`http://localhost:3001/contacts/${updatedContact.id}`, requestOptions)
      .then(res => res.json())
      .then(data => {
        setContacts(prev =>
          prev.map(contact =>
            contact.id === data.id ? data : contact
          )
        );
        setEditingContact(null);
      })
      .catch(err => console.error("Erro ao editar contato:", err));
  }

  return (
    <div className="container">
      <h1>Agenda de Contatos</h1>

      {!showForm ? (
        <button id="Novo Contato" onClick={() => setShowForm(true)}>
          Novo Contato
        </button>
      ) : (
        <ContactForm onAdd={addContact} onClose={() => setShowForm(false)} />
      )}

      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={handleEdit}
      />

      {editingContact && (
        <ContactForm
          initialData={editingContact}
          onAdd={updateContact}
          onClose={() => setEditingContact(null)}
        />
      )}
    </div>
  );
}

export default App;
