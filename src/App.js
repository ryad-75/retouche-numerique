import React from 'react'
import Store from './Store'
import logo from './img/logo.png'
import logo2 from './img/logo2.png'
const Filter = React.lazy(() => import('./components/Filter'))
const Edit = React.lazy(() => import('./components/Edit'))
const Image = React.lazy(() => import('./components/Image'))

class App extends React.Component {
	static contextType = Store
	render() {
		return (
			<React.Suspense fallback={<div>Loading...</div>}>
				<div className='container'>
				<a href="https://riadallaf.netlify.app/" target="_blank" rel="noreferrer" className="logo-rayd">
					<img id='logo' src={logo} alt='logo' /></a>
					<Image />
					<Edit />
					<Filter />
					<h1 className='footer'>
						Made by 
						<a href="https://riadallaf.netlify.app/" target="_blank" rel="noreferrer" className="logo-rayd">
							<img src={logo2} alt='logo' />
						</a>
					</h1>

					


				</div>
			</React.Suspense>
		)
	}
}

export default App
