import React, { useState } from 'react';
import EmailScreen from '../components/Onboarding/EmailScreen';
import OtpScreen from '../components/Onboarding/OtpScreen';
import PasswordScreen from '../components/Onboarding/PasswordScreen';
import Form from '../components/Onboarding/Form';

export default function App() {
const [steps, setSteps] = useState(1)
const handleNext = () => {
  setSteps(prevSteps => prevSteps + 1);
};

  return (
    <>
    {steps ===1 && <EmailScreen  handleNext={handleNext}/>}
    {steps ===2 && <OtpScreen handleNext={handleNext} />}
    {steps ===3 && <PasswordScreen  handleNext={handleNext}  />}
    {steps ===4 && <Form  handleNext={handleNext} />}
    
    </>
  );
}

