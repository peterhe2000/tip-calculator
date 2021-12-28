import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { bindActionCreators } from 'redux';
import { removeItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownProps', ownProps);
  return bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid)
    }, dispatch);
};


export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem)
