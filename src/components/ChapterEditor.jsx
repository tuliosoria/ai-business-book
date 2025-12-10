import React, { useState } from 'react';

export default function ChapterEditor({ chapter, onSave, onCancel }) {
  const [title, setTitle] = useState(chapter.title || '');
  const [content, setContent] = useState(chapter.content || '');

  return (
    <div style={{padding:12}}>
      <div style={{marginBottom:8}}>
        <label style={{display:'block', fontSize:12, color:'#333'}}>Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} style={{width:'100%', padding:8, boxSizing:'border-box'}} />
      </div>

      <div style={{marginBottom:8}}>
        <label style={{display:'block', fontSize:12, color:'#333'}}>Content</label>
        <textarea value={content} onChange={e=>setContent(e.target.value)} rows={12} style={{width:'100%', padding:8, boxSizing:'border-box'}} />
      </div>

      <div style={{display:'flex', gap:8}}>
        <button onClick={() => onSave({ ...chapter, title: title.trim() || 'Untitled', content })} style={{background:'#10b981', color:'#fff', padding:'8px 12px', border:'none', borderRadius:6}}>Save</button>
        <button onClick={onCancel} style={{padding:'8px 12px', borderRadius:6}}>Cancel</button>
      </div>
    </div>
  );
}
