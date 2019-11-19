import React from "react";
import { toast } from "react-toastify";
import Container from "../../components/Container";
import Formulario from "../../components/Formulario";
import List from "../../components/List";
import Header from "../../components/Header";

import api from "../../services/api";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.loadTasks.bind(this);
    this.handleCreate.bind(this);
    this.handleUpdate.bind(this);
  }

  state = {
    tasks: []
  };

  componentDidMount() {
    this.loadTasks();
  }

  async loadTasks() {
    try {
      const { data } = await api.get("/");

      this.setState({
        tasks: data
      });
    } catch (e) {
      toast.error("Não foi possível carregar as tasks");
    }
  }

  async handleCreate(description) {
    try {
      const { data } = await api.post("/", { description, done: false });
      toast.success("Task adicionada com sucesso!");
      this.setState({
        tasks: [data, ...this.state.tasks]
      });
    } catch (e) {
      toast.error("Não foi possível criar a task");
    }
  }

  async handleUpdate(task) {
    try {
      await api.put(`/${task._id}`, { ...task, done: !task.done });
      toast.success("Task atualizada com sucesso!");

      const newTasks = this.state.tasks.map(t => {
        if (t._id === task._id) {
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      });

      this.setState({ tasks: newTasks });
    } catch (e) {
      toast.error("Não foi possível atualizar a task");
    }
  }

  render() {
    const { tasks } = this.state;
    return (
      <Container>
        <Header />
        <Formulario onSubmit={description => this.handleCreate(description)} />
        <List tasks={tasks} onClick={task => this.handleUpdate(task)} />
      </Container>
    );
  }
}
