import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="manifest.json" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="application-name" content="hacker-next" />
                    <meta name="apple-mobile-web-app-title" content="hacker-next" />
                    <meta name="theme-color" content="#e65100" />
                    <meta name="msapplication-navbutton-color" content="#e65100" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="msapplication-starturl" content="/" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link rel="icon" type="image/png" sizes="512x512" href="/icons/img-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/icons/img-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/icons/img-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/icons/img-192x192.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

