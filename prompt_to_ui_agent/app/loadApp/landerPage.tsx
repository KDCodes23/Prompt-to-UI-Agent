export default function LanderPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main>
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Welcome to the Prompt to UI Agent!
                </h1>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    This is a demo application that showcases how to use the Prompt to UI Agent to generate user interfaces from natural language prompts. To get started, simply enter a prompt in the input field below and watch as the agent generates a corresponding user interface for you.
                </p>
            </main>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            </main>
        </div>

    );
}