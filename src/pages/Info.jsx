import { useEffect } from 'react';

function Info() {
  useEffect(() => {
    window.location.href = '/notfound';
  }, []);

  return (
    <div className="Info">
      <h1>Informações</h1>
    </div>
  );
}
export default Info;