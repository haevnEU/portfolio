
export const RepositoryView = (repo: Repository) => {
    return (
        <div
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                {repo.name} - {repo.lines} lines
            </p>

        </div>
    );
}
