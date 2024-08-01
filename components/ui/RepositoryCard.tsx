import {cn} from "@/lib/utils";
import React from "react";

export const RepositoryCard = (repo: Repository) => {

    return (
        <figure
            className={cn("relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4", "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",)}>
            <div className="flex flex-row row-span-1  items-center gap-2 ">
                <figcaption className="text-lg font-semibold text-white">{repo.name}</figcaption>
            </div>
            <blockquote
                className="mt-2 text-sm row-span-*">{repo.body.length > 255 ? repo.body.substring(0, 255) + "..." : repo.body}</blockquote>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
                {repo.tags.map((tag) => (
                    <span key={tag}
                          className={cn("row-span-1 px-2 py-1 text-xs font-medium rounded-full", "dark:bg-gray-50/[.10] dark:text-gray-50",)}>
                            {tag}
                    </span>
                ))}
            </div>
        </figure>
    );
};
