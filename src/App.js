import React, { useState } from 'react';
import Markdown from 'marked-react';
import './App.css';

const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

[Kendall's CodePen](https://codepen.io/klb22)

![Kendall at the Conservatory at the Bellagio](https://i.ibb.co/2MkWs1R/889-FA8-E8-5514-42-FE-910-F-3-A19986-A0-B69.jpg)

Heres some code, \`<div> </div>\`, between 2 backticks.
1. And there are numbered lists too.
1. Use just 1s if you want!
1. List of stuff
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
`

function App() {

  const [markdown, setMarkdown] = useState(placeholder);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
    console.log('Something is changed in the textarea');
  }

  return (
   <div className='container'>
     <div className='box'>
<h1>Editor</h1>
<textarea onChange={handleChange} value={markdown} id="editor" cols="30" rows="10"></textarea>
    </div>
    <div className='box'>
      <h1>Previewer</h1>
<p id="preview"><Markdown>{markdown}</Markdown></p>
    </div>

   </div>
  );
}

export default App;
