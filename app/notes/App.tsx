// import css from "./App.module.css";
// import { fetchNotes } from "../../services/noteService.ts";
// import { useState } from "react";
// import { useDebouncedCallback } from "use-debounce";
// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import SearchBox from "../SearchBox/SearchBox.tsx";
// import NoteList from "../NoteList/NoteList.tsx";
// import Pagination from "../Pagination/Pagination.tsx";
// import Modal from "../Modal/Modal.tsx";
// import NoteForm from "../NoteForm/NoteForm.tsx";

// export default function App() {
//   const [name, setName] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleChange = useDebouncedCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setCurrentPage(1);
//       setName(event.target.value);
//     },
//     500
//   );

//   const { data } = useQuery({
//     queryKey: ["note", name, currentPage],
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
//           <button className={css.button} onClick={openModal}>
//             Create note +
//           </button>
//         </header>
//         <NoteList notes={data?.notes ?? []} />
//         {isModalOpen && (
//           <Modal onClose={closeModal}>
//             <NoteForm onClose={closeModal} />
//           </Modal>
//         )}
//       </div>
//     </>
//   );
// }
