// import './lessons/lesson-1/componentsAndCollection.js';
// import './lessons/lesson-2/style.js';
import { Button, Counter } from './lessons/lesson-3/eventAndStatus.js';

const App = () => {
  return (
    <>
      <p>lesson 3</p>
      <Button />
      <Counter step={5} initialValue={10}/>
    </>
  );
};

export default App;
