import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Row, Col } from 'react-bootstrap';

const SocialLinks = () => {

    const iconz = [
        {
            icon: BsFacebook,
            name: 'Facebook',
            bgColor: 'bg-primary',
            link: 'https://www.facebook.com/profile.php?id=100006241362203'
        },
        {
            icon: BsGithub,
            name: 'Github',
            bgColor: 'bg-secondary',
            link: 'https://github.com/QQrban'
        },
        {
            icon: BsInstagram,
            name: 'Instagram',
            bgColor: 'bg-danger',
            link: 'https://www.instagram.com/krbn.rmznv/',
        },
        {
            icon: BsLinkedin,
            name: 'Linkedin',
            bgColor: 'bg-info',
            link: 'https://www.linkedin.com/in/kurban-ramazanov-2b50b026b/',
        },
    ];


    return (
        <div className='social-links'>
            <ul className='m-0'>
                <Row style={{ minWidth: '150px' }} className='social-links-item w-100 gap-1'>
                    {iconz.map((icon, i) => (
                        <Col
                            onClick={() => window.open(icon.link)}
                            key={i}
                            style={{ cursor: 'pointer' }}
                            className={`${icon.bgColor} border d-flex gap-4 align-items-center p-1`}
                        >
                            <icon.icon className='text-white' size={22} />
                            <span className='text-white'>{icon.name}</span>
                        </Col>
                    ))}
                </Row>
            </ul>
        </div>
    )
}

export default SocialLinks