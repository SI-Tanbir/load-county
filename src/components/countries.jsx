import { useEffect, useState } from "react";

export default function Country() {
    const [count, setCount] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCount(data));
    }, []);

    return (
        <>
            {count.map((result, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "5px",
                        textAlign: "center",
                    }}
                >
                    <img
                        src={result.flags.png}
                        alt={`Flag of ${result.name.common}`}
                        width="100"
                    />
                    <h3>Name: {result.name.common}</h3>
                    <h4>
                        Language:{" "}
                        {result.languages
                            ? Object.values(result.languages).join(", ")
                            : "Not specified"}
                    </h4>
                    <p>Population: {result.population}</p>
                </div>
            ))}
        </>
    );
}
