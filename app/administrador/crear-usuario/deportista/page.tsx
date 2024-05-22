'use client';

import OpcionesClubes from '@/components/OpcionesClubes';
import fechaCompleta from '@/app/types/funcionesDate';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OpcionesCategorias from '@/components/OpcionesCategorias';
import router from 'next/router';
import styles from '@/app/css/profiles.module.css';

interface FormData {
  nombre: string;
  apellido: string;
  documento: string;
  direccion: string;
  telefono: string;
  correo: string;
  club: string;
  categoria: string;
  peso: number;
  fecha: Date;
}

export default function CrearDeportista() {

	const [datosNuevoDeportista, setDatosNuevoDeportista] = useState<FormData>({
		nombre: '',
		apellido: '',
		documento: '',
		direccion: '',
		telefono: '',
		correo: '',
		club: '',
		categoria: '',
		peso: 0,
		fecha: new Date(),
	});

	const handleChange = (field: keyof FormData, value: string) => {
		setDatosNuevoDeportista((prevFormData) => ({
			...prevFormData,
			[field]: value
		}));
	};

	const handleChangeFecha = (field: keyof FormData, value: string) => {
		var fecha = new Date(value);
		setDatosNuevoDeportista((prevFormData) => ({
			...prevFormData,
			[field]: fecha
		}));
	};

	async function handleGuardarCambios(): Promise<void> {
		const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
		try{
			const datos = localStorage.getItem('userData');
			var arreglo;

			if (datos != null) {
				arreglo = JSON.parse(datos);
			}

			const cabeza = {
				sessiontoken: arreglo.token,
			};

			const body = {
				name: datosNuevoDeportista.nombre,
				lastName: datosNuevoDeportista.apellido,
				birthDate: fechaCompleta(datosNuevoDeportista.fecha),
				weight: Number(datosNuevoDeportista.peso),
				cedula: datosNuevoDeportista.documento,
				email: datosNuevoDeportista.correo,
				phone: datosNuevoDeportista.telefono,
				club: datosNuevoDeportista.club,
				weightCategory: datosNuevoDeportista.categoria,
				address: datosNuevoDeportista.direccion
			};

			const response = await axios.post(`${apiEndpoint}/users/Deportista`, body, {
				headers: cabeza,
			});
			window.location.href = `/administrador/info-usuario/deportista?id=${response.data.user._id}`;
		} catch (error) {
			console.log(error);
		}

	};

	/////////MÉTODO PARA TRAER LOS CLUBES
	var cargado = false;
	const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
	useEffect(() => {
		const datos = localStorage.getItem('userData');
		var arreglo;

		if (datos != null) {
			arreglo = JSON.parse(datos);
		}

		//carga(arreglo);
		cargado = true;
	}, [!cargado]);

	async function carga(datos: { token: any; userId: any }): Promise<void> {
		try {
			const headers = {
				sessiontoken: datos.token
			};
			const parametros = {
				userId: datos.userId
			};

			const response = await axios.get(`${apiEndpoint}/users`, {
				params: parametros,
				headers: headers
			});

			// Actualizar el estado con los datos recibidos
			/* setDatosPerfil({
				nombre: response.data.user.name,
				apellido: response.data.user.lastName,
				cedula: response.data.user.cedula,
				direccion: response.data.user.address,
				telefono: response.data.user.phone,
				correo: response.data.user.email,
			}); */
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<div className={styles.container + ' container mx-auto mt-8'}>
				<h1 className='text-center text-[400%]' id='titulos-grandes'>CREAR DEPORTISTA</h1>
				<div className='flex items-center justify-center'>
					<svg
						className="my-1"
						xmlns="http://www.w3.org/2000/svg"
						height="6em"
						viewBox="0 0 512 512"
						fill="#000000"
					>
						<path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
					</svg>
				</div>
				<form>
					<div className="p-4 max-w-5xl mx-auto md:flex justify-items-center">
						<div className="md:w-2/4 space-x-4 space-y-4">
							<div className="flex ml-6 my-4">
								<div className="w-1/3">
									<div className={styles.label} id='texto-general'>
                                        Nombre:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="nombre"
										value={datosNuevoDeportista.nombre}
										onChange={(e) => handleChange('nombre', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										placeholder='Ingrese el nombre'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Apellido:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="apellido"
										value={datosNuevoDeportista.apellido}
										onChange={(e) => handleChange('apellido', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										placeholder='Ingrese el apellido'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Documento:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="documento"
										value={datosNuevoDeportista.documento}
										onChange={(e) => handleChange('documento', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										placeholder='Ingrese el número de documento'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Dirección
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="direccion"
										value={datosNuevoDeportista.direccion}
										onChange={(e) => handleChange('direccion', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										placeholder='Ingrese la dirección'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Peso
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="number"
										name="peso"
										value={datosNuevoDeportista.peso}
										onChange={(e) => handleChange('peso', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										placeholder='Ingresa el peso'
									/>
								</div>
							</div>
						</div>
						<div className="md:w-2/4 space-x-4 space-y-4">
							<div className="flex ml-4 my-4">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Teléfono
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="telefono"
										value={datosNuevoDeportista.telefono}
										onChange={(e) => handleChange('telefono', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										placeholder='Ingrese el teléfono'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Correo
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="text"
										name="correo"
										value={datosNuevoDeportista.correo}
										onChange={(e) => handleChange('correo', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										placeholder='Ingrese el correo'
									/>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                    Club:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<select
										name="club"
										value={datosNuevoDeportista.club}
										onChange={(e) => handleChange('club', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
									>
										<option value="">Seleccione un club</option>
										<OpcionesClubes/>
									</select>
								</div>
							</div>
							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                    Categoria:
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<select
										name="categoria"
										value={datosNuevoDeportista.categoria}
										onChange={(e) => handleChange('categoria', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
									>
										<option value="">Seleccione una categoria</option>
										<OpcionesCategorias/>
									</select>
								</div>
							</div>

							<div className="flex">
								<div className="w-1/3 mx-2">
									<div className={styles.label} id='texto-general'>
                                        Fecha de nacimiento
									</div>
								</div>
								<div className="w-2/3 mx-2" id='texto-general'>
									<input
										type="date"
										name="fecha"
										value={fechaCompleta(datosNuevoDeportista.fecha)}
										onChange={(e) => handleChangeFecha('fecha', e.target.value)}
										className='rounded-full w-full pl-4 text-black'
										min="1900-01-01"
										required
									/>
								</div>
							</div>

						</div>
					</div>
					<div className="mt-5 flex justify-center">
						<button
							type="button"
							onClick={handleGuardarCambios}
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg'
						>
                            Guardar cambios
						</button>
						<button
							type="button"
							className='bg-[#cd1919] mx-5 w-60 h-10 text-white py-2 px-4 rounded-lg'
						>
                            Cargar foto de perfil
						</button>
					</div>
				</form>
			</div>
		</>
	);
};