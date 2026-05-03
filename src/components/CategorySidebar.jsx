"use client";

const CategorySidebar = ({ selectedCategory, setSelectedCategory }) => {
    const categories = ["All", "Story", "Tech", "Science"];

    return (
        <div className="w-60 bg-white p-4 rounded-xl shadow-sm">
            <h2 className="font-bold mb-3">Categories</h2>

            {categories.map((cat) => (
                <p
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer p-2 rounded ${selectedCategory === cat
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-200"
                        }`}
                >
                    {cat}
                </p>
            ))}
        </div>
    );
};

export default CategorySidebar;