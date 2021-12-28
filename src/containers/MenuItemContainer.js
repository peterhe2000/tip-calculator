import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { bindActionCreators } from 'redux';
import { removeItem, updatePrice, updateQuantity } from '../store/items/actions';

// 2 arg ownProps is the MenuItem, you can get uuid from there.
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid),
      updatePrice: (price) => updatePrice(ownProps.uuid, price),
      updateQuantity: (quantity) => updateQuantity(ownProps.uuid, quantity)
    }, dispatch);
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
