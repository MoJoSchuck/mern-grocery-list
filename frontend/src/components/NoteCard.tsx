import { PenSquareIcon, Trash2Icon, CheckSquareIcon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

import React, { useState } from "react";

type Note = {
  _id: string;
  name: string;
  content: string;
  bought: boolean;
  createdAt: string;
  updatedAt: string;
};

type NoteCardProps = {
  note: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NoteCard: React.FC<NoteCardProps> = ({ note, setNotes }) => {
  const [isChecked, setIsChecked] = useState(note.bought);
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault(); // get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Item deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete item");
    }
  };

  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
      <div className="card-body">
        <h3 className={`card-title text-base-content ${isChecked ? "line-through" : ""}`}>{note.name}</h3>
        <p className={`text-base-content/70 line-clamp-3 ${isChecked ? "line-through" : ""}`}>{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">{formatDate(new Date(note.createdAt))}</span>
          <div className="flex items-center gap-1">
            <button
              className={`btn btn-ghost btn-xs ${isChecked ? "text-success" : ""}`}
              onClick={async (e) => {
                e.preventDefault();
                const newChecked = !isChecked;
                setIsChecked(newChecked);
                try {
                  await api.put(`/notes/${note._id}`, {
                    ...note,
                    bought: newChecked,
                  });
                  setNotes((prev) => prev.map((n) => (n._id === note._id ? { ...n, bought: newChecked } : n)));
                } catch {
                  toast.error("Failed to update item");
                  setIsChecked(!newChecked); // rollback on error
                }
              }}
              title="Check note"
            >
              <CheckSquareIcon className="size-4" />
            </button>
            <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id)}>
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
