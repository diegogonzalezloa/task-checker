// Import component
import Button from "../../components/Button";

function Trial() {
    return (
        <section className="px-5 md:px-10 lg:px-15 py-16">
            <div className="flex flex-col gap-y-8 max-w-480 mx-auto text-center">
                <h2>Ready to Get Organized?</h2>
                <p className="text-black/70">
                    Join thousands of users who have transformed their
                    productivity with TaskChecker
                </p>
                <div className="grid gap-y-5 place-items-center">
                    <Button
                        className="py-3 px-6 bg-teal hover:bg-stormyTeal text-white hover:shadow-lg hover:shadow-black/20"
                        content="Start Free Trial"
                    />
                    <Button
                        content="Watch Demo"
                        className="py-3 px-6 border-2 bg-white border-neutral-200 hover:text-stormyTeal hover:border-stormyTeal"
                    />
                </div>
            </div>
        </section>
    );
}

export default Trial;
