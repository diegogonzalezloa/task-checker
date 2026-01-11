// Items
const items = [
    {
        title: "Active Users",
        stats: "50K+",
    },
    {
        title: "Task Completed",
        stats: "2M+",
    },
    {
        title: "Uptime",
        stats: "99.9%",
    },
    {
        title: "User Rating",
        stats: "4.9/5",
    },
];

function Stats() {
    return (
        <section className="px-5 md:px-10 lg:px-15 py-16 bg-teal">
            <div className="max-w-480 mx-auto text-white">
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-7">
                    {items.map((item, index) => (
                        <li key={index} className="flex flex-col items-center">
                            <h2 className="text-[max(28px,2.19vw)] 3xl:text-[42.048px] font-bold">
                                {item.stats}
                            </h2>
                            <p className="text-white/70">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Stats;
