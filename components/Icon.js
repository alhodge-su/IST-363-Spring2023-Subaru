import Image from 'next/image';

const Icon = ({icon}) => {
    return <Image 
        src={`/icons/${icon}.svg`}
        alt={`${icon} icon`}
        height={20}
        width={20}
    />
}

export default Icon;