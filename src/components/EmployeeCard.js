import React from 'react';
import avatarImgs from '../assets/imgs/avatarImgs';

class EmployeeCard extends React.Component {
  render() {
    return (
      <div className="w-48 m-4 shadow-lg rounded-2xl p-4">
        <img className="rounded-full w-20 mx-auto" src={ avatarImgs[0] } alt="" />
        <div className="flex flex-col text-center mt-2">
          <h3 className="font-bold">Leonardo Diman</h3>
          <h4 className="text-xs px-2">CDO - Front End Director</h4>
        </div>
        <p className="text-xs text-center my-4 px-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur doloremque ullam officiis autem obcaecati expedita.
        </p>
      </div>
    )
  }
} 

export default EmployeeCard;