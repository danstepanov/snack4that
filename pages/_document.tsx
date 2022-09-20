import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:title" content="Snack for That" key="ogtitle" />
                    <meta property="og:description" content="A collection of helpful Expo Snacks" key="ogdescription" />
                    <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className="bg-white dark:bg-black text-white dark:text-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument