import { useState } from 'react';
import CardNumber from 'components/card-number';
import WhiteCircle from 'components/white-circle';
import background from 'assets/background.svg';
import benepassLogo from 'assets/benepass-logo.svg';
import visaLogo from 'assets/visa-logo.svg';

function Content() {
  const [isShowingDetails, setIsShowingDetails] = useState(false);
  const cardNumberString = '1232 2223 4432 1732';
  const cardNumberArray = cardNumberString.split(' ');
  const cvcNumber = '345';
  
  return (
    <div className='max-w-screen-lg mx-auto p-2 sm:p-4'>
      
      <h1 className='mt-7 leading-8 font-semibold text-[26px]'>Flex card</h1>
      <h2 className='mb-7 text-xl leading-8'>Used for pre-tax purchases</h2>
      
      <div
        className='p-6 text-white flex flex-col justify-between mb-3 drop-shadow-lg bg-cover max-w-[392px] h-[272px] rounded-[20px] '
        style= {{backgroundImage: `url(${background})`}}
      >
        <div className='grid gap-4 sm:gap-6'>
          <div className='flex justify-between items-center'>
            <img src={benepassLogo} alt="benepass Logo"/>
            <div className='py-1 px-3 bg-white font-semibold rounded-[40px] text-[#211C5C]'>
              Virtual
            </div>
          </div>
          
          <CardNumber isShowingDetails={isShowingDetails} cardNumberArray={cardNumberArray}/>
          
          <div className='flex gap-7 font-semibold'>
            <div>
              <div className='text-xs text-[#D3D2DE]'>VALID THRU</div>
              <div className='text-lg leading-6'>8/28</div>
            </div>
            <div>
              <div className={`text-xs text-[#D3D2DE] ${isShowingDetails ? '' : 'mb-2.5'}`}>CVC</div>
              {
                isShowingDetails ?
                <div className='text-lg leading-6'>{cvcNumber}</div> :
                <figure className='flex gap-1.5' aria-label='Hidden CVC number'>
                  <WhiteCircle />
                  <WhiteCircle />
                  <WhiteCircle />
                </figure>
              }
            </div>
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          <div className='text-lg leading-6'>ZIP 66062</div>
          <img src={visaLogo} alt='visa logo'/>
        </div>
      </div>
      
      <div className='flex gap-3 items-center'>
        <input
          id='show-details'
          className={`w-5 h-5 ${isShowingDetails ? 'accent-[#ED0E61]' : 'accent-[#9EA6B4'}`}
          type="checkbox"
          onChange= {() => setIsShowingDetails(!isShowingDetails)}
        />
        <label htmlFor="show-details" className={isShowingDetails ? 'text-[#ED0E61] font-semibold' : 'text-[#383B43]'}>
          Show details
        </label>
      </div>
      
      <div className='sr-only' aria-live='polite'>
        {isShowingDetails && <>Card Number: {cardNumberString}. CVC Number: {cvcNumber}.</>}
      </div>
      
    </div>
  );
}

export default Content;