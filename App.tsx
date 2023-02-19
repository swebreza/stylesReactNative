/* eslint-disable prettier/prettier */
import { SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';
import ElevatedImage from './components/ElevatedImage';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
       <FlatCard/>
       <ElevatedCards/>
       <ElevatedImage/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
