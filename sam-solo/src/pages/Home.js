import { Link } from 'react-router-dom'

const Home = (props) => {
    const auth = localStorage.getItem('userId')

    // console.log(props.allWines);

    const wineList = props.allWines.slice(0).reverse().map(wine => (
        <li key = {wine.id} className = 'wine-list'>
            <Link className = 'wineLink' to = {`/wine/${wine.id}`}>{wine.name}</Link>
        </li>
    ))

    return (
        <div>
            <h1>Wine Talk</h1>
            <div className = 'wineContainer'>
                <div className = 'wineListContainer'>
                {wineList}
                </div>
            </div>
        </div>
    )
}

export default Home;