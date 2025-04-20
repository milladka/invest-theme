import Link from "next/link";

export function Menu({ navBg }) {
    return (
        <div className={`${navBg ? 'text-slate-800' : ''} flex items-center justify-center gap-8 lg:gap-12 font-(family-name:--font-mulish)`}>
            <div>
                <Link href={"/"}>Home</Link>
            </div>
            <div>
                <Link href={"/expertise"}>Expertise</Link>
            </div>
            <div>
                <Link href={"/projects"}>Projects</Link>
            </div>
            <div>
                <Link href={"/about"}>About</Link>
            </div>
            <div>
                <Link href={"/news-insights"}>News & Insights</Link>
            </div>
        </div>
    )
}