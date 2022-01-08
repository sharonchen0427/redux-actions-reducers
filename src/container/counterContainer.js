import { connect } from 'react-redux'
import Counter from '../component/counter'
import { increment, decrement, reset } from '../actions';
//providing Redux’s state to react component −
//get methos from actions,assign to 3 key words
//comp can de-structure methods from props
const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);