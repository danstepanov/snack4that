import { Key } from "react";
import Hyperlink from "./Hyperlink"

const SnackCard = ({ key, snack }: { key: Key, snack: SnackCard }) => {
    return (
        <div className="group flex flex-col border rounded p-2 h-36 justify-between md:hover:border-blue-500">
            <a href={`${snack.snackUrl}?&platform=mydevice`} target="_blank" rel="noopener noreferrer">
            <h2 className="font-bold text-slate-900 dark:text-white md:group-hover:text-blue-500">{`${snack.title} `}&rarr;</h2>
            <p className="text-sm text-slate-500 dark:text-slate-200 md:group-hover:text-blue-500 w-4/5 mt-1">{snack.description}</p>
            </a>
            <Hyperlink baseText="Created by" urlText={snack.author} url={snack.snackUrl} />
        </div>
    )
}

export default SnackCard