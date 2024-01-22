import { Form, Label, Input, Button } from "./ContactForm.styled";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/contacts/selectors";
import { addContactThunk } from "../../redux/contacts/contactsThunks";
import Notiflix from 'notiflix';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectItems);

    const [data, setData] = useState({
        name: '',
        number: '',
    })

    const handleChange = ({target:{name, value}}) => {
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isExist = contacts?.find(({name}) => name.toLowerCase() === data.name.toLowerCase());
        if (isExist) {
            return Notiflix.Notify.failure(`${data.name} is already exist`);
        }

        Notiflix.Notify.success(`${data.name} add to contacts`);
        dispatch(addContactThunk(data));

        setData({
            name: '',
            number: '',
        });
    }

    return (
      <Form onSubmit={handleSubmit}>
        <Label>Name
            <Input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Alex" required />
        </Label>
        <Label>Number
            <Input type="tel" name="number" value={data.number} onChange={handleChange} placeholder="123-45-67" required />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    )
}

export default ContactForm
