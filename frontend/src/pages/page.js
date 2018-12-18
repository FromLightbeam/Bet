import React from 'react';
// import Footer from '../components/common/Footer';
import Header from '../components/common/Header';


const Page = props => {
  const { children } = props;
  return (
    <div className="HolyGrail">
      <Header />
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
