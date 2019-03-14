import React, { useState } from "react";

const HomePage = props => {
  const [name, setName] = useState("Breno Martins");

  function handleCreateUser(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={handleCreateUser} />
    </div>
  );
};

export default HomePage;
