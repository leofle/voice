import React, { Component, Fragment } from 'react';
import './style.scss';

const statusMap = {
    Pending: 3,
    Done: 5,
    Open: 1
};

class TodoWidget extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {tasks} = this.props;
        
        const sortedTasks = tasks.sort((taskA, taskB) => {
            return statusMap[taskA.status] - statusMap[taskB.status];    
        });

        return (
				<div className={'todo'}>
                    <div>    
                        <div>TODO</div>
                        {
                            tasks.map(task => {
                                return <div key={task.title} className={`tasks${task.isNew ? ' new' : ''}`}>
                                    <span>{task.title}</span>
                                    <span className={'task-status'}>
                                        {task.status}
                                        <span className={`circle ${task.status.toLowerCase()}`} />
                                    </span>
                                </div>;
                            })
                        }
                    </div>
				</div>
			)
    }
}
export default TodoWidget;
