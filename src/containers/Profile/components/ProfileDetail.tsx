import React from 'react';

interface IProfileDetailProps {
  header: string;
  value: string;
}

const ProfileDetail = (props: IProfileDetailProps) => {
  return (
    <div className="my-2">
      <p className="lh-10 font-weight-bold">{props.header}</p>
      <p className="lh-0">{props.value}</p>
    </div>
  );
};

export default ProfileDetail;
