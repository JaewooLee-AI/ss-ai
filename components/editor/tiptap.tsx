"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Bold, Italic, Heading1, Heading2, ImageIcon, LinkIcon } from "lucide-react";
import { uploadImage } from "@/app/actions/upload";
import { useCallback, useState } from "react";

export function TiptapEditor({ content, onChange }: { content: string, onChange: (html: string) => void }) {
  const [isUploading, setIsUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full my-4 border border-border/50",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline underline-offset-4",
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base dark:prose-invert max-w-none focus:outline-none min-h-[400px] px-4 py-6",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const handleImageUpload = useCallback(async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;

      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      try {
        const result = await uploadImage(formData);
        if (result.success && result.url) {
          editor?.chain().focus().setImage({ src: result.url }).run();
        } else {
          alert("Image upload failed");
        }
      } catch (e) {
        console.error(e);
        alert("Image upload failed");
      } finally {
        setIsUploading(false);
      }
    };
    input.click();
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) return;
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-border/60 rounded-2xl overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="flex items-center gap-1 border-b border-border/60 p-2 bg-secondary/30">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg transition-colors ${editor.isActive("bold") ? "bg-primary/20 text-primary" : "hover:bg-secondary text-muted-foreground"}`}
          type="button"
        >
          <Bold className="size-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg transition-colors ${editor.isActive("italic") ? "bg-primary/20 text-primary" : "hover:bg-secondary text-muted-foreground"}`}
          type="button"
        >
          <Italic className="size-4" />
        </button>
        <div className="w-px h-6 bg-border mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded-lg transition-colors ${editor.isActive("heading", { level: 1 }) ? "bg-primary/20 text-primary" : "hover:bg-secondary text-muted-foreground"}`}
          type="button"
        >
          <Heading1 className="size-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded-lg transition-colors ${editor.isActive("heading", { level: 2 }) ? "bg-primary/20 text-primary" : "hover:bg-secondary text-muted-foreground"}`}
          type="button"
        >
          <Heading2 className="size-4" />
        </button>
        <div className="w-px h-6 bg-border mx-1" />
        <button
          onClick={setLink}
          className={`p-2 rounded-lg transition-colors ${editor.isActive("link") ? "bg-primary/20 text-primary" : "hover:bg-secondary text-muted-foreground"}`}
          type="button"
        >
          <LinkIcon className="size-4" />
        </button>
        <button
          onClick={handleImageUpload}
          disabled={isUploading}
          className={`p-2 rounded-lg transition-colors hover:bg-secondary text-muted-foreground ${isUploading ? 'opacity-50 cursor-wait' : ''}`}
          type="button"
          title="Upload Image"
        >
          <ImageIcon className="size-4" />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
}
