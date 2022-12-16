import Header from '../header/header';
import Editor from '../editor/editor';
import './main.scss';

const Main = ({ page }) => {
    return (
        <div className='main'>
            <Header page={page} />
            <Editor />
        </div>
    );
}

export default Main;
