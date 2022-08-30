import React from 'react';
import EmployeeCard from '../components/EmployeeCard';

function Section3() {
  return (
    <section className="text-center items-center my-8">
      <h3 className="text-primaryblue mb-2 font-bold text-2xl text-center">
        Nosso Time
      </h3>
      <div className="flex flex-wrap mx-auto justify-center">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </section>
  )
}

export default Section3;