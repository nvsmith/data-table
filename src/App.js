import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function App() {
    const API_URL = "https://jsonplaceholder.typicode.com/";
    const [requestType, setRequestType] = useState("users");
    // Data received from API
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${API_URL}${requestType}`);
                if (!response.ok) throw Error("Did not receive expected data");
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchItems();
    }, [requestType]);

    return (
        <div className="App">
            <Form
                requestType={requestType}
                setRequestType={setRequestType}
            />
            <List items={items} />
        </div>
    );
}
export default App;

// Chapt 15
