import React, { useState } from 'react';
import { Col, Row, List, Input, Button } from 'antd';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todoList, setTodoList] = useState([{ id: 1, task: "google" }]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodoList = [...todoList];
    newTodoList.push({ id: Math.round(Math.random() * 1000000), task: inputValue });
    setTodoList(newTodoList);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter(e => e.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <Row justify="center" >
      <Col span={6} style={{ border: "1px solid salmon" }} style={{ border: "1px solid salmon" }}>
        <Row>
          <Col span={20}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </Col>
          <Col span={4}>
            <Button onClick={addTodo} style={{ width: "100%" }}>Add</Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <List
              size="small"
              header={<div>Todo List</div>}
              bordered
              dataSource={todoList}
              renderItem={item => (
                <List.Item>
                  <TodoItem item={item} deleteTodo={deleteTodo} />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default App;