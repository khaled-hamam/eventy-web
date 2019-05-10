import React from 'react';

const FormHeader = (props: any) => (
  <h5 className="card-header text-center" style={{ background: 'var(--primary-color)' }}>
    <strong style={{ color: 'white' }}>{props.children}</strong>
  </h5>
);

export default FormHeader;
