import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-3'>
        <div className='flex flex-col gap-6 p-12 max-w-6xl mx-auto'>
          <h1 className='font-bold text-4xl lg:text-6xl leading-tight'>
            Find your next <span className='text-blue-100'>perfect</span>
            <br />
            place with ease
          </h1>
          <p className='text-blue-100 text-sm sm:text-base max-w-2xl'>
            Asad Estate is the best place to find your next perfect place to
            live. We have a wide range of properties for you to choose from.
          </p>
          <Link
            to={'/search'}
            className='inline-block text-sm sm:text-base text-blue-700 font-bold bg-white px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 w-fit'
          >
            Let's get started →
          </Link>
        </div>
      </div>

      {/* Swiper */}
      <div className='max-w-6xl mx-auto my-10 px-3'>
        <Swiper navigation className='rounded-xl overflow-hidden shadow-xl'>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  className='h-[500px] relative'
                >
                  <div className='absolute inset-0 bg-black opacity-20'></div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Listing Results */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-12 my-12'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='mb-6 border-l-4 border-blue-600 pl-4'>
              <h2 className='text-3xl font-bold text-slate-800 mb-2'>✨ Recent Offers</h2>
              <Link className='text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors' to={'/search?offer=true'}>Show more offers →</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='mb-6 border-l-4 border-green-600 pl-4'>
              <h2 className='text-3xl font-bold text-slate-800 mb-2'>🏠 Recent Places for Rent</h2>
              <Link className='text-sm text-green-600 font-semibold hover:text-green-800 transition-colors' to={'/search?type=rent'}>Show more places for rent →</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='mb-6 border-l-4 border-purple-600 pl-4'>
              <h2 className='text-3xl font-bold text-slate-800 mb-2'>🏡 Recent Places for Sale</h2>
              <Link className='text-sm text-purple-600 font-semibold hover:text-purple-800 transition-colors' to={'/search?type=sale'}>Show more places for sale →</Link>
            </div>
            <div className='flex flex-wrap gap-6'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
