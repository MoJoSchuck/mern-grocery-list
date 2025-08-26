import { Request, Response } from "express";

export function getAllNotes(req: Request, res: Response) {
  res.status(200).send("You just fetched the notes");
}

export function createNote(req: Request, res: Response) {
  res.status(201).json({ message: "Note created successfully" });
}

export function updateNote(req: Request, res: Response) {
  res.status(200).json({ message: "Note updated successfully" });
}

export function deleteNote(req: Request, res: Response) {
  res.status(200).json({ message: "Note deleted successfully" });
}
