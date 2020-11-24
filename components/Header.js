import Link from 'next/link';

const Header = (props) => {
    return ( 
					<header id="header">
						<div className="progress-container">
							<div className="progress-bar" id="myBar"></div>
						</div>
						<Link href="/">
                            <h1 className="title"><strong>TRENDING MOVIES</strong> OF THE WEEK</h1>
                        </Link>						
						<nav>
							<ul>
								{props.children}
								<li>
                                    <Link href="/" >
                                        <a className="icon solid fa-info-circle">See trending movies of today</a>
                                    </Link>
                                </li>
								<li><a href="#footer" className="icon solid fa-info-circle">About</a></li>
							</ul>
						</nav>
					</header>
     );
}
 
export default Header;