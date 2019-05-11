import React from 'react';

import { Icon } from 'antd';

const Page404 = () => (
  <div className="d-flex m-auto flex-column align-items-center justify-content-center p-5">
    <Icon type="deployment-unit" style={{ fontSize: '120px', color: '#ff4d4f' }} />
    <h1>404</h1>
    <h2>Page not found</h2>
  </div>
);

export default Page404;
