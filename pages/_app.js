import NavBar from "@/components/NavBar";
import "../styles/globals.css";
export default function App({ Component, PageProps }) {
    return (
        <div>
            <NavBar />
            <Component {...PageProps} />
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
            <span>Hello</span>
        </div>
    );
}
