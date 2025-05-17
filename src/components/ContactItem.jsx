function ContactItem({ name, phone, email }) {
 return (
 <div className="contact-card">
 <h2>{name}</h2>
 <p> {phone}</p>
 <p> {email}</p>
 <div className="button-group">
 <button>Edit</button>
 <button className="delete">Delete</button>
 </div>
 </div>
 );
}
export default ContactItem;