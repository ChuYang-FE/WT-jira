import React from 'react';
import { ProjectListScreen } from './screens/project-list';
import { TsReactTest } from './screens/ts-test';

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      <hr />
      <TsReactTest />
    </div>
  );
}

export default App;
