    function Sidebar({
    selectedCategory,
    setSelectedCategory,
    }) {

    const categories = [
        {
        name: "All",
        icon: "🍽️",
        },
        {
        name: "Burgers",
        icon: "🍔",
        },
        {
        name: "Pizza",
        icon: "🍕",
        },
        {
        name: "Pasta",
        icon: "🍝",
        },
        {
        name: "Desserts",
        icon: "🍰",
        },
        {
        name: "Drinks",
        icon: "🥤",
        },
    ];

    return (
        <aside className="sidebar">

        <h3>Catégories</h3>

        {categories.map((category) => (

            <button
            key={category.name}
            className={
                selectedCategory === category.name
                ? "active"
                : ""
            }
            onClick={() =>
                setSelectedCategory(category.name)
            }
            >

            <span>
                {category.icon}
            </span>

            {category.name}

            </button>

        ))}

        </aside>
    );
    }

    export default Sidebar;