import React from 'react';
// import './greyLogo.scss';

const GreyLogo = () => {
  return (
    <div className='greyLogo' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '100px', backgroundColor: 'whitesmoke' }}>
      <img src="../../src/assets/apple-removebg-preview.png" alt="" style={{ width: '75px' }} />
      <img src="../../src/assets/amazon-removebg-preview (1).png" alt="" style={{ width: '75px' }} />
      <img src="../../src/assets/google-removebg-preview (1).png" alt="" style={{ width: '75px' }} />
      <img src="../../src/assets/netflix-removebg-preview.png" alt="" style={{ width: '75px' }} />
      <img src="../../src/assets/shopify-removebg-preview.png" alt="" style={{ width: '75px' }} />
      <img src="../../src/assets/spotify-removebg-preview.png" alt="" style={{ width: '75px' }} />
    </div>
  );
};

export default GreyLogo;

