import { useEffect } from 'react';

function Settings() {
  useEffect(() => {
    window.location.href = '/notfound';
  }, []);

  return (
    <div className="Settings">
      <h1>Settings</h1>
    </div>
  );
}

export default Settings;