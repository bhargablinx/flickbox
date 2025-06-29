import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import SearchMovies from "./components/SearchMovies";
import useFetch from "./hooks/useFetch";

function App() {
    const [query, setQuery] = useState("");
    const [url, setUrl] = useState();

    return (
        <div className="h-screen">
            <header className="text-center mx-2 md:md-0 my-3">
                <p className="text-4xl font-extrabold tracking-[5px]">
                    Flickbox
                </p>
                <p className="text-[#393e41bf] m-4 md:mt-3">
                    Open Source{" "}
                    <span className="text-[#E94F37]">
                        Movie Tracking Website
                    </span>{" "}
                    for Minimalist
                </p>
            </header>
            <div className="text-center flex items-center bg-[#393E41] text-[#F6F7EB] w-[250px] md:w-[500px] mx-auto my-10 p-2 rounded-4xl gap-4 px-5 shadow-[0_0_10px_#E94F37]">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    className="w-full outline-none border-none focus:ring-0 bg-transparent placeholder:text-[#f6f7eb71]"
                    type="text"
                    value={query}
                    placeholder="Search Movie Title..."
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setUrl(
                            `https://www.omdbapi.com/?s=${query}&apikey=2801e3cd`
                        );
                    }}
                />
            </div>
            {query === "" ? <HeroSection /> : <SearchMovies />}
        </div>
    );
}

export default App;
