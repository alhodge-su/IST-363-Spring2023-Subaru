import { useState } from 'react';
import Button from '../components/Button'; //everything about button component from some path in quotes
import CarColorPicker from '../components/CarColorPicker';
import Header from '../components/Header';
import Image from 'next/image';
import Layout from '../components/Layout';
import LocationPicker from '../components/LocationPicker';
import SectionCTA from '../components/SectionCTA';
import Showcase from '../components/Showcase';

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
    <Showcase />
    <LocationPicker />
    <CarColorPicker colors={colors} />
    <SectionCTA />
  </Layout>
} 
export default Homepage //export=make available to be imported elsewhere in your doc; what's the deault function repsonsible for the display of this page?

