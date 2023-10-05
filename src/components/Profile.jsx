import profileImage from '../assets/profileImage.png'
import Category from './Category'

function Profile() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const choices = JSON.parse(localStorage.getItem('allCategory'));
    return (
        <div className='profile'>
            <img src={profileImage} alt="profile image" className='image' />
            <div className='profileDetails'>
                <div className='information'>
                    <p>{userData.name}</p>
                    <p>{userData.email}</p>
                    <p className='username'>{userData.username}</p>
                </div>
                <div className='categoryList'>
                    {
                        choices && choices.map((choice, index) => (
                            <Category key={index} bgColor={'#9F94FF'} name={choice} showIcon={false} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
