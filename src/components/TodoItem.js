import { Button, Col, Input, Row } from 'antd';
import React, { useState } from 'react';

function TodoItem(props) {
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const { item, deleteTodo, editTodo } = props;

  return (
    <>
      {isEdit ?
        <Row>
          <Col span={17}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </Col>
          <Col span={7}>
            <Row justify="end">
              <Button onClick={() => { editTodo(item.id, inputValue); setIsEdit(false); }}>Done</Button>
            </Row>
          </Col>
        </Row>
        :
        <Row>
          <Col span={14}>
            {item.task}
          </Col>
          <Col span={5}>
            <Row justify="end">
              <Button onClick={() => { setIsEdit(true); setInputValue(item.task); }}>Edit</Button>
            </Row>
          </Col>
          <Col span={5}>
            <Row justify="end">
              <Button onClick={() => deleteTodo(item.id)} danger>Delete</Button>
            </Row>
          </Col>
        </Row>}
    </>
  );
}

export default TodoItem;
