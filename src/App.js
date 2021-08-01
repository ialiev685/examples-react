// import './lessons/lesson-1/componentsAndCollection.js';
// import './lessons/lesson-2/style.js';
import { Button, Counter } from './lessons/lesson-3/eventAndStatus.js';
import Form from './lessons/lesson-4/Forms.jsx';

import dataOurTeam from './dataOurTeam/ourTeam.json';
import OurTeamlList from './OurTemaList/OurTeamList.jsx';

import CounterTwo from './CounterTwo';
import DropMenu from './DropMenu';

const App = () => {
  return (
    <>
      <p>lesson 3</p>
      <Button />
      <Counter step={5} initialValue={10} />
      <p>lesson 4</p>
      <Form />
      <p>practic saturday</p>
      <OurTeamlList data={dataOurTeam} />
      <p>Counter</p>
      <CounterTwo initialValue={5} />
      <p>DropMenu</p>
      <DropMenu />
    </>
  );
};

export default App;
