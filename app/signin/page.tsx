import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
	return (
		<div className='flex h-screen'>
			
			<div className='w-1/2 flex flex-col justify-between p-8'>
				
				<div className='flex justify-center relative'>
					<Image
						src='/assets/nimr_logo.png'
						width={50}
						height={50}
						alt='Logo'
						className='h-16'
					/>
				</div>
				
				<div className='flex justify-center'>
					<form className='w-full max-w-md'>
						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='username'
							>
								Username
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='username'
								type='text'
								placeholder='Username'
							/>
						</div>
						<div className='mb-6'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2'
								htmlFor='password'
							>
								Password
							</label>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
								id='password'
								type='password'
								placeholder='******************'
							/>
						</div>
						<div className='flex items-center justify-between mb-4'>
							<div className='flex items-center'>
								<input
									className='mr-2 leading-tight'
									type='checkbox'
									id='rememberMe'
								/>
								<label className='text-sm text-gray-700' htmlFor='rememberMe'>
									Remember me
								</label>
							</div>
							<div>
								<a
									className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
									href='#'
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className='flex items-center justify-between'>
							<Link href='/in/patients' passHref className='w-full'>
								<button
									className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
									type='button'
								>
									Login
								</button>
							</Link>
						</div>
					</form>
				</div>
				
				<div className='flex justify-center items-center'>
					<span className='text-gray-600'>Powered by</span>
					<img
						src='/assets/co-creation_logo.svg'
						alt='Powered By Logo'
						className='h-8 ml-2'
					/>
				</div>
			</div>
			
			<div
				className='w-1/2 bg-cover bg-center relative flex justify-center items-center'
				style={{ backgroundImage: "url('/assets/background_photo.png')" }}
			>
				<div className='absolute bottom-0 px-8 py-2 text-white flex flex-col w-[70%] justify-center'>
					<h1 className='text-base font-bold'>Serving Patients During a Pandemic</h1>
					<p className='text-xs'>
						Delivering essential medication to NIMR patients with adherence to
						quality of service, care and confidentiality.
					</p>
				</div>
			</div>
		</div>
	);
}
