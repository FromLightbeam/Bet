import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ReduxToastr from 'react-redux-toastr';


const Page = props => {
  const { children } = props;
  return (
    <div className="HolyGrail">
      <ReduxToastr closeOnToastrClick={true} />
      <Header />
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
