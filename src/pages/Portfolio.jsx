import Card from "../components/Card.jsx";

export default function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Card
                    src="https://cdn2.iconfinder.com/data/icons/flat-seo-web-ikooni/128/flat_seo2-03-512.png"
                    alt="Logo"
                    title="PWA Notes"
                    text="Online Note Taking App"
                    github="https://github.com/AetherealDev/PWA-Notes"
                />
                <Card
                    src="https://cdn-icons-png.flaticon.com/512/2065/2065064.png "
                    alt="Logo"
                    title="Voyager"
                    text="Social Media Travel Blog"
                    github="https://github.com/AetherealDev/voyager"
                />
                <Card
                    src="   https://cdn-icons-png.flaticon.com/512/3389/3389081.png "
                    alt="Logo"
                    title="BooksFinder"
                    text="Online Library"
                    github="https://github.com/AetherealDev/booksfinder"
                />
                <Card
                    src="   https://cdn-icons-png.flaticon.com/512/1104/1104982.png "
                    alt="Logo"
                    title="MongoNet"
                    text="Example Mongo DB Backend API"
                    github="https://github.com/AetherealDev/MongoNet"
                />
                <Card
                    src="   https://cdn-icons-png.flaticon.com/512/2659/2659360.png "
                    alt="Logo"
                    title="SVGify"
                    text="SVG Generator"
                    github="https://github.com/AetherealDev/SVGify"
                />
                <Card
                    src="   https://cdn-icons-png.flaticon.com/512/7153/7153061.png "
                    alt="Logo"
                    title="ExpressCart"
                    text="Simple ECommerce Backend"
                    github="https://github.com/AetherealDev/ExpressCart"
                />
            </div>
        </>

    );
}
