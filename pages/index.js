// import React from 'react';
// import ReactDOM from 'react-dom';
// these react imports added behind the scenes writing it like this isn't needed for nextjs
import Layout from '../components/Layout'

function HomePage() {
  return <div className="w-fit">
   <Layout title="home page"> Home Page </Layout>

  </div>


}

export default HomePage
// must export homepage so nextJs knows where to find it