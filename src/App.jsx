import './App.css'
import ContactItem from './components/ContactItem';

function App() {
  const contacts = [
    {id: 1, name: 'João', phone: '(69) 98877-4455', mail: "joaoemail@mail.com"},
    {id: 2, name: 'Abner', phone: '(69) 98521-5475', mail: "abneremail@mail.com"},
    {id: 3, name: 'Kaiky', phone: '(69) 98414-5174', mail: "kaikyemail@mail.com"},
  ];
  
  return (
    <>
     <h1>Agenda de Contatos</h1> 
     <ContactItem contacts = {contacts}></ContactItem>
    </>
  )
}

export default App
