'use client';

import { obtenerFotoPerfil } from '@/app/lib/basic_request';
import axios from 'axios';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/app/css/profiles.module.css';

export default function InfoEntrenador() {

	const [datosEntrenador, setDatosEntrenador] = useState({
		name: '',
		lastName: '',
		cedula: '',
		address: '',
		phone: '',
		email: '',
		image: ''
	});

	//Valores para traer el id del URL
	const valor = useSearchParams();
	const id = valor.get('id');

	var cargado = false;

	//UseEffect para pruebas
	useEffect(() => {
		cargarUsuarios();
		cargado = true;
	}, [!cargado]);

	const cargarUsuarios = async () => {
		const datos = localStorage.getItem('userData');
		var arreglo;

		if (datos != null) {
			arreglo = JSON.parse(datos);
		}
		const dataDeportista = await cargaEntrenador(arreglo);
		if (id != null) setDatosEntrenador({ ...dataDeportista.data.user, ['image']: await obtenerFotoPerfil(id) });
	};

	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	async function cargaEntrenador(datos: { token: any }): Promise<any> {
		try {
			const headers = {
				sessiontoken: datos.token
			};
			const parametros = {
				userId: id
			};

			const response = await axios.get(`${apiEndpoint}/users`, {
				params: parametros,
				headers: headers
			});

			return response;

			//console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className="container mx-auto mt-8">
				<h1 className='text-center text-[400%]' id='titulos-grandes'>INFORMACIÓN ENTRENADOR</h1>
				<div className='flex items-center justify-center'>
					{datosEntrenador.image != '' && <img src={datosEntrenador.image} className='w-40 h-40'></img>}
				</div>
				<form>
					<div className="p-4 mx-auto flex">
						<div className="w-2/4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Nombre:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosEntrenador.name}
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Apellido:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosEntrenador.lastName}
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Cédula:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosEntrenador.cedula}
									</div>
								</div>
							</div>
						</div>
						<div className="w-2/4">
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Dirección
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosEntrenador.address}
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Teléfono
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosEntrenador.phone}
									</div>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Correo
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<div className='bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black' id='texto-general'>
										{datosEntrenador.email}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 flex justify-center">
						<Link href='/administrador/lista-usuarios/entrenador'>
							<button
								type="button"
								className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg font-bold' id='titulos-pequenos'
							>
                            Volver
							</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};
