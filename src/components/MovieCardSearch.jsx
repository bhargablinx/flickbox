export default function MovieCardSearch({
    title,
    year,
    plot,
    director,
    runtime,
    rating,
}) {
    return (
        <div className="p-2 h-[180px] rounded bg-[#e94f372f] transition flex gap-6">
            <img
                src="https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg"
                alt="movie-poster"
                className="w-[150px]"
            />
            <div>
                <p className="text-xl font-bold">
                    {title}{" "}
                    <span className="text-sm font-extralight ml-2">{year}</span>
                </p>
                <p className="text-sm line-clamp-2 my-2">{plot}</p>
                <p className="text-sm font-semibold my-2"> Dir. {director}</p>
                <p className="text-xs font-light my-2">{runtime}</p>
                <div className="flex justify-between items-center text-sm">
                    <p>
                        IMDB Rating:{" "}
                        <span className="text-[#E94F37] font-bold">
                            {rating}
                        </span>
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-2 py-1 rounded-lg text-xs">
                        No Watched
                    </button>
                </div>
            </div>
        </div>
    );
}
