import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl w-full sm:w-[330px] transform hover:-translate-y-1'>
      <Link to={`/listing/${listing._id}`}>
        <div className='relative overflow-hidden h-[320px] sm:h-[220px]'>
          <img
            src={
              listing.imageUrls[0] ||
              'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
            }
            alt='listing cover'
            className='h-full w-full object-cover hover:scale-110 transition-transform duration-300'
          />
          {listing.offer && (
            <div className='absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold'>
              Sale
            </div>
          )}
        </div>
        <div className='p-4 flex flex-col gap-3 w-full'>
          <p className='truncate text-lg font-bold text-slate-800'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-5 w-5 text-blue-600' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.address}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2 leading-relaxed'>
            {listing.description}
          </p>
          <div className='flex items-center justify-between pt-2 border-t border-gray-200'>
            <p className='text-blue-600 font-bold text-lg'>
              $
              {listing.offer
                ? listing.discountPrice.toLocaleString('en-US')
                : listing.regularPrice.toLocaleString('en-US')}
              {listing.type === 'rent' && <span className='text-sm text-gray-600'>/mo</span>}
            </p>
            <div className='text-slate-700 flex gap-3 font-semibold'>
              <div className='flex items-center gap-1'>
                <span className='text-blue-600'>🛏️</span>
                <span className='text-xs'>
                  {listing.bedrooms > 1 ? `${listing.bedrooms}` : `${listing.bedrooms}`}
                </span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='text-blue-600'>🚿</span>
                <span className='text-xs'>
                  {listing.bathrooms > 1 ? `${listing.bathrooms}` : `${listing.bathrooms}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
