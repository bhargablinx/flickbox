import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (URL === "") return;
        fetch(URL)
            .then((res) => res.json())
            .then((data) => data["Search"])
            .then((data) => setData(data));
    }, [URL]);
    return data;
};

export default useFetch;
