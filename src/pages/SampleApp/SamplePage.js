import Spinner from 'components/Common/Spinner';
import Toast from 'components/Common/Toast';
import HelloWorld from 'components/SampleApp/HelloWorld';
import { fetchSampleStatus } from 'pages/SampleApp/SamplePage.redux';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORY_NAMES } from 'synthetic-redux';


const SamplePage = () => {
  const response = useSelector((state) => state.sample.status.response);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSampleStatus.ignite());
  }, [dispatch]);

  if (!response || response[CATEGORY_NAMES.IGNITE]) { return <Spinner />; }
  else if (response.exception) {
    return (<HelloWorld status='Missing API Configuration' />);
  }
  else if (response.error) {
    return (
      <>
        <Toast message={response.error} type='error' />
        <HelloWorld status='Error in API' />
      </>
    );
  }
  else { return <HelloWorld status={response.status} />; }
};

export default SamplePage;
