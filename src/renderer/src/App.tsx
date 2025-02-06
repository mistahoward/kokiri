import { Router } from "../../lib/electron-router-dom";
import { Route } from "react-router-dom"
import TestingComponent from "./components/Testing";

function App(): JSX.Element {

	return (
		<Router main={
			<>
				<Route path="/" element={<TestingComponent />} />
			</>
		}
		/>
	);
}

export default App;
