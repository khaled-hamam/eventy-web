import React from 'react';

import { Icon } from 'antd';

const Page404 = () => (
  <div className="d-flex m-auto flex-column align-items-center justify-content-center h-75 mt-5">
    <Icon type="deployment-unit" style={{ fontSize: '160px', color: '#ff4d4f' }} />
    <h1 className="font-weight-bold slogan mt-4">404</h1>
    <h2 className="font-weight-light slogan">Page not found</h2>
  </div>
);

export default Page404;
