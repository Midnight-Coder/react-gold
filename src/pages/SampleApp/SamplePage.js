import Spinner from 'components/Common/Spinner';
import Toast from 'components/Common/Toast';
import HelloWorld from 'pages/SampleApp/components/HelloWorld';
import { fetchSampleStatus } from 'pages/SampleApp/SamplePage.redux';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function SamplePage() {
  const response = useSelector((state) => state.sample.status.response);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSampleStatus.ignite());
  }, [dispatch]);

  if (!response || response.isLoading) {
    return (<Spinner />);
  }
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
  else {
    return <HelloWorld status={response.status} />;
  }
}
