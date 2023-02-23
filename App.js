import { View, Text } from 'react-native'
import React, {useState} from 'react';
import Home from './src/components/Home';
import Onboard from './src/components/Onboard'

const App = () => {
    const [showOnboard, setShowOnboard] = useState(true);
  
    const handleOnboardFinish = () => {
      setShowOnboard(false);
    };
  
    return (
      <>
        {showOnboard && <Onboard handleDone={handleOnboardFinish} />}
        {!showOnboard && <Home />}
      </>
    );
  };
  
  export default App;