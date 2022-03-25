export default (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, {name: action.payload, finished: false}];
        case 'DELETE':
            return state.filter(task => task.name != action.payload);
        case 'FINISHED':
            return state.map(task => task.name == action.payload? {name: task.name, finished: !task.finished}: task);
        default:
            return state;
    }
}