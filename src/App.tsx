import { create } from 'zustand';

type UIState = { appName: string };
const useUI = create<UIState>(() => ({ appName: 'Obscura' }));

export default function App() {
  const appName = useUI((s) => s.appName);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-950 text-slate-100'>
      <main className='text-center space-y-4'>
        <h1>We are {appName}.</h1>
        <h3>Keeping your passwords secret is our purpose!</h3>
      </main>
    </div>
  );
}
