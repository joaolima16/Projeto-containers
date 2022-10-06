import { Route, BrowserRouter, Router,Routes} from 'react-router-dom'
import DeleteFormContainer from '../Components/DeleteFormContainer';
import FormContainer from '../Components/InsertFormContainer';
import UpdateFormContainer from '../Components/UpdateFormContainer';
import Home from '../Pages/Home'
const RoutesPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"  />
                <Route element={<FormContainer />} path="/NewContainer" />
                <Route element={<UpdateFormContainer />} path="/UpdateContainer" />
                <Route element={<DeleteFormContainer />} path="/DeleteContainer" />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesPage;