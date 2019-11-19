import React, { useState } from "react";
import { Form, Input, Button } from "./styles";

export default function Formulario({ onSubmit, ...props }) {
  const [task, setTask] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit(task);
    setTask("");
  }

  return (
    <Form onSubmit={handleOnSubmit} {...props}>
      <Input
        onChange={e => setTask(e.target.value)}
        value={task}
        placeholder="Digite sua task"
        required
      />
      <Button>Adicionar</Button>
    </Form>
  );
}
