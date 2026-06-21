export default function NotFound() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-6xl font-bold text-title">
                404
            </h1>

            <p className="text-lg text-svg">
                Page not found
            </p>

            <p className="text-sm text-svg">
                The page you are looking for does not exist.
            </p>
        </div>
    );
}