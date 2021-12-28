import { connect } from 'react-redux';
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

// if u do mapDispatchToProps with an object without argument, it will automatically map dispatch to props for u.
const mapDispatchToProps = {  
  onSubmit: (name, price) => addNewItem(name, price)
};

// a connect without argument is going pass in empty object for state props and then it will actually pass in dispatch as a prop to that object
export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm);
