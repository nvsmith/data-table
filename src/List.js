import ListItem from "./ListItem";

const List = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <ListItem
                    key={item.id} // ID from API
                    item={item}
                />
            ))}
        </ul>
    );
};

export default List;
