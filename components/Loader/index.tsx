export default function Loader() {
    return (
        <div className="fixed top-0 flex justify-center items-center bg-black/80 h-screen w-screen">
            <img
                src="/assets/Loader/loader.gif"
                alt="loader"
                className="w-80 h-80 object-contain" />
        </div>
    )
}