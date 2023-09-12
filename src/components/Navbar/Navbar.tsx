import { useRouter } from 'next/router';
import Spinner from '../Spinner';
import Image from 'next/image';
import { IRulingInitialState } from '@/types/rulings';

const Navbar: React.FC<IRulingInitialState> = ({ isFetchingRulingList, isFetchingRulingDetails }) => {
  const router = useRouter()
  const goToHome = () => router.push(`/`)

  return (
    <nav className="nav !z-30" role="navigation">
        <div className="max-centered">
            <h1 className="nav__logo">Rule of thumb.</h1>
            <button className="nav__hamburger icon-button" data-alt="Open Menu">
                <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero"/></svg>
            </button>
            <ul className="nav__links">
                <li>
                    <a href="#">Past Trials</a>
                </li>
                <li>
                    <a href="#">How It Works</a>
                </li>
                <li>
                    <a href="#">Login / Sign Up</a>
                </li>
                <li>
                    <form>
                        <input className="nav__search-input" aria-label="search" type="text" />
                        <button className="nav__search icon-button" data-alt="Search" type="submit">
                            <Image src="search.svg" alt="search" fill />
                        </button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
