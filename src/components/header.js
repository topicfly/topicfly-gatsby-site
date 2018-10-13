import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
	<div className="bg-blue-darkest mb-3">
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: '#FF4136',
						textDecoration: 'none',
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</div>
)

export default Header
