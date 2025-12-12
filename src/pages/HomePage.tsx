import {Link} from "react-router";

function HomePage() {
    return (
        <>
            <div>Hello 2</div>
            <Link to="/login"> Go to login </Link>
        </>
    );
}

export default HomePage;
