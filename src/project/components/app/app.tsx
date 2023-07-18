import { MainPage, MainPageProps } from '../../pages/main-page/main-page';

type AppProps = MainPageProps;

function App({ offersAmount } : AppProps):JSX.Element {
	return <MainPage offersAmount={offersAmount} />;
}


export default App;
