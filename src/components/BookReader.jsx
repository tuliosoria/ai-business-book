import React, { useEffect, useState } from 'react';
import sampleBook from '../data/book.json';
import ChapterList from './ChapterList';
import ChapterEditor from './ChapterEditor';

const STORAGE_KEY = 'ai_book_reader:book';

export default function BookReader() {
  const [book, setBook] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    // clone sample to avoid mutating import
    return JSON.parse(JSON.stringify(sampleBook));
  });

  const [selected, setSelected] = useState(0);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(book)); } catch (e) {}
  }, [book]);

  const saveChapter = (updated) => {
    setBook(prev => {
      const copy = { ...prev, chapters: prev.chapters.map(c => c.id === updated.id ? updated : c) };
      return copy;
    });
    setEditing(false);
  };

  const addChapter = () => {
    setBook(prev => {
      const nextId = (prev.chapters.reduce((m, c) => Math.max(m, c.id), 0) || 0) + 1;
      const newChap = { id: nextId, title: `New Chapter ${nextId}`, content: 'Write your chapter here.' };
      return { ...prev, chapters: [...prev.chapters, newChap] };
    });
    setSelected(book.chapters.length); // select last (will be new after state update)
    setEditing(true);
  };

  const deleteChapter = (index) => {
    if (!confirm('Delete this chapter?')) return;
    setBook(prev => {
      const newCh = prev.chapters.slice();
      newCh.splice(index, 1);
      return { ...prev, chapters: newCh };
    });
    setSelected(prev => Math.max(0, prev - 1));
  };

  const downloadJSON = () => {
    const data = JSON.stringify(book, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(book.title||'book').replace(/[^a-z0-9]+/gi,'-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const chapters = book.chapters || [];
  const chapter = chapters[selected] || { id: 0, title: 'No chapter', content: '' };

  return (
    <div style={{display:'flex', height:'100vh'}}>
      <ChapterList chapters={chapters} selectedIndex={selected} onSelect={(i)=>{setSelected(i); setEditing(false);}} />

      <main style={{flex:1, padding:20, boxSizing:'border-box', overflow:'auto'}}>
        <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
          <div>
            <h1 style={{margin:0}}>{book.title}</h1>
            <div style={{color:'#666', fontSize:14}}>{book.author} — {book.description}</div>
          </div>

          <div style={{display:'flex', gap:8}}>
            <button onClick={()=>{ setSelected(s => Math.max(0, s-1)); setEditing(false); }} disabled={selected===0}>Prev</button>
            <button onClick={()=>{ setSelected(s => Math.min(chapters.length-1, s+1)); setEditing(false); }} disabled={selected>=chapters.length-1}>Next</button>
            <button onClick={()=>setEditing(e=>!e)}>{editing ? 'Close Editor' : 'Edit'}</button>
            <button onClick={addChapter}>Add Chapter</button>
            <button onClick={()=>deleteChapter(selected)} disabled={!chapters.length}>Delete</button>
            <button onClick={downloadJSON}>Download JSON</button>
          </div>
        </header>

        <section>
          {!editing && (
            <article>
              <h2>{chapter.title}</h2>
              {chapter.content.split('\n\n').map((p,i)=> (
                <p key={i} style={{lineHeight:1.6}}>{p}</p>
              ))}
            </article>
          )}

          {editing && (
            <ChapterEditor chapter={chapter} onSave={saveChapter} onCancel={() => setEditing(false)} />
          )}
        </section>
      </main>
    </div>
  );
}
