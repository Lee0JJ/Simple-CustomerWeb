import React, { useEffect, useState } from 'react';
import { fetchCustomers } from '../controllers/customerController';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomerList = async () => {
            try {
                const data = await fetchCustomers();
                console.log(data);
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };
        fetchCustomerList();
    }, []);

    // Event handler for customer row click
    const handleCustomerClick = (customerId) => {
        // Navigate to customer edit page with customer ID
        window.location.href = `/customer-edit/${customerId}`;
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow">
                <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <a href="/" className="text-xl font-bold text-gray-800">My Website</a>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
                    </ul>
                </nav>
            </header>
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Customer DB</h1>
                <div className='flex justify-end'>
                    <button onClick={() => window.location.href = "/customer-add"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Customer
                    </button>
                </div>

                <div>
                    <h1>Customer List</h1>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">IC Number</th>
                                <th className="px-4 py-2">Date of Birth</th>
                                <th className="px-4 py-2">Address</th>
                                <th className="px-4 py-2">Country</th>
                                <th className="px-4 py-2">Postcode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id} onClick={() => handleCustomerClick(customer.id)}>
                                    <td className="border px-4 py-2">{customer.id}</td>
                                    <td className="border px-4 py-2">{customer.name}</td>
                                    <td className="border px-4 py-2">{customer.ic_number}</td>
                                    <td className="border px-4 py-2">{customer.date_of_birth}</td>
                                    <td className="border px-4 py-2">{customer.address}</td>
                                    <td className="border px-4 py-2">{customer.address_country}</td>
                                    <td className="border px-4 py-2">{customer.address_postcode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer className="bg-gray-200 py-4">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    &copy; 2024 My Website. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default CustomerList;