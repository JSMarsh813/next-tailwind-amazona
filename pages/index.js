// import React from 'react';
// import ReactDOM from 'react-dom';
// these react imports added behind the scenes writing it like this isn't needed for nextjs



import Layout from '../components/layout'
function HomePage() {
  return <div className="w-fit">
   <Layout title="home page"> Home Page </Layout>


   <section className="w-full bg-violet-900 ~ h-24 flex place-items-center justify-center">

          <h5 className="text-white text-2xl"> Adoptions Ahoy! </h5>
          <img src={"https://static.wikia.nocookie.net/southpark/images/e/e7/Guinea-pigs-stripe.png"} style={{height:"160px",
            paddingBottom:"27px",
            paddingLeft: "50px"}}/>

          
   </section>

  <section className="landingNamesSection">

       <h3 className="text-3xl font-medium py-4 text-center bg-slate-900 text-amber-300">Find the Purrfect Name</h3>

  
  </section>

     <section className="landingDescriptionsSection">

        <h3 className="text-3xl font-medium py-4 text-center bg-slate-900 text-amber-300">Find Tailor-fit Descriptions</h3>

     

    </section>

    <section className="landingSignUpSection">
        <h3 className="text-3xl font-medium py-4 text-center bg-slate-900 text-amber-300">Create a free profile to access extra features</h3>


   

    </section>

    <section className="LandingWantToHelpSection">
        <h3 className="text-3xl font-medium py-4 text-center bg-slate-900 text-amber-300">Want to Help?</h3>

        <p> Excellent! Pet profile Tailor is a community powered application by users like you.
        </p>

        <p>
          Do you want to help pets get adopted but you can’t volunteer or do you have ideas you want to share?
       </p>

         <p>
        Then add names, behavior descriptions, or share some cool pet profiles you find!
        </p>

    </section>

  </div>


}

export default HomePage
// must export homepage so nextJs knows where to find it