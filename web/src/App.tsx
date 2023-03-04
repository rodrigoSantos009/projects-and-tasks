import { Header } from './components/Header';
import { ProjectList } from './components/ProjectList';
import { TaskList } from './components/TaskList';
import './styles/global.css'

export function App() {
    return (
      <div className='w-screen h-screen justify-center items-center'>
          <Header />
         <div className='w-full justify-center items-center'>
          <ProjectList />
          <TaskList />
         </div>
      </div>
    );
}

