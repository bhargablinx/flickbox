import MovieCardSearch from "./MovieCardSearch";

export default function SearchMovies() {
    return (
        <div className="border border-[#393e415d] w-[90%] max-w-[500px] mx-auto p-4 rounded-lg shadow-md space-y-4 animate-fade-in">
            <p className="text-center text-[#393e41bf]">
                Movies related to your search term...
            </p>
            <div className="space-y-3">
                <MovieCardSearch
                    title="Blade Runner"
                    year="1982"
                    plot="A blade runner must pursue and terminate four replicants who
                    stole a ship in space and have returned to Earth to find
                    their creator."
                    director="Ridley Scott"
                    runtime="117 min"
                    rating="8.1"
                />
            </div>
        </div>
    );
}
