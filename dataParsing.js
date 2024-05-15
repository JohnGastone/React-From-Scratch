const User = {
    name: 'Mbambadu',
    imageUrl: 'https://www.johngastone.my.canva.site',
    age: 18
}

export default function Profile() {
    return (
        <>
            <h1>{User.name}</h1>
            <img
                src={User.imageUrl}
                alt={'Photo of' + User.name}
                style={{
                    imageHeight: '100%',
                    imageWidth: '100%',
                    borderRadius: '50%',
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                }}
            >{User.name} + 's' Age is { User.age }</img>
        </>
    )
}