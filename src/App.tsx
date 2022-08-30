import { IcoLink } from "./IcoLink";
import { ReactComponent as Logo } from './logo.svg'

function App() {
  return (
    <div className='bg-neutral-900 flex items-center justify-center flex-col h-screen'>
      <h1 className='text-6xl font-bold text-center text-white'>Ray Sato</h1>
      <h1 className='text-lg text-center text-white mt-2'>{'[Working on this page]'}</h1>
      <div className='mt-4 flex items-center justify-center flex-row'>
        <IcoLink icon={Logo} />
        <IcoLink icon={Logo} />
        <IcoLink icon={Logo} />
        <IcoLink icon={Logo} />
        <IcoLink icon={Logo} />
        <IcoLink icon={Logo} />
        <IcoLink icon={Logo} />
      </div>
    </div>
  );
}

export default App;
