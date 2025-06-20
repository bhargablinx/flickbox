export default function SearchMovies() {
    return (
        <div className="border border-[#393e415d] w-[90%] max-w-[500px] mx-auto p-4 rounded-lg shadow-md space-y-4 animate-fade-in">
            <p className="text-center text-[#393e41bf]">
                Movies related to your search term...
            </p>
            <div className="space-y-3">
                <div className="p-2 h-[180px] rounded bg-[#e94f372f] transition flex gap-6">
                    <img
                        src="https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg"
                        alt="movie-poster"
                        className="w-[150px]"
                    />
                    <div>
                        <p className="text-xl font-bold">
                            Blade Runner{" "}
                            <span className="text-sm font-extralight ml-2">
                                1982
                            </span>
                        </p>
                        <p className="text-sm line-clamp-2 my-2">
                            A blade runner must pursue and terminate four
                            replicants who stole a ship in space and have
                            returned to Earth to find their creator.
                        </p>
                        <p className="text-sm font-semibold my-2">
                            {" "}
                            Dir. Ridley Scott
                        </p>
                        <p className="text-xs font-light my-2">117 min</p>
                        <div className="flex justify-between items-center text-sm">
                            <p>
                                IMDB Rating:{" "}
                                <span className="text-[#E94F37] font-bold">
                                    8.1
                                </span>
                            </p>
                            <button className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-2 py-1 rounded-lg text-xs">
                                No Watched
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
