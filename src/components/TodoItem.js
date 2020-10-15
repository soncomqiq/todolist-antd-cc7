import { Button, Col, Row } from 'antd';
import React from 'react';

function TodoItem(props) {
  const { item, deleteTodo } = props;

  return (
    <>
      <Col span={17}>
        {item.task}
      </Col>
      <Col span={7}>
        <Row justify="end">
          <Button onClick={() => deleteTodo(item.id)} danger>Delete</Button>
        </Row>
      </Col>
    </>
  );
}

export default TodoItem;
