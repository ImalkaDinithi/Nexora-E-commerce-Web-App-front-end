import { useState } from "react";
import { Button } from "./ui/button";

function TestComponent() {
    // const [count, setCount] = useState(0);

    // const handleClick = () => {
    //    setCount(count + 1); 
       
    // };
    
    // return (
    //     <div className="px-4 lg:px-16 py-8 border border-black">
    //         <h1 className="text-2xl">{count}</h1>
    //         <button onClick={handleClick}>click me</button>
    //     </div>
    // );

   // const [user, setUser] = useState({ name: "John", age: 20 });
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleClick = () => {
    // setUser({...user, age:25});
    setNumbers([...numbers, 6]);
  };

  return (
    <div className="px-4 lg:px-16 py-8 border border-black">
      {numbers.map((number) => (
        <h1 key={number} className="text-2xl">
          {number}
        </h1>
      ))}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );

}

export default TestComponent;