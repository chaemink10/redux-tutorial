import React from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux';

const Views = ({ count, addView }) => {
  const onAddView = () => {
    addView();
  };

  return (
    <div className='items'>
      <h3>조회수 : {count}</h3>
      <button onClick={onAddView}>조회하기</button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
  };
};

const mapDispatchToProps = {
  addView,
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
