import { resolvePublicPath } from '../../utils/rewritePathPublic';

const Profile = ({ nama, jabatan, motto, src }) => {
  return (
    <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center card-hover transition-all duration-300'>
      <div className='hover:scale-125 transition duration-300 w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500'>
        <img src={resolvePublicPath(src)} alt={nama} />
      </div>
      <h3 className='text-xl font-semibold mb-1'>{nama}</h3>
      <p className='text-blue-700 font-medium mb-2'>{jabatan}</p>
      <p className='text-sm text-gray-600 capitalize'>{motto}</p>
    </div>
  );
};

export default Profile;
