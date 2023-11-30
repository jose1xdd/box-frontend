// components/Table.tsx
import '@/app/administrador/lista-usuarios/estilos.css';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

// Definir las propiedades del componente Table
interface TableProps {
  data: {
    id: number;
    nombre: string;
    documento: number;
    rol: string;
  }[];
  filtroRol: string; // Nueva propiedad para filtrar por rol
}

// Definir el componente funcional Table
const Table: React.FC<TableProps> = ({ data, filtroRol }) => {
	// Estado para almacenar los datos filtrados
	const [filteredData, setFilteredData] = useState(data);
	// Estado para almacenar la página actual
	const [currentPage, setCurrentPage] = useState(0);
	// Número de usuarios por página
	const usersPerPage = 10;

	// Filtrar usuarios por rol al inicio
	useEffect(() => {
		const initialFilteredData = data.filter((user) => user.rol.toLowerCase() === filtroRol);
		setFilteredData(initialFilteredData);
	}, [data, filtroRol]);

	// Función para manejar el cambio de página
	const handlePageChange = (selectedPage: { selected: number }) => {
		const newPage = selectedPage.selected;
		if (newPage >= 0 && newPage < Math.ceil(filteredData.length / usersPerPage)) {
			setCurrentPage(newPage);
		}
	};

	// Función para manejar la búsqueda por nombre y rol
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value.toLowerCase();
		const filtered = data.filter(
			(user) =>
				user.nombre.toLowerCase().includes(searchTerm) &&
        user.rol.toLowerCase() === filtroRol
		);
		setFilteredData(filtered);
		setCurrentPage(0);
	};

	// Función para renderizar las filas de usuarios
	const renderUsers = () => {
		const start = currentPage * usersPerPage;
		const end = start + usersPerPage;
		return filteredData.slice(start, end).map((item, index) => (
			<tr key={item.id}>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center">{item.nombre}</td>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center">{item.rol}</td>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center">{item.documento}</td>
				<td className=" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center">
					<button
						onClick={() => alert('Vista completa')}
						className="bg-[#cd1919] text-white rounded p-2 mr-2"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bg-[#cd1919] bi bi-eye" viewBox="0 0 16 16">
							<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
							<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
						</svg>
					</button>
					<button
						onClick={() => alert('Editar')}
						className="bg-[#cd1919] text-white rounded p-2 mr-2"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bg-[#cd1919] bi bi-pencil-square" viewBox="0 0 16 16">
							<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
							<path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
						</svg>
					</button>
					<button
						onClick={() => alert('Borrar')}
						className="bg-[#cd1919] text-white rounded p-2 mr-2"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bg-[#cd1919] bi bi-person-fill-dash" viewBox="0 0 16 16">
							<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
							<path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4"/>
						</svg>
					</button>
				</td>
			</tr>
		));
	};

	// Renderizar el componente Table
	return (
		<div className="w-80% mx-auto">
			<h1 className="text-5xl text-white mb-4">USUARIOS</h1>
			<input
				type="text"
				placeholder="Filtrar por nombre"
				onChange={handleSearch}
				className="p-2 rounded-[18px] bg-gray-200 focus:outline-none mb-4"
			/>
			<table className="w-full">
				<thead>
					<tr>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">NOMBRE</th>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">ROL</th>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">CÉDULA</th>
						<th className=" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center">ACCIONES</th>
					</tr>
				</thead>
				<tbody>{renderUsers()}</tbody>
			</table>
			<ReactPaginate
				pageCount={Math.ceil(filteredData.length / usersPerPage)}
				onPageChange={handlePageChange}
				containerClassName="pagination flex gap-2 justify-center"
				activeClassName="active"
				pageLinkClassName="page-link"
				previousLabel={<button className="bg-[#cd1919] text-white rounded p-2">Previous</button>}
				nextLabel={<button className="bg-[#cd1919] text-white rounded p-2">Next</button>}
				pageRangeDisplayed={2}
				marginPagesDisplayed={1}
			/>
		</div>
	);
};

export default Table;
