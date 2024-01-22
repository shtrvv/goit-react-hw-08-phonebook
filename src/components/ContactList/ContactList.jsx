import { useDispatch, useSelector } from "react-redux";
import { List, Item, Contact, Number, Button } from "./ContactList.styled";
import { selectFilteredItems } from "../../redux/contacts/selectors";
import { deleteContactThunk } from "../../redux/contacts/contactsThunks";
import Notiflix from "notiflix";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredItems);
  
  const handleDelete = (id) => {
    dispatch(deleteContactThunk(id));
  }

  return (
    <List>
      {filteredContacts.map(({id, name, number}) => {
        return (
          <Item key={id}>
            <Contact>{name}: <Number>{number}</Number></Contact>
            <Button type="button" onClick={() => {
              Notiflix.Notify.info(`${name} deleted`)
              return handleDelete(id)
            }}>Delete</Button>
          </Item>
            )
      })}
      </List > 
  )
}

export default ContactList
