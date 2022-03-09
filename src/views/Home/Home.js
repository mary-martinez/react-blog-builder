import React from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';
import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('title');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} />
      <Editor title={title} setTitle={setTitle} />
    </main>
  );
}
