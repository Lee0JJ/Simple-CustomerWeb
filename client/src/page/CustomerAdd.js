import React, { useState } from 'react';
import { createCustomer } from '../controllers/customerController';

const CustomerAdd = () => {
    const [customer, setCustomer] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get the form data
            const name = document.getElementById('name').value;
            const icNumber = document.getElementById('icNumber').value;
            const dateOfBirth = document.getElementById('dateOfBirth').value;
            const address = document.getElementById('address').value;
            const addressCountry = document.getElementById('addressCountry').value;
            const addressPostcode = document.getElementById('addressPostcode').value;

            // Create the customer object
            const customerData = {
                name,
                ic_number: icNumber,
                date_of_birth: dateOfBirth,
                address,
                address_country: addressCountry,
                address_postcode: addressPostcode
            };

            // Send the new customer data to the server
            const response = createCustomer(customerData);
            window.location.href = '/';
            alert('Customer created successfully:', response.data);
        } catch (error) {
            alert('Error creating customer:', error);
        }
    };

    // Render your component UI here

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
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input type="text" id="name" className="border border-gray-300 rounded-md px-3 py-2 w-full" defaultValue={customer?.name} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="icNumber" className="block text-gray-700 font-bold mb-2">IC Number</label>
                        <input type="text" id="icNumber" className="border border-gray-300 rounded-md px-3 py-2 w-full" defaultValue={customer?.ic_number} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                        <input type="date" id="dateOfBirth" className="border border-gray-300 rounded-md px-3 py-2 w-full" defaultValue={customer?.date_of_birth?.slice(0, 10)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                        <textarea id="address" className="border border-gray-300 rounded-md px-3 py-2 w-full" rows="3" defaultValue={customer?.address}></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="addressCountry" className="block text-gray-700 font-bold mb-2">Country</label>
                        <select id="addressCountry" className="border border-gray-300 rounded-md px-3 py-2 w-full" defaultValue={customer?.address_country}>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Singapore">Singapore</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="addressPostcode" className="block text-gray-700 font-bold mb-2">Postcode</label>
                        <input type="text" id="addressPostcode" className="border border-gray-300 rounded-md px-3 py-2 w-full" defaultValue={customer?.address_postcode} />
                    </div>

                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                    </div>
                </form>
            </main>
            <footer className="bg-gray-200 py-4">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    &copy; 2024 My Website. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default CustomerAdd;
