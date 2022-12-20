// CSS
import styles from './Dashboard.module.css'

// Context
import { useAuthValue } from '../../context/AuthContext'

// Hooks
import { Link } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
	const { user } = useAuthValue()
	const uid = user.uid

	const {
		documents: posts,
		loading,
		error,
	} = useFetchDocuments('posts', null, uid)

	const deletDocument = (id) => {}

	if (loading) {
		return <p>Carregando...</p>
	}

	//posts do usuario
	return (
		<div>
			<h2>Dashboard</h2>
			<p>Gerencie os seus posts</p>
			{posts && posts.length === 0 ? (
				<div className={styles.noposts}>
					<p>Não foram encontratos posts</p>
					<Link to='/posts/create' className='btn'>
						Criar primeiro post
					</Link>
				</div>
			) : (
				<>
					<div>
						<span>Título</span>
						<span>Ações</span>
					</div>

					{posts &&
						posts.map((post) => (
							<div
								className={styles.post_container}
								key={post.id}
							>
								<p>{post.title}</p>
								<div className={styles.post_actions}>
									<Link
										to={`/posts/${post.id}`}
										className='btn btn-outline'
									>
										Ver
									</Link>
									<Link
										to={`/posts/edit/${post.id}`}
										className='btn btn-outline'
									>
										Editar
									</Link>
									<button
										className='btn btn-outline btn-danger'
										onClick={() => deletDocument(post.id)}
									>
										Excluir
									</button>
								</div>
							</div>
						))}
				</>
			)}
		</div>
	)
}

export default Dashboard
