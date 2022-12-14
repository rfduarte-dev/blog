// CSS
import styles from './About.module.css'

// Hooks
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<div className={styles.about}>
			<h1>
				Sobre o <span>Mini</span>Blog
			</h1>
			<p>
				Este projeto consiste em um blog feito com React no front-end e
				Firebase no Back-end.
			</p>
			<Link to='/posts/create' className='btn'>
				Criar Post
			</Link>
		</div>
	)
}

export default About
