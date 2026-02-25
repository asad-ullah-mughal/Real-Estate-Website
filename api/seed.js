import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

// Import models
import User from './models/user.model.js';
import Listing from './models/listing.model.js';

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB!');

    // Clear existing data
    await User.deleteMany({});
    await Listing.deleteMany({});
    console.log('Cleared existing data');

    // Create sample users
    const users = await User.insertMany([
      {
        username: 'johndoe',
        email: 'john@example.com',
        password: 'hashedpassword123', // In production, these should be properly hashed
        avatar: 'https://img.freepik.com/free-photo/portrait-young-woman-casual-shirt-smiling-blue-background_140725-166194.jpg?w=400',
      },
      {
        username: 'janedoe',
        email: 'jane@example.com',
        password: 'hashedpassword456',
        avatar: 'https://img.freepik.com/free-photo/portrait-smiling-woman-with-long-hair_213229-21.jpg?w=400',
      },
      {
        username: 'realestateagent',
        email: 'agent@example.com',
        password: 'hashedpassword789',
        avatar: 'https://img.freepik.com/free-photo/confident-business-man-profile-picture_415061-370.jpg?w=400',
      },
    ]);
    console.log(`Created ${users.length} sample users`);

    // Create sample listings
    const listings = await Listing.insertMany([
      {
        name: 'Beautiful Modern House',
        description:
          'A stunning modern house with 4 bedrooms, 3 bathrooms, and a spacious living area. Perfect for families looking for luxury and comfort.',
        address: '123 Main Street, New York, NY 10001',
        type: 'sale',
        bedrooms: 4,
        bathrooms: 3,
        regularPrice: 500000,
        discountPrice: 450000,
        offer: true,
        parking: true,
        furnished: true,
        imageUrls: [
          'https://images.unsplash.com/photo-1570129477492-45ac003cdd4f?w=800&q=80',
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
          'https://images.unsplash.com/photo-1572120471610-3c41a34ecc38?w=800&q=80',
        ],
        userRef: users[0]._id,
      },
      {
        name: 'Cozy Apartment Downtown',
        description:
          'A cozy apartment in the heart of downtown with modern amenities, perfect for young professionals and students.',
        address: '456 Oak Avenue, Los Angeles, CA 90001',
        type: 'rent',
        bedrooms: 1,
        bathrooms: 1,
        regularPrice: 2000,
        discountPrice: 2000,
        offer: false,
        parking: true,
        furnished: false,
        imageUrls: [
          'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&q=80',
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
        ],
        userRef: users[1]._id,
      },
      {
        name: 'Luxury Villa with Pool',
        description:
          'Exclusive luxury villa featuring a swimming pool, spa, home theater, and panoramic views of the city.',
        address: '789 Sunset Boulevard, Miami, FL 33101',
        type: 'sale',
        bedrooms: 6,
        bathrooms: 5,
        regularPrice: 1200000,
        discountPrice: 1050000,
        offer: true,
        parking: true,
        furnished: true,
        imageUrls: [
          'https://images.unsplash.com/photo-1512917774080-9b274b11b883?w=800&q=80',
          'https://images.unsplash.com/photo-1516455590571-18256e5bb809?w=800&q=80',
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
        ],
        userRef: users[2]._id,
      },
      {
        name: 'Spacious Family Home',
        description:
          'Large family home with a big backyard, perfect for families. Close to schools and shopping centers.',
        address: '321 Oak Lane, Chicago, IL 60601',
        type: 'sale',
        bedrooms: 5,
        bathrooms: 3,
        regularPrice: 600000,
        discountPrice: 600000,
        offer: false,
        parking: false,
        furnished: false,
        imageUrls: [
          'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?w=800&q=80',
          'https://images.unsplash.com/photo-1519167758481-83f19106048c?w=800&q=80',
        ],
        userRef: users[0]._id,
      },
      {
        name: 'Studio Apartment',
        description:
          'Compact and efficient studio apartment with basic amenities. Great for students and singles.',
        address: '654 Pine Street, Seattle, WA 98101',
        type: 'rent',
        bedrooms: 0,
        bathrooms: 1,
        regularPrice: 1200,
        discountPrice: 1000,
        offer: true,
        parking: false,
        furnished: true,
        imageUrls: [
          'https://images.unsplash.com/photo-1521835551335-f558c475b178?w=800&q=80',
        ],
        userRef: users[1]._id,
      },
      {
        name: 'Modern Penthouse',
        description:
          'Stunning penthouse with floor-to-ceiling windows, high-end finishes, and breathtaking city views.',
        address: '987 High Street, San Francisco, CA 94102',
        type: 'sale',
        bedrooms: 3,
        bathrooms: 3,
        regularPrice: 850000,
        discountPrice: 800000,
        offer: true,
        parking: true,
        furnished: true,
        imageUrls: [
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
        ],
        userRef: users[2]._id,
      },
      {
        name: 'Charming Cottage',
        description:
          'A charming cottage in a quiet neighborhood with a garden and patio, perfect for peaceful living.',
        address: '147 Elm Street, Boston, MA 02101',
        type: 'rent',
        bedrooms: 2,
        bathrooms: 2,
        regularPrice: 1800,
        discountPrice: 1800,
        offer: false,
        parking: true,
        furnished: false,
        imageUrls: [
          'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=800&q=80',
        ],
        userRef: users[0]._id,
      },
      {
        name: 'Executive Townhouse',
        description:
          'Executive townhouse with modern design, smart home technology, and convenient urban location.',
        address: '258 Market Street, Portland, OR 97201',
        type: 'sale',
        bedrooms: 3,
        bathrooms: 2,
        regularPrice: 550000,
        discountPrice: 550000,
        offer: false,
        parking: true,
        furnished: false,
        imageUrls: [
          'https://images.unsplash.com/photo-1570129477492-45ac003cdd4f?w=800&q=80',
        ],
        userRef: users[1]._id,
      },
    ]);
    console.log(`Created ${listings.length} sample listings`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
