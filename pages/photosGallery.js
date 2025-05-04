import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export async function getStaticProps() {
  const images = [
    'IMG-20250502-WA0008.jpg', 'IMG-20250502-WA0009.jpg', 'IMG-20250502-WA0010.jpg',
    'IMG-20250502-WA0011.jpg', 'IMG-20250502-WA0012.jpg', 'IMG-20250502-WA0013.jpg',
    'IMG-20250502-WA0014.jpg', 'IMG-20250502-WA0015.jpg', 'IMG-20250502-WA0016.jpg',
    'IMG-20250502-WA0017.jpg', 'IMG-20250502-WA0018.jpg', 'IMG-20250502-WA0019.jpg',
    'IMG-20250502-WA0020.jpg', 'IMG-20250502-WA0021.jpg', 'IMG-20250502-WA0022.jpg',
    'IMG-20250502-WA0023.jpg', 'IMG-20250502-WA0024.jpg', 'IMG-20250502-WA0025.jpg',
    'IMG-20250502-WA0026.jpg', 'IMG-20250502-WA0027.jpg', 'IMG-20250502-WA0028.jpg',
    'IMG-20250502-WA0029.jpg', 'IMG-20250502-WA0030.jpg', 'IMG-20250502-WA0031.jpg',
    'IMG-20250502-WA0032.jpg', 'IMG-20250502-WA0033.jpg', 'IMG-20250502-WA0034.jpg',
    'IMG-20250502-WA0035.jpg', 'IMG-20250502-WA0036.jpg', 'IMG-20250502-WA0037.jpg',
    'IMG-20250502-WA0038.jpg', 'IMG-20250502-WA0039.jpg', 'IMG-20250502-WA0040.jpg',
    'IMG-20250502-WA0041.jpg', 'IMG-20250502-WA0042.jpg', 'IMG-20250502-WA0043.jpg',
    'IMG-20250502-WA0044.jpg', 'IMG-20250502-WA0045.jpg', 'IMG-20250502-WA0046.jpg',
    'IMG-20250502-WA0047.jpg', 'IMG-20250502-WA0048.jpg', 'IMG-20250502-WA0049.jpg',
    'IMG-20250502-WA0050.jpg', 'IMG-20250502-WA0051.jpg', 'IMG-20250502-WA0052.jpg',
    'IMG-20250502-WA0053.jpg', 'IMG-20250502-WA0054.jpg', 'IMG-20250502-WA0055.jpg',
    'IMG-20250502-WA0056.jpg', 'IMG-20250502-WA0057.jpg', 'IMG-20250502-WA0058.jpg',
    'IMG-20250502-WA0059.jpg', 'IMG-20250502-WA0060.jpg', 'IMG-20250502-WA0061.jpg',
    'IMG-20250502-WA0062.jpg', 'IMG-20250502-WA0063.jpg', 'IMG-20250502-WA0064.jpg',
    'IMG-20250502-WA0065.jpg', 'IMG-20250502-WA0066.jpg', 'IMG-20250502-WA0067.jpg',
    'IMG-20250502-WA0068.jpg', 'IMG-20250502-WA0069.jpg', 'IMG-20250502-WA0070.jpg',
    'IMG-20250502-WA0071.jpg', 'IMG-20250502-WA0072.jpg', 'IMG-20250502-WA0073.jpg',
    'IMG-20250502-WA0074.jpg', 'IMG-20250502-WA0075.jpg', 'IMG-20250502-WA0076.jpg',
    'IMG-20250502-WA0077.jpg', 'IMG-20250502-WA0078.jpg', 'IMG-20250502-WA0079.jpg',
    'IMG-20250502-WA0080.jpg', 'IMG-20250502-WA0081.jpg', 'IMG-20250502-WA0082.jpg',
    'IMG-20250502-WA0083.jpg', 'IMG-20250502-WA0084.jpg', 'IMG-20250502-WA0085.jpg',
    'IMG-20250502-WA0086.jpg', 'IMG-20250502-WA0087.jpg', 'IMG-20250502-WA0088.jpg',
    'IMG-20250502-WA0089.jpg', 'IMG-20250502-WA0090.jpg', 'IMG-20250502-WA0091.jpg',
    'IMG-20250502-WA0092.jpg', 'IMG-20250502-WA0093.jpg', 'IMG-20250502-WA0094.jpg',
    'IMG-20250502-WA0095.jpg', 'IMG-20250502-WA0096.jpg', 'IMG-20250502-WA0097.jpg',
    'IMG-20250502-WA0098.jpg', 'IMG-20250502-WA0099.jpg', 'IMG-20250502-WA0100.jpg',
    'IMG-20250502-WA0101.jpg', 'IMG-20250502-WA0102.jpg', 'IMG-20250502-WA0103.jpg',
    'IMG-20250502-WA0104.jpg', 'IMG-20250502-WA0105.jpg', 'IMG-20250502-WA0106.jpg',
    'IMG-20250502-WA0107.jpg', 'IMG-20250502-WA0108.jpg', 'IMG-20250502-WA0109.jpg',
    'IMG-20250502-WA0110.jpg', 'IMG-20250502-WA0111.jpg', 'IMG-20250502-WA0112.jpg',
    'IMG-20250502-WA0113.jpg', 'IMG-20250502-WA0114.jpg', 'IMG-20250502-WA0115.jpg',
    'IMG-20250502-WA0116.jpg', 'IMG-20250502-WA0117.jpg', 'IMG-20250502-WA0118.jpg',
    'IMG-20250502-WA0119.jpg', 'IMG-20250502-WA0120.jpg', 'IMG-20250502-WA0121.jpg',
    'IMG-20250502-WA0122.jpg'
  ];

  return {
    props: {
      images
    }
  };
}

export default function PhotosGallery({ images }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            दिंडोरी कृषि उत्पन्न बाजार समिती.जि.नाशिक
          </h1>
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">
            फोटो गॅलरी
          </h2>

          <div className="prose max-w-none">
            <p className="mb-6 text-center">
              दिंडोरी कृषि उत्पन्न बाजार समितीच्या विविध कार्यक्रम, प्रकल्प आणि उपक्रमांचे छायाचित्र येथे पाहू शकता.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => {
                const row = Math.floor(index / 4);
                const animationType = row % 4;

                return (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                    initial={{
                      opacity: 0,
                      x: animationType === 0 ? 100 : animationType === 1 ? -100 : 0,
                      y: animationType === 2 ? 100 : animationType === 3 ? -100 : 0
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: 'tween'
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-60 w-full">
                      <Image 
                        src={`/gallery/${image}`} 
                        alt={`बाजार छायाचित्र ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
