"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NoteDetails.module.css";

interface Props {
  id: string;
}

export default function NoteDetailsClient({ id }: Props) {
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
    </div>
  );
}

// "use client";

// import { useParams } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import { fetchNoteById } from "@/lib/api";
// import type { Note } from "@/types/note";
// import css from "./NoteDetails.module.css";

// export default function NoteDetailsClient() {
//   const params = useParams();
//   const id = params.id as string;

//   const { data, isLoading, error } = useQuery<Note>({
//     queryKey: ["note", id],
//     queryFn: () => fetchNoteById(id),
//   });

//   if (isLoading) {
//     return <p>Loading, please wait...</p>;
//   }
//   if (error) {
//     return <p>Something went wrong.</p>;
//   }
//   if (data) {
//     return (
//       <div className={css.container}>
//         <div className={css.item}>
//           <div className={css.header}>
//             <h2>Note title</h2>
//           </div>
//           <p className={css.content}>Note content</p>
//           <p className={css.date}>Created date</p>
//         </div>
//       </div>
//     );
//   }
// }
