import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <ShoppingCart className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">No items yet</h3>
      <p className="text-base-content/70">Your grocery list is still empty. Add your first item now and keep track of your next shopping trip!</p>
      <Link to="/create" className="btn btn-primary">
        Add New Item
      </Link>
    </div>
  );
};
export default NotesNotFound;
