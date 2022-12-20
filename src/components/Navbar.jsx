//CSS
import styles from './Navbar.module.css'

//Icons
import { UilUser } from '@iconscout/react-unicons'
import { UilSignin } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'

// Hooks
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { useFetchDocuments } from '../hooks/useFetchDocuments'

const Navbar = () => {
	const { logout } = useAuthentication()
	const { user } = useAuthValue()

	const uid = user.uid
	const { documents: posts } = useFetchDocuments('posts', null, uid)

	return (
		<nav className={styles.navbar}>
			<div className='wrapper'>
				{/* Logo */}
				<NavLink to='/' className={styles.brand}>
					mini<span>Blog</span>
				</NavLink>

				{/* Navegação */}
				<ul className={styles.link_list}>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive ? styles.active : ''
							}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/about'
							className={({ isActive }) =>
								isActive ? styles.active : ''
							}
						>
							Sobre
						</NavLink>
					</li>
					{user && (
						<>
							<li>
								<NavLink
									to='/posts/create'
									className={({ isActive }) =>
										isActive ? styles.active : ''
									}
									end
								>
									Novo Post
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/dashboard'
									className={({ isActive }) =>
										isActive ? styles.active : ''
									}
								>
									Dashboard
								</NavLink>
							</li>
						</>
					)}
				</ul>

				{/* Login */}
				{!user && (
					<ul className={styles.login_links}>
						<li>
							<NavLink
								to='/login'
								className={({ isActive }) =>
									isActive ? styles.active : ''
								}
							>
								<UilSignin />
								Entrar
							</NavLink>
						</li>
						<li className={styles.register}>
							<NavLink
								to='/register'
								className={({ isActive }) =>
									isActive ? styles.active : ''
								}
							>
								Cadastrar
							</NavLink>
						</li>
					</ul>
				)}

				{/* Usuario logado */}
				{user && (
					<div className={styles.user}>
						<div className={styles.user_img}>
							<UilUser />
						</div>
						<div className={styles.user_info}>
							<span>{user.displayName}</span>
							{posts && (
								<p>
									ja fez <span>{posts.length}</span> posts!
								</p>
							)}
						</div>

						<button onClick={logout}>
							{' '}
							<UilSignout />
						</button>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
