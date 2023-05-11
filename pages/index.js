import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';


const Homepage = () => { //components in react have caps, component = indepedent, reusable bit of code
  const router = useRouter();

  useEffect (() => {
    router.push('/vehicles');
  }, []);

  return <Layout> 

  </Layout>
} 
export default Homepage //export=make available to be imported elsewhere in your doc; what's the deault function repsonsible for the display of this page?

