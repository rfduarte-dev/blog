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
				<div>
					<p>Tem posts</p>
				</div>
			)}

			{posts && posts.map((post) => <h3 key={post.id}>{post.title}</h3>)}
		</div>
	)
}

export default Dashboard
