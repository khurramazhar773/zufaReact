import React from 'react';
const awards = [
    { id: 1, title: '21+', desc: 'Years of Experience' },
    { id: 2, title: '30K', desc: 'Happy Customers' },
    { id: 3, title: '15+', desc: 'Award Winners' },
    { id: 4, title: '100%', desc: 'Product Guaranteed' },
];

function AchievementCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 p-7">
            {awards.map((award) => (
                <div
                    key={award.id}
                    className="border-2 border-gray-300 rounded text-center p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                    <h2 className="text-3xl font-bold">{award.title}</h2>
                    <p className="text-xl">{award.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default AchievementCard;