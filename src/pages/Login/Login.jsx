//CSS
import styles from './Login.module.css'

// Icons
import { UilEyeSlash } from '@iconscout/react-unicons'
import { UilExclamationTriangle } from '@iconscout/react-unicons'

// Hooks
import { useEffect, useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {
	const [displayName, setDisplayName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')

	const { login, error: authError, loading } = useAuthentication()

	const handleSubmit = async (e) => {
		e.preventDefault()

		setError('')

		const user = {
			email,
			password,
		}

		const res = await login(user)
		console.log(res)
	}

	useEffect(() => {
		if (authError) {
			setError(authError)
		}
	}, [authError])

	return (
		<div className={styles.login}>
			<h1>Entre para postar!</h1>
			<p>Faça o login para poder utilizar o sistema</p>

			<form onSubmit={handleSubmit}>
				<label>
					<span>Email</span>
					<input
						type='email'
						name='email'
						required
						placeholder='Insira seu e-mail'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					<span>Senha</span>
					<UilEyeSlash />
					<input
						type='password'
						name='password'
						required
						placeholder='Insira sua senha'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				{!loading && <button className='btn'>Entrar</button>}
				{loading && (
					<button className='btn' disabled>
						Aguarde ...
					</button>
				)}
				{error && (
					<p className='error'>
						<UilExclamationTriangle />
						{error}
					</p>
				)}
			</form>
		</div>
	)
}

export default Login
