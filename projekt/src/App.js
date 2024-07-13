import React, { useState, useEffect } from 'react';
import './App.scss';
import contentData from './content.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [content, setContent] = useState([]);
  const [showFooterContent, setShowFooterContent] = useState(false);
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    const storedContent = localStorage.getItem('content');
    if (storedContent) {
      setContent(JSON.parse(storedContent));
    } else {
      setContent(contentData);
      localStorage.setItem('content', JSON.stringify(contentData));
    }
  }, []);

  const handleReplaceContent = () => {
    if (selectedOption) {
      let newContent;
      if (selectedOption === 'random') {
        const unusedContent = contentData.filter(c => !content.some(item => item.id === c.id));
        if (unusedContent.length > 0) {
          newContent = unusedContent[Math.floor(Math.random() * unusedContent.length)];
        } else {
          alert('No unique content left to add.');
          return;
        }
      } else {
        newContent = contentData.find(c => c.id.toString() === selectedOption);
      }
      setContent([newContent]);
      localStorage.setItem('content', JSON.stringify([newContent]));
    }
  };

  const handleAppendContent = () => {
    if (selectedOption) {
      let newContent;
      if (selectedOption === 'random') {
        const unusedContent = contentData.filter(c => !content.some(item => item.id === c.id));
        if (unusedContent.length > 0) {
          newContent = unusedContent[Math.floor(Math.random() * unusedContent.length)];
        } else {
          alert('Brak unikalnej zawartości do dodania');
          return;
        }
      } else {
        newContent = contentData.find(c => c.id.toString() === selectedOption);
      }
      if (!content.some(item => item.id === newContent.id)) {
        const updatedContent = [...content, newContent].sort((a, b) => a.id - b.id);
        setContent(updatedContent);
        localStorage.setItem('content', JSON.stringify(updatedContent));
      }
    }
  };

  const resetContent = () => {
    setContent(contentData);
    localStorage.setItem('content', JSON.stringify(contentData));
    setHeaderText('');
  };

  const appendName = () => {
    setHeaderText(prevHeaderText => prevHeaderText + 'Marcin Cynk');
  };

  return (
    <div className="app">
      <header className="header">
        <a href="/" className="logo">
          <FontAwesomeIcon icon={faHtml5} />
        </a>
        <div>
          <p className='recruitment-task'>Zadanie rekrutacyjne</p>
          <span>{headerText}</span>
        </div>
      </header>
      <main>
        <h1>Nagłówek H1</h1>
        <div className="content">
          <div className="block first-block">
            <h2>Blok pierwszy</h2>
            <label>
              <input
                type="radio"
                value="1"
                checked={selectedOption === '1'}
                onChange={() => setSelectedOption('1')}
              />
              Opcja pierwsza
            </label>
            <label>
              <input
                type="radio"
                value="2"
                checked={selectedOption === '2'}
                onChange={() => setSelectedOption('2')}
              />
              Opcja druga
            </label>
            <label>
              <input
                type="radio"
                value="random"
                checked={selectedOption === 'random'}
                onChange={() => setSelectedOption('random')}
              />
              Opcja losowa
            </label>
          </div>
          <div className="block second-block">
            <h2>Blok drugi</h2>
            <div className="button-row">
              <button className="replace-btn" onClick={handleReplaceContent}>ZASTĄP</button>
              <button className="append-btn" onClick={handleAppendContent}>DOKLEJ</button>
            </div>
          </div>
          <div className="block long-block">
            <h2>Blok z długą nazwą która sama się przytnie ...</h2>
            {content.map(item => (
              <p key={item.id}>{item.content}</p>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <div className="square-container">
          <div className="square">
            <p>CSS<br />is<br></br>Awesome</p>
          </div>
        </div>
        <div className="footer-buttons">
          {showFooterContent && (
            <div className="footer-content">
              <button className="reset-btn" onClick={resetContent}>ZRESETUJ USTAWIENIA</button>
              <button className="name-btn" onClick={appendName}>POKAŻ DANE OSOBOWE</button>
            </div>
          )}
          <button className="show-hide-btn" onClick={() => setShowFooterContent(!showFooterContent)}>
            {showFooterContent ? 'UKRYJ' : 'POKAŻ'}
          </button>
        </div>
      </footer>
    </div>
  );
};
   
export default App;
