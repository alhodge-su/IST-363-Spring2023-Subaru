import Button from '../components/Button'; //everything about button component from some path in quotes
import Header from '../components/Header';
import Image from 'next/image';
import Layout from '../components/Layout';
import Swatch from '../components/Swatch';

import { getAllVehicles, getAllColors } from '../lib/api';

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = getAllVehicles();
  const colors = getAllColors();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data, 
      colors
    }
  }
}

const Homepage = ({data, colors}) => { //components in react have caps, component = indepedent, reusable bit of code
  return <Layout> 
    <h1>Homepage</h1>
    <h2>Color picker</h2>
    <div>
      Large image goes here.
    </div>
    <ul>
      {colors.map((color) => {
        return <Swatch color={color} />
      })}
    </ul>
    <h3>Color name</h3>
    
    </Layout>
} 
export default Homepage //export=make available to be imported elsewhere in your doc; what's the deault function repsonsible for the display of this page?

