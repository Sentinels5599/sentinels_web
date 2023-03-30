import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sentinels</title>
        
      </Head>
      <main>
        <nav class = "navbar" >
          <div id = "home">
            Sentinels
          </div>
          <div id = "subPages"> 
            asdf
          </div>
          <div class="ahhh">
            <li id="list"><a>Page 1</a></li>
            <li id="list"><a>Page 2</a></li>
            <li id="list"><a>Page 3</a></li>
            <li id="list"><a>Page 4</a></li>
          </div>
        </nav>
        
        <div>
          <h1 class="Heading">News heading</h1>
        </div>
      </main>
    </>
  )
}
