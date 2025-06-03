import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete, onEdit }) {
  return (
    <div>
      {contacts.map((item) => {
        return (
          <ContactItem
            key={item.id}
            id={item.id}
            name={item.name}
            phone={item.phone}
            email={item.email}
            onDelete={onDelete}
            onEdit={() => onEdit(item)}
          />
        );
      })}
    </div>
  );
}

export default ContactList;
