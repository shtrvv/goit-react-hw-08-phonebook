import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContactsThunk } from '../redux/contacts/contactsThunks';
import { selectItems } from '../redux/contacts/selectors';

const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectItems);

    useEffect(() => {
    dispatch(fetchContactsThunk());
    }, [dispatch])
    
    return (
        <>
            <Section title={'Phonebook'}>
                <ContactForm />
            </Section>  
            <Section title={'Contacts'}>
                <Filter />
                {contacts?.length ?
                <ContactList />
                    :
                <Notification message={'There are no contacts'} />
                }
            </Section>  
        </>
    )
}

export default Contacts