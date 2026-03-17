const Footer = ({title, subtitle}) => {
    return (
        <div className='container mx-auto p-10  bg-white'>

            <div className='text-center space-y-3 pb-5'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='text-base text-[rgba(9,8,15,0.6)]'>{subtitle}</p>
            </div>

            <hr className='text-[rgba(9,8,15,0.1)]'/>

    <footer className="footer sm:footer-horizontal text-base-content justify-evenly pt-5">
    <nav className='place-items-center'>
        <h6 className="font-bold text-lg">Services</h6>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Product Support</a>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Order Tracking</a>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Shipping & Delivery</a>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Returns</a>
    </nav>
    <nav className='place-items-center'>
        <h6 className="font-bold text-lg">Company</h6>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">About us</a>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Careers</a>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Contact</a>
    </nav>
    <nav className='place-items-center'>
        <h6 className="font-bold text-lg">Legal</h6>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Terms of use</a>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Privacy policy</a>
        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Cookie policy</a>
    </nav>
    </footer>

        </div>
    );
};

export default Footer;