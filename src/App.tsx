import React, { useState } from "react";
import Layout from "./components/Layout";
import TodoCard from "./components/TodoCard";
import {
  withStyles,
  TextField,
  Card,
  CardContent,
  CardActions,
  CssBaseline,
  Typography
} from "@material-ui/core";

import { Task, Tasks } from "./types";

const styles = {
  form: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: "0"
  },
  selected: {
    textDecoration: "line-through"
  }
};

const iniState: Tasks = [
  {
    task: "Тестовое задание",
    isDone: false
  },
  {
    task: "Прекрасный код",
    isDone: true
  },
  {
    task: "Покрытие тестами",
    isDone: false
  }
];

export const App: React.FC = React.memo(() => {
  const [todos, setTodos] = useState({
    todo: [...iniState],
    filteredTodo: [],
    newTask: ""
  });
  const [clickedAll, setClickedAll] = useState(true);
  const [clickedActive, setClickedActive] = useState(false);
  const [clickedDone, setClickedDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos({ ...todos, newTask: e.target.value });
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todos.todo.unshift({ task: todos.newTask, isDone: false });
    setTodos({ ...todos, newTask: "" });
  };

  const checkDone = (task: Task) => {
    todos.todo[todos.todo.indexOf(task)].isDone = !todos.todo[
      todos.todo.indexOf(task)
    ].isDone;
    setTodos({ ...todos, newTask: "" });
  };

  const clearCompleted = () => {
    const cleared = todos.todo.filter((task) => {
      return task.isDone === !true;
    });

    setTodos({ ...todos, todo: cleared, newTask: "" });
  };

  const showAll = () => {
    setTodos({ ...todos, filteredTodo: [], newTask: "" });
    setClickedAll(true);
    setClickedActive(false);
    setClickedDone(false);
  };

  const showActive = () => {
    const active = todos.todo.filter((task) => {
      return task.isDone === !true;
    });

    setTodos({ ...todos, filteredTodo: active, newTask: "" });
    setClickedAll(false);
    setClickedActive(true);
    setClickedDone(false);
  };

  const showCompleted = () => {
    const completed = todos.todo.filter((task) => {
      return task.isDone === true;
    });
    setTodos({ ...todos, filteredTodo: completed, newTask: "" });
    setClickedAll(false);
    setClickedActive(false);
    setClickedDone(true);
  };

  return (
    <>
      <CssBaseline />

      <Layout>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          style={{
            color: "#ede1e1",
            fontStretch: "ultra-condensed"
          }}
        >
          todos
        </Typography>
        <Card>
          <CardContent style={{ borderBottom: "1px solid rgb(212, 212, 212)" }}>
            <form onSubmit={(e) => handleAdd(e)}>
              <TextField
                label="What needs to be done?"
                value={todos.newTask}
                onChange={handleChange}
                fullWidth
                style={{
                  margin: -12,
                  padding: 0,
                  marginLeft: 30
                }}
                InputProps={{ disableUnderline: true }}
              />
            </form>
          </CardContent>
        </Card>
        {todos.filteredTodo.length > 0
          ? todos.filteredTodo.map((todo, index) => (
              <TodoCard
                key={index}
                task={todo.task}
                isDone={todo.isDone}
                handleCheck={() => checkDone(todo)}
              />
            ))
          : todos.todo.map((todo, index) => (
              <TodoCard
                key={index}
                task={todo.task}
                isDone={todo.isDone}
                handleCheck={() => checkDone(todo)}
              />
            ))}
        <Card>
          <CardActions>
            <Typography
              color="textSecondary"
              style={{ marginRight: 80, marginLeft: 20 }}
            >
              {todos.filteredTodo.length > 0
                ? todos.filteredTodo.length
                : todos.todo.length}{" "}
              items left
            </Typography>

            <Typography
              color="textSecondary"
              style={{
                marginRight: 10,
                padding: 2,
                border: clickedAll ? "0.5px solid pink" : "white"
              }}
              onClick={showAll}
            >
              All
            </Typography>
            <Typography
              color="textSecondary"
              style={{
                marginRight: 10,
                padding: 2,
                border: clickedActive ? "0.5px solid pink" : "white"
              }}
              onClick={showActive}
            >
              Active
            </Typography>
            <Typography
              color="textSecondary"
              style={{
                marginRight: 10,
                padding: 2,
                border: clickedDone ? "0.5px solid pink" : "white"
              }}
              onClick={showCompleted}
            >
              Completed
            </Typography>
            <Typography
              color="textSecondary"
              style={{ marginLeft: 50 }}
              onClick={clearCompleted}
            >
              Clear Completed
            </Typography>
          </CardActions>
        </Card>
      </Layout>
    </>
  );
});

export default withStyles(styles)(App);
