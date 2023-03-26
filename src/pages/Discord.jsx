import { Link } from "react-router-dom";

const Discord = () => {

    const dcInvite = 'https://discord.gg/3pTPdpngxs'
// !! 'Discord' has to stay, otherwise link wont open or it will open twice !!!
    function dcOnLoad() {
        window.open(dcInvite, 'Discord')
    }

    return (
        <div id="dcpage" onLoad={dcOnLoad()} className="absolute left-1/2 -translate-x-1/2 -mt-20">
            <p className="text-lg font-medium">
                Thank you for joining our Discord Server <br />
                If the link didn't open automatically, <Link className="font-medium" to={dcInvite}>click here</Link>. 
            </p>

            <div id="dcreturn" className="absolute left-1/2 -translate-x-1/2 mt-5">
                <Link to={'/'}>
                    Return Home
                </Link>
            </div>
        </div>
    )
}

export default Discord