import { useSearch } from "../hooks/useSearch";

const ProductListPage = () => {
  const { searchParams, handleSortValueChange } = useSearch();
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fafbfc",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 20, color: "#333" }}>
        Product List Page
      </h1>
      <ul style={{ listStyle: "none", padding: 0, marginBottom: 24 }}>
        <li style={{ marginBottom: 8 }}>
          <strong>Sort:</strong> {searchParams.get("sort")}
        </li>
        <li>
          <strong>Name:</strong> {searchParams.get("name")}
        </li>
      </ul>

      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <button
          onClick={() => handleSortValueChange("popular")}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Sort by popularity
        </button>
        <button
          onClick={() => handleSortValueChange("price-desc")}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Sort by price descending
        </button>
        <button
          onClick={() => handleSortValueChange("price-asc")}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Sort by price ascending
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
