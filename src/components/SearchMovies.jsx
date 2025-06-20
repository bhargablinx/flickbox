export default function SearchMovies() {
    return (
        <div className="border border-[#393e415d] w-[90%] max-w-[500px] mx-auto p-4 rounded-lg shadow-md space-y-4 animate-fade-in">
            <p className="text-center text-[#393e41bf]">
                Movies related to your search term...
            </p>
            <ul className="space-y-2">
                <li className="p-2 rounded bg-[#E94F3730] hover:bg-[#E94F3750] transition">
                    Movie Result Title 1
                </li>
                <li className="p-2 rounded bg-[#E94F3730] hover:bg-[#E94F3750] transition">
                    Movie Result Title 2
                </li>
            </ul>
        </div>
    );
}
