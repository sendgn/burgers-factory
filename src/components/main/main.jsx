import Editor from '../editor/editor';
import Navigation from '../navigation/navigation';
import './main.scss';

const Main = () => {
    return (
        <div className='main'>
            <Navigation />
            <Editor />
        </div>
    );
}

export default Main;
