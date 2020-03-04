import React, { useState, useCallback } from "react";
import Title from "../Title/Title";
import Count from "./../Count/Count";
import Button2 from "./../Button2/Button2";

function ParentComponent() {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(5000);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button2 onClick={handleAge}>increment age</Button2>
      <Count text="salary" count={salary} />
      <Button2 onClick={handleSalary}>increment salary</Button2>
    </div>
  );
}

export default ParentComponent;
