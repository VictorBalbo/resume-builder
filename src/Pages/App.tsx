import React, { useRef } from 'react';
import { CvPreview } from '../Components/Preview/CvPreview';
import { useReactToPrint } from 'react-to-print';
import './App.scss';
import data from '../data.json'
import { CV } from '../Models';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const resume = data as CV;

  const saveToPdf = useReactToPrint({
    content: () => componentRef.current
  })
  return (
    <div className='app'>
      <button onClick={saveToPdf}>Print</button>
      <CvPreview resume={resume} ref={componentRef} />
    </div>
  );
}

export default App;
