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
                <meta charSet="utf-8" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="Snack for That" key="ogtitle" />
                    <meta property="og:description" content="A collection of helpful Expo Snacks" key="ogdescription" />
                    <meta property="og:image" content="/public/snacks.jpg" key="ogimageurl" />
                    <meta property="og:image:secure_url" content="/public/snacks.jpg" key="ogimagesecureurl" />
                    <meta property="og:image:type" content="image/png" key="ogimagetype" />
                    <meta property="og:image:width" content="1200" key="ogiamgewidth" />
                    <meta property="og:image:height" content="627" key="ogimageheight" />
                    <meta property="og:type" content="website" key="ogtype" />
                    <meta property="og:url" content="snackforthat.com" key="ogurl" />
                    <meta property="og:title" content="Snack for That" key="ogtitle" />
                    <meta property="og:description" content="A collection of helpful Expo Snacks" key="ogdescription" />
                    <meta name="twitter:card" content="summary" key="twcard" />
                    <meta name="twitter:creator" content="@danstepanov" key="twhandle" />
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