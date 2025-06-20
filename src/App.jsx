function App() {
    return (
        <div className="bg-[#F6F7EB] text-[#393E41] h-screen">
            <header className="text-center my-3">
                <p className="text-4xl font-extrabold tracking-[5px]">
                    Flickbox
                </p>
                <p className="text-[#393e41bf] mt-1">
                    Open Source{" "}
                    <span className="text-[#E94F37]">
                        Movie Tracking Website
                    </span>{" "}
                    for Minimalist
                </p>
            </header>
            <div className="text-center bg-[#393E41] text-[#F6F7EB] w-[300px] md:w-[500px] mx-auto my-10 flex items-center p-2 rounded-4xl gap-4 px-5">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    className="w-full outline-none border-none focus:ring-0 bg-transparent placeholder:text-[#F6F7EB]"
                    type="text"
                    placeholder="Search Movie Title..."
                />
            </div>
        </div>
    );
}

export default App;
