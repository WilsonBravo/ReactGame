import Image from "next/image"
export default function Main (props) {
    return(
        <main className="home--main">
            <Image className="main--photo" src="/Photo.jpeg" width={300} height={238} alt="Photo" />
            <section className="main--text">
                <h1>Hello I am Wilson</h1>
                <h3>App Developer</h3>
                <p>Electronic Engineer, web developer and python developer. <br/>I am an app developer with great interest in data management and solving problems involving software implementation. I am always looking for new things to learn, at the moment, I am learning Next.js and React.</p>
            </section>
        </main>
    )
}