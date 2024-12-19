    import React, { useEffect, useState } from 'react';

    const ResponsePage = () => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000'); // WebSocket server URL

        socket.onopen = () => {
        console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log("message  ",message);
        

        if (message.action === 'approved') {
            // setResponse({ action: 'approved', amount: message.amount });
            // Redirect to the checkout page
            window.location.href = `/checkout?amount=${message.amount}&user=${message.user}`;
        } else if (message.action === 'rejected') {
            setResponse({ action: 'rejected' });
            // Redirect to the reject page
            window.location.href = '/reject';
        }
        };

        socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
        };

        return () => {
        socket.close();
        };
    }, []);

    return (
        <div>
        {response && response.action === 'approved' ? (
            <p>Your request has been approved. Redirecting to checkout...</p>
        ) : response && response.action === 'rejected' ? (
            <p>Your request has been rejected. Redirecting...</p>
        ) : (
            <p>Waiting for response...</p>
        )}
        </div>
    );
    };

    export default ResponsePage;
