import Spinner from 'components/Common/Spinner';
import Toast from 'components/Common/Toast';
import HelloWorld from 'components/SampleApp/HelloWorld';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatus } from 'redux/actions/SampleActions';


const SamplePage = () => {
  const status = useSelector((state) => state.sample.status);
  const error = useSelector((state) => state.sample.error);
  const dispatch = useDispatch();

  React.useEffect(() => { dispatch(fetchStatus()); }, [dispatch]);

  if (!status && !error) { return <Spinner />; }
  else if (error) {
    return (
      <>
        <Toast message={error} type='error' />
        <HelloWorld status={error} />
      </>
    );
  }
  else { return <HelloWorld status={status} />; }
};

export default SamplePage;
