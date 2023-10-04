import profileImage from '../assets/profileImage.png'
import Category from './Category'

function Profile() {
    return (
        <div className='profile'>
            <img src={profileImage} alt="profile image" className='image' />
            <div className='profileDetails'>
                <div className='information'>
                    <p>Sukomal Dutta</p>
                    <p>hypersukomal@gmail.com</p>
                    <p className='username'>Sukomal07</p>
                </div>
                <div className='categoryList'>
                    <Category bgColor={'#9F94FF'} name={"Action"} showIcon={false} />
                </div>
            </div>
        </div>
    )
}

export default Profile
