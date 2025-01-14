import React from 'react';
import { Puff } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={styles.container}>
        <Puff 
            height="100"
            width="100"
            color='red'
            ariaLabel='Loading'
        />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
  },
};

export default Spinner;
