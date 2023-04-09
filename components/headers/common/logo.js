import Link from 'next/link';
import React, { Fragment } from 'react';

const LogoImage = ({ logo }) => {
    return (
        <Fragment>
            <Link href={'/'} className='logo'>

                    <img src={`/assets/images/logos/${logo?logo:'logo.png'}`} alt="" className="img-fluid" />
            </Link>
        </Fragment>
    )
}

export default LogoImage;