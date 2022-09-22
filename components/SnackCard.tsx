import Hyperlink from "./Hyperlink"

const SnackCard = ({ snack }: { snack: SnackCard }) => {
    return (
        <div className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded p-4 justify-between md:hover:border-blue-500">
            <a href={`${snack.snackUrl}?&platform=mydevice`} target="_blank" rel="noopener noreferrer">
                <h2 className="font-bold text-gray-900 dark:text-gray-100 md:group-hover:text-blue-500">{`${snack.title} `}&rarr;</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 md:group-hover:text-blue-500 w-4/5 mt-2 mb-4">{snack.description}</p>
            </a>
            <Hyperlink baseText="Created by" urlText={snack.author} url={snack.snackUrl} />
        </div>
    )
}

export default SnackCard