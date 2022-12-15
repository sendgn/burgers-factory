import Category from '../category/category';
import Sidebar from '../sidebar/sidebar';
import './editor.scss';

const Editor = () => {
    return (
        <div className='editor'>
            <Sidebar />
            <Category />
        </div>
    );
}

export default Editor;
