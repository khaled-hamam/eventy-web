import React from 'react';
import { Button } from 'antd';

interface ISubmitButtonProps {
  onSubmit: (event: any) => void;
}

const SubmitButton = (props: ISubmitButtonProps) => (
  <Button
    shape="round"
    className="eventy-btn"
    type="primary"
    onClick={props.onSubmit}
    style={{ minWidth: '200pt' }}
  >
    Submit
  </Button>
);

export default SubmitButton;
