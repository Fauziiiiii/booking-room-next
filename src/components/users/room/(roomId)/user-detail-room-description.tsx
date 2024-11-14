'use client'

export const apalah = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis tempora dignissimos doloremque facilis voluptate laborum, 
provident aperiam voluptatibus quasi error asperiores dolor id facere temporibus, dolorem maiores eveniet velit commodi hic aliquid, et rem dolorum! Sed veritatis enim amet 
hic eveniet cupiditate expedita porro quia architecto rem, praesentium, aliquid tempore autem sapiente facere consectetur iure inventore qui. Corporis eius aperiam eos 
ullam similique velit dolor quasi fugiat. Pariatur obcaecati deserunt ipsa tempore dolore accusantium impedit omnis culpa quas similique deleniti aut quibusdam cupiditate 
delectus ad, voluptatibus totam natus velit repellat ducimus ratione? Harum numquam quia temporibus error recusandae molestiae esse itaque! Dignissimos, modi! Quod voluptate 
commodi nihil iure officia pariatur earum ipsum quis beatae impedit officiis, hic fugit at voluptatibus esse ullam deleniti eveniet obcaecati ducimus molestiae non. 
Id eligendi nobis accusamus delectus consectetur deleniti quos eveniet ratione explicabo! Praesentium, adipisci vel error sed, molestiae inventore ducimus placeat labore 
amet impedit deserunt tenetur quo officiis corporis illo. Molestias aliquid impedit autem ea sit inventore consequatur doloribus, totam dolore sequi quam quo laboriosam 
harum saepe modi corrupti pariatur exercitationem recusandae voluptates quasi consequuntur. Iste nobis blanditiis quis non consequatur enim quia nesciunt ad id, molestias necessitatibus reiciendis neque voluptates temporibus.`;

import { useState } from 'react';

import React from 'react'

export default function RoomDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionTitle = "About Heading Title for Office Space Building"
  
  const maxChars = 250;
  const isLongText = apalah.length > maxChars;
  const displayedText = isExpanded ? apalah : `${apalah.slice(0, maxChars)}...`;
  return (
    <div className="container-description w-full p-4">
        <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
          <div className="flex flex-wrap items-start gap-2 mb-4">
            <div className="flex-1 min-w-0 pr-4">
              <h2 className="text-xl font-semibold truncate">
                {descriptionTitle}
              </h2>
            </div>
            
            {isLongText && (
              <div className="flex-shrink-0">
                <button
                  onClick={toggleDescription}
                  className="text-[#1e3a5f] text-sm font-semibold hover:text-[#2c578f] transition-colors
                    whitespace-nowrap px-2 py-1 rounded"
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </div>
            )}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-base leading-relaxed">
              {displayedText}
            </p>
          </div>
        </div>
      </div>
  )
}


// interface RoomDescriptionProps {
//   title: string;
//   description: string;
//   maxChars?: number;
// }

// export default function RoomDescription({ 
//   title, 
//   description, 
//   maxChars = 250 
// }: RoomDescriptionProps) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const isLongText = description.length > maxChars;
//   const displayedText = isExpanded ? description : `${description.slice(0, maxChars)}...`;

//   return (
//     <div className="container-description w-full p-4">
//       <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
//         <div className="flex flex-wrap items-start gap-2 mb-4">
//           <div className="flex-1 min-w-0 pr-4">
//             <h2 className="text-xl font-semibold truncate">{title}</h2>
//           </div>
          
//           {isLongText && (
//             <div className="flex-shrink-0">
//               <button
//                 onClick={() => setIsExpanded(!isExpanded)}
//                 className="text-[#1e3a5f] text-sm font-semibold hover:text-[#2c578f] transition-colors
//                   whitespace-nowrap px-2 py-1 rounded"
//               >
//                 {isExpanded ? 'Show Less' : 'Show More'}
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="prose max-w-none">
//           <p className="text-gray-700 text-base leading-relaxed">
//             {displayedText}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
