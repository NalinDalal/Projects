// src/components/BlogEditor.tsx
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Assuming db is your Firestore instance

const BlogEditor: React.FC = () => {
  const [content, setContent] = useState("");

  const handleSave = async () => {
    // Logic to save content to your database
    console.log(content);
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        content,
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      // Optionally, you can navigate to a success page or update state indicating successful save
    } catch (error) {
      console.error("Error adding document: ", error);
      // Handle error: Display error message or retry logic
    }
  };

  return (
    <div>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default BlogEditor;
