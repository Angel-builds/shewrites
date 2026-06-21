const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, '../src/content/notes');

function createNote() {
  const now = new Date();
  // Ensure the date is formatted as YYYY-MM-DD-HH-MM-SS
  const pad = (n) => n.toString().padStart(2, '0');
  const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}-${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
  
  const fileName = `${timestamp}.md`;
  const filePath = path.join(notesDir, fileName);

  const content = `---
date: "${now.toISOString().split('T')[0]}"
---

Write your note here...
`;

  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir, { recursive: true });
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created new note: src/content/notes/${fileName}`);
}

createNote();
