import React from 'react';
import { Task } from '../types';
import { connect } from 'react-redux';
import { AppState } from '../store/reducer';
import { fetchTasks } from '../store/actions';

interface OwnProps {}

interface StateProps {
  tasks: Task[];
}

interface DispatchProps {
  fetchTasks: () => void;
}

interface AllProps extends StateProps, DispatchProps, OwnProps {}

export class TasksList extends React.Component<AllProps> {
  onClick = () => {
    const { fetchTasks } = this.props;
    fetchTasks();
  };

  render() {
    const { tasks } = this.props;
    return (
      <div>
        <ul>
          {tasks.map((task, index) => {
            return <li key={index}>{task.title}</li>;
          })}
        </ul>
        <button onClick={this.onClick}>Fetch Tasks</button>
      </div>
    );
  }
}

export const ConnectedTasksList = connect<StateProps,
  DispatchProps,
  OwnProps,
  AppState>(state => ({ tasks: state.tasks }), dispatch => ({ fetchTasks: () => dispatch(fetchTasks()) }))(TasksList);
