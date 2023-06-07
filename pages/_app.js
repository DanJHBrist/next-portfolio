
import Script from 'next/script';

// window && window.gtag && window.gtag(
//     'config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, { 
//         page_path: url, });

function MyApp ({ Component, pageProps }){
    return (
        <>
            <Script
            strategy = 'afterInteractive' 
            async
            src = {"https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"} 
            />
            
            <Script strategy='afterInteractive'>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path: window.location.pathname,
                });
                `}
            </Script>

            <Component {...pageProps}/>    
        </>
    )
}

export default MyApp