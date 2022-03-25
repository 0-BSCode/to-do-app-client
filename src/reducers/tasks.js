export default (tasks=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...tasks, {name: action.payload, finished: false}];
        case 'DELETE':
            return tasks.filter(task => task.name != action.payload);
        case 'FINISHED':
            return tasks.map(task => task.name == action.payload? task.finished = !task.finished: '');
        default:
            return tasks;
    }
}