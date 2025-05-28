import React, { useEffect, useRef, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function FirebaseDataViewer() {
  const [data, setData] = useState(null);
  const dataRef = useRef();

  useEffect(() => {
    const db = getDatabase();
    const dbRef = ref(db, '/'); // Adjust path as needed
    onValue(dbRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
      dataRef.current = value;
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Firebase Realtime Database Data</h2>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  );
}
