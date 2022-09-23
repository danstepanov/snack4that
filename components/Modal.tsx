const Modal = ({ toggleModal }: { toggleModal: () => void }) => {
    const navigateToTwitter = () => {
        location.href = "https://twitter.com/danstepanov"
        toggleModal()
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative my-6 mx-6 md:mx-auto max-w-3xl ">
                    {/*content*/}
                    <div className="border border-gray-200 dark:border-white rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-gray-200 dark:border-gray-800 rounded rounded-t">
                            <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                                Contribute to Snack for That
                            </h3>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                {`I'll have a dedicated submission form up soon so you can easily contribute your own Snacks. For now, hit me up on Twitter with your Snacks.`}
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-gray-200 dark:border-gray-800 rounded rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                            <button
                                className="bg-blue-500 text-white active:bg-blue-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={navigateToTwitter}
                            >
                                My Twitter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal