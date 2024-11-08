// HowToBuy.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HowToBuy = () => {
  return (
    <section className="how-to-buy py-5" id='buy'>
      <div className="container text-center">
        <h2 className="title">HOW TO BUY?</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="step-box p-2">
              {/* <div className="step-number">1</div> */}
              <p>Visit the official Phantom website to download and install the extension for your browser. After installation, fund your wallet by transferring SOL from an exchange or another wallet.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="step-box p-2">
              {/* <div className="step-number">2</div> */}
              <p>Go to a decentralized exchange (DEX) like Jupiter or Raydium. Visit the DEX website, click 'Connect Wallet,' and then choose Phantom.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="step-box p-2">
              {/* <div className="step-number">3</div> */}
              <p>To swap SOL for $MIBO, select SOL in the 'from' field and $MIBO in the 'to' field, using our contract address. Enter the desired token amount and click 'Swap.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="step-box p-2">
              {/* <div className="step-number">4</div> */}
              <p>Check your transaction status in Phantom under the 'Activity' tab or on Solscan using your Solana address. To import the token into Phantom, paste the contract address.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
