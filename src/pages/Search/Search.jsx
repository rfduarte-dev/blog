// CSS
import styles from './Search.module.css'

// Icons
import { UilAngleLeft } from '@iconscout/react-unicons'

// Components
import PostDetail from '../../components/PostDetail'

// Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

const Search = () => {
	const query = useQuery()
	const search = query.get('q')

	const { documents: posts } = useFetchDocuments('posts', search)
	console.log(posts)
	return (
		<div className={styles.search_container}>
			<h2>
				Resultados de busca para: <span>{search}</span>
			</h2>
			<div className={styles.noposts}>
				{posts && posts.length === 0 && (
					<>
						<p>
							Não foram encontrados posts a partir da sua busca...
						</p>
						<Link to='/' className='btn btn-dark'>
							Voltar
							<UilAngleLeft />
						</Link>
					</>
				)}
			</div>
			{posts &&
				posts.map((post) => <PostDetail key={post.id} post={post} />)}

			{posts && posts.length !== 0 && (
				<Link to='/' className='btn btn-dark'>
					Voltar
					<UilAngleLeft />
				</Link>
			)}
		</div>
	)
}

export default Search
