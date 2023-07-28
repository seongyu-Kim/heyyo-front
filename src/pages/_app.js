import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
      <>
        <Component {...pageProps} />
        <style jsx global>{`
            .container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              text-align: center;
              position: relative;
            }
          `}
        </style>
      </>
  )
}
