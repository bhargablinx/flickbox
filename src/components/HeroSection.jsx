export default function HeroSection() {
    return (
        <div className="flex flex-col items-center gap-6 mt-6">
            {/* Headline */}
            <div className="text-2xl text-center font-bold tracking-wider">
                <p>
                    Track the Movies You{" "}
                    <span className="text-[#E94F37]">Love</span>.
                </p>
                <p>
                    Discover the Ones You'll{" "}
                    <span className="text-[#E94F37]">Adore</span>.
                </p>
            </div>

            {/* Movie illustration */}
            <div className="mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#E94F37"
                    viewBox="0 0 24 24"
                    className="w-16 h-16"
                >
                    <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM4 8h3v2H4V8Zm0 4h3v2H4v-2Zm0 4h3v2H4v-2Zm5 0h11v2H9v-2Zm11-2H9v-2h11v2Zm0-4H9V8h11v2Z" />
                </svg>
            </div>

            {/* Feature Text */}
            <p className="text-lg font-medium text-center text-[#393E41]">
                Track What You Watch
            </p>

            {/* Downward Chevron */}
            <div className="mt-4 animate-bounce">
                <i className="fa-solid fa-chevron-down text-[#E94F37] text-xl"></i>
            </div>

            {/* Mini tagline + link */}
            <div className="text-center mt-2">
                <p className="text-sm text-[#393E41] italic">
                    Why keep guessing what you’ve seen? Let Flickbox remember
                    for you.
                </p>
                <a
                    href="#"
                    className="text-sm text-[#E94F37] mt-1 inline-block hover:underline"
                >
                    Learn More ↓
                </a>
            </div>

            {/* User Stats */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-[80px] text-center text-sm text-[#393E41]">
                <div>
                    <p className="text-lg font-bold">12K+</p>
                    <p>Movies Tracked</p>
                </div>
                <div>
                    <p className="text-lg font-bold">1.5K+</p>
                    <p>Users Joined</p>
                </div>
                <div>
                    <p className="text-lg font-bold">7.3M</p>
                    <p>Total Watchlists</p>
                </div>
            </div>
        </div>
    );
}
