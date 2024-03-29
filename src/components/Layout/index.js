import "./index.scss";
import Sidebar from '../Sidebar';


const Layout = () => {
  return(
    <div className='App'>
        <div class = 'sidebar'>
            <Sidebar/>
        </div>
        

        <div className='page'>
            <span className="tags top-tags">&lt;body&gt;</span>
           
            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br/>
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </div>
    </div>
    
        
    )
}

export default Layout;