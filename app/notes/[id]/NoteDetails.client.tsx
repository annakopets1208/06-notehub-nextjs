// "use client";
// import css from "./page.module.css";
// import { fetchNotes } from "@/lib/api";
// import { useState } from "react";
// import { useDebouncedCallback } from "use-debounce";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import SearchBox from "@/components/SearchBox/SearchBox";
// import NoteList from "@/components/NoteList/NoteList";
// import Pagination from "@/components/Pagination/Pagination";
// import Modal from "@/components/Modal/Modal";
// import NoteForm from "@/components/NoteForm/NoteForm";

// export default function App() {
//   const [name, setName] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleChange = useDebouncedCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setCurrentPage(1);
//       setName(event.target.value);
//     },
//     500
//   );

//   const { data } = useQuery({
//     queryKey: ["notes", name, currentPage],
//     queryFn: () => fetchNotes(name, currentPage),
//     placeholderData: keepPreviousData,
//   });

//   return (
//     <>
//       <div className={css.app}>
//         <header className={css.toolbar}>
//           <SearchBox onChange={handleChange} />
//           {data?.notes?.length !== 0 && (data?.totalPages ?? 0) > 1 && (
//             <Pagination
//               totalPages={data?.totalPages ?? 0}
//               currentPage={currentPage}
//               setCurrentPage={setCurrentPage}
//             />
//           )}
//           <button className={css.button} onClick={() => setIsModalOpen(true)}>
//             Create note +
//           </button>
//         </header>
//         <NoteList notes={data?.notes ?? []} />
//         {isModalOpen && (
//           <Modal onClose={() => setIsModalOpen(false)}>
//             <NoteForm onClose={() => setIsModalOpen(true)} />
//           </Modal>
//         )}
//       </div>
//     </>
//   );
// }

"use client";

import css from "./NoteDetails.module.css";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import Error from "./error";

const NoteDetailsClient = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {isError && <Error error={error} />}
      {isLoading && <p>Loading, please wait...</p>}
      {data && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{data?.title}</h2>
            </div>
            <p className={css.content}>{data?.content}</p>
            <p className={css.date}>{data?.createdAt}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteDetailsClient;
