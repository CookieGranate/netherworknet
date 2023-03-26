import { Link } from 'react-router-dom'

const CookiesConsent = () => {
    return (
        <div className="fixed bottom-0 bg-gray-900 w-full h-20 flex">
            <p className="text-white font-bold content-center">
                By using our Website you accept our <Link to={'/cookies-policy'}>Cookies-Policy</Link>. 
            </p>

            <div id="buttons" className='float-right right-0'>
                <button id='acceptcookies'>
                    Accept
                </button>

                <Link to={'/cookies-policy'}>
                    <button id='Learnmore'>
                        Learn more
                    </button>                
                </Link>
            </div>
        </div>
    )
}

export default CookiesConsent;