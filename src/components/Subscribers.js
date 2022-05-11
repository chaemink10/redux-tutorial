import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/subscribers/actions';

const Subscribers = ({ count, addSubscriber }) => {
  const onAddSubscriber = () => {
    addSubscriber();
  };

  return (
    <div className='items'>
      <h3>구독자 수 : {count}</h3>
      <button onClick={onAddSubscriber}>구독하기</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSubscriber: () => dispatch(addSubscriber()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);