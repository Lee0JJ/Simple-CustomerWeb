const fetchCustomers = async () => {
    try {
        const response = await fetch('http://localhost:3001/customers');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching customers:', error);
    }
};

const fetchCustomerById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/customers/${id}`);
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Error retrieving customer:', error);
    }
}

const createCustomer = async (customerData) => {
    try {
        const response = await fetch('http://localhost:3001/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerData)
        });
        return response;
    } catch (error) {
        console.error('Error creating customer:', error);
    }
};

const updateCustomer = async (id, customerData) => {
    try {
        const response = await fetch(`http://localhost:3001/customers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerData)
        });
        return response;
    } catch (error) {
        console.error('Error updating customer:', error);
    }
};

const deleteCustomer = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/customers/${id}`, {
            method: 'DELETE',
        });
        return response;
    } catch (error) {
        console.error('Error deleting customer:', error);
    }
};

export { fetchCustomers, fetchCustomerById, createCustomer, updateCustomer, deleteCustomer};