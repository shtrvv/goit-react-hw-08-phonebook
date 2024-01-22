import { useDispatch, useSelector } from "react-redux";
import { Label, Input } from "./Filter.styled";
import { setFilter } from "../../redux/contacts/filterSlice";
import { selectFilter } from "../../redux/contacts/selectors";

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  }

  return (
      <Label>
          Find contacts by name
          <Input type="text" onChange={handleChangeFilter} value={filter} />
      </Label>
  )
}

export default Filter
