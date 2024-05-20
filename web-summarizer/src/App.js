
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import SummarizePage from './components/SummarizePage';
import HistoryPage from './components/HistoryPage';

const App = () => {
    return (
        // <Router>
        // <Routes>
        //     <div>
        //         <nav>
        //             <ul>
        //                 <li>
        //                     <Link to="/">Summarize</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/history">History</Link>
        //                 </li>
        //             </ul>
        //         </nav>
        //         <Route path="/" exact component={SummarizePage} />
        //         <Route path="/history" component={HistoryPage} />
        //     </div>
        //     </Routes>
            
        // </Router>
        <Router>
        <nav>
                    <ul>
                        <li>
                            <Link to="/">Summarize</Link>
                        </li>
                        <li>
                            <Link to="/history">History</Link>
                        </li>
                    </ul>
                </nav>
        <Routes>
        
          <Route path="/" exact element={<SummarizePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Router>
        
    );
};

export default App;
