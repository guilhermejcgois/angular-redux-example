import { TaskList } from './api/task/task.model';

export interface AppState {
  tasks: TaskList;
}

export const INITIAL_STATE: AppState = {
  tasks: [
    {
      id: 'TSK01',
      title: 'Run todo app',
      description: 'Need help? What about $ ng s ?',
      completed: true
    },
    {
      id: 'TSK02',
      title: 'Implement TODO itens spread by code',
      description: 'Search by TODOs marks on the code',
      completed: false
    },
    {
      id: 'TSK03',
      title: 'Create clear feature',
      description: 'Implement an action for this',
      completed: false
    },
    {
      id: 'TSK04',
      title: 'Apply FSA to actions',
      description: 'Could be a good idea to use Flux Standard Action on your actions shape',
      completed: false
    },
    {
      id: 'TSK05',
      title: 'Implement a task loader',
      description: 'You can store your data at mocky.io, use redux-observable to deal with it',
      completed: false
    },
    {
      id: 'TSK06',
      title: 'Implement task validation with redux-observable',
      description: 'Probably is a bood idea update the task model to have some flags, like saving.',
      completed: false
    },
    {
      id: 'TSK07',
      title: 'Enable tagging feature for tasks',
      description: 'Make a state for all tags, and a tag entry to task model (array with 0 or more)',
      completed: false
    },
    {
      id: 'TSK08',
      title: 'Implements tag search feature',
      description: 'Be creative on redux, it\'s time to shine!',
      completed: false
    },
    {
      id: 'TSK09',
      title: 'Fix some layout glitches',
      description: '',
      completed: false
    },
    {
      id: 'TSK10',
      title: 'Remove this default initial state',
      completed: false
    },
    {
      id: 'TSK11',
      title: 'Grab a beer/coffee/tea',
      description: 'You deserve it, you\'re awesome!',
      completed: false
    }
  ]
};
