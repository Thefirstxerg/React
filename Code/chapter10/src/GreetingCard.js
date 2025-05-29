import React, { useState } from 'react';

function GreetingCard({ name }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      {showMessage && <p>Welcome to the site, {name}!</p>}
    </div>
  );
}

export default GreetingCard;
