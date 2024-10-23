import React from 'react';
import emp1 from '/employee/worker1.webp';
import emp2 from '/employee/worker2.webp';
import emp3 from '/employee/worker3.webp';

const employees = [
    {
        id: 1,
        image: emp1,
        name: 'Jason',
        role: 'Customer',
    },
    {
        id: 2,
        image: emp2,
        name: 'Alice',
        role: 'Manager',
    },
    {
        id: 3,
        image: emp3,
        name: 'Michael',
        role: 'Engineer',
    },
];

function EmployeeCard() {
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center gap-10 mb-20 mt-20 text-center px-5">
                {employees.map((employee) => (
                    <div
                        key={employee.id}
                        className="employee-card w-80 p-5 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <div className="overflow-hidden rounded-t-lg">
                            <img
                                src={employee.image}
                                alt={employee.name}
                                className="w-full h-80 object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <p className="mt-5 text-2xl font-semibold">{employee.name}</p>
                        <p className="text-gray-500">{employee.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmployeeCard;