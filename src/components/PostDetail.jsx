// Icons
import { UilAngleRight } from '@iconscout/react-unicons'

//CSS
import styles from './PostDetail.module.css'

// Hooks
import { Link } from 'react-router-dom'

const PostDetail = ({ post }) => {
	return (
		<div className={styles.post_detail}>
			<div className={styles.post_img}>
				<img src={post.image} alt={post.title} />
			</div>
			<h2 className={styles.title}>{post.title}</h2>
			<p className={styles.createdBy}>
				Criado por <span>{post.createdBy}</span>
			</p>
			<div className={styles.tags}>
				{post.tagsArray.map((tag) => (
					<p key={tag}>
						<span>#</span>
						{tag}
					</p>
				))}
			</div>
			<Link to={`/posts/${post.id}`} className='btn btn-outline'>
				Leia todo post <UilAngleRight />
			</Link>
		</div>
	)
}

export default PostDetail
