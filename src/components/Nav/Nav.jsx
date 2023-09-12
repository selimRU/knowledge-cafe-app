import profile from '../../assets/images/profile.png'

const Nav = () => {
    return (
        <div className='flex flex-row justify-between items-center my-8 border-b-2 py-5'>
            <div>
                <h1 className=" text-4xl font-semibold ">Knowledge Cafe</h1>
            </div>
            <div>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Nav;