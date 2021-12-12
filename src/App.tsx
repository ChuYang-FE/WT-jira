import React from 'react';
import { Login } from './screens/login';
import { ProjectListScreen } from './screens/project-list';
import { TsReactTest } from './screens/ts-test';

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen />
      <hr />
      <TsReactTest />
      <hr /> */}
      <Login />
    </div>
  );
}

export default App;
