import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
// import List from "./List";
import Table from "./Table";

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
            <div id="sticky-container">
                <Header />
                <Form
                    requestType={requestType}
                    setRequestType={setRequestType}
                />
            </div>
            {/* <List items={items} /> */}
            <Table items={items} />
        </div>
    );
}
export default App;
