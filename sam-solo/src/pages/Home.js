import { Link } from 'react-router-dom'

const Home = (props) => {

    console.log(props.allWines);

    const wineList = props.allWines.map(wine => (
        <li key = {wine.id} className = 'wine-list'>
            <Link className = 'wineLink' to = {`/${wine.id}`}>{wine.name}</Link>
        </li>
    ))

    return (
        <div>
            <h1>Wine Talk</h1>
            <div className = 'wineContainer'>
                {wineList}
            </div>
        </div>
    )
}

export default Home;