import { useState } from "react";
import Button from "./Button"; 
import { EXAMPLES } from "./data";
import Section from "./Section";

export default function Examples (){
      const [selectedTopic, setSelectedTopic] = useState('');
    
    
      function handleBtnClick(selectedButton) {
        setSelectedTopic(selectedButton);
      }
    return (
                <Section title="Examples" id="examples">
                  <menu>
                  <Button isSelected={selectedTopic === 'components'} onClick={() => setSelectedTopic('components')}>Components</Button>
                  <Button isSelected={selectedTopic === 'jsx'} onClick={() => setSelectedTopic('jsx')}>JSX</Button>
                  <Button isSelected={selectedTopic === 'props'} onClick={() => setSelectedTopic('props')}>Props</Button>
                  <Button isSelected={selectedTopic === 'state'} onClick={() => setSelectedTopic('state')}>State</Button>
                  </menu>
                    {!selectedTopic && <p>Please select a topic</p>}
                    {selectedTopic && (<div id="tab-content">
                      <h3>{EXAMPLES[selectedTopic].title}</h3>
                      <p>{EXAMPLES[selectedTopic].description}</p>
                      <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                      </pre>
                    </div>)} 
                </Section>
    )
}