import React, { useRef, useState } from "react";

function Subscribe() {
    const inputRef = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState<string>('');

    const subscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/subscribe', {
            
            body: JSON.stringify({
                email: inputRef.current?.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const { error } = await res.json();

        if (error) {
            setMessage(error);

            return;
        }

        inputRef.current!.value = '';
        setMessage('Success! 🎉 You are now subscribed to Snack for That.');
    };

    return (
        <div className="flex flex-col items-start mt-4">
            <form onSubmit={subscribe}>
                <div className="flex flex-col flex-wrap mt-4">
                    <p className="text-lg font-bold text-black dark:text-white mb-2">Want to hear about new Snacks?</p>
                    <label htmlFor="email" className="text-black dark:text-white block text-sm font-medium leading-6">Email</label>
                    <div className="mt-2">
                        <input
                            ref={inputRef}
                            id="email-input"
                            type="email"
                            required
                            name="email"
                            placeholder="frodo@baggins.com"
                            className="px-3 block w-full rounded-md border-0 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    {message ? message : <p className="text-black dark:text-white mb-2">{`You only get emails when there's new content available, no spam.`}</p>}
                </div>
                <button type="submit" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:animate-move-bg dark:bg-gradient-to-r dark:from-indigo-500 dark:via-pink-500 dark:to-indigo-500 dark:bg-400% dark:text-white dark:ring-0">{'✨ Subscribe 💌'}</button>
            </form>
        </div>
    );
};

export default Subscribe;