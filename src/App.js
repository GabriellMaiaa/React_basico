////// components
import FirstComponent from './components/FirstComponent';
import ComponenteTeste from './components/ComponenteTeste';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';


//// styles / css
import './App.css';


///Os componentes JSX tem que estar envolto de uma div
function App() {
  
  return (
    <div className="App">
        <h1>Fundamentos do React.js</h1>
        <h2 className='teste'>O meu nome é Gabriel Maia</h2>
        {/*Testando esses comentários */}
        <FirstComponent/>
        <ComponenteTeste/>
        <TemplateExpressions/>
        <Events/>
        <Challenge/>
        
    </div>
  );
}

export default App;
