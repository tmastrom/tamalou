import type { NextPage } from 'next'
import * as React from 'react';
import BasicTabs from '../components/BasicTabs';
import Button from '@mui/material/Button';

type HomeProps = {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: NextPage = (props: HomeProps) => {
  return (
    <>
      <BasicTabs /> 
      {/* <Button onClick={props.toggleTheme}>
        Toggle Theme
      </Button> */}
    </>
  )
}

export default Home
