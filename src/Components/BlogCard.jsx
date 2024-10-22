import { useNavigate } from 'react-router-dom';

export default function BlogCard({ id, image, title, description, author, time }) {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            {/* Image */}
            <div className="h-64">
                <img
                    src={image}
                    alt="blogImage"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-2 flex flex-col flex-grow">
                {/* Title */}
                <h2 className="text-gray-900 text-lg font-bold mb-1">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-2 flex-grow">
                    {description}
                </p>

                {/* Author and Time */}
                <div className="flex justify-between items-center text-gray-500 text-xs mb-2">
                    <span>By {author}</span>
                    <span>{time} ago</span>
                </div>

                {/* Read More Button */}
                <button
                    onClick={handleReadMore}
                    className="text-orange-500 text-sm font-semibold hover:underline self-start"
                >
                    Read More
                </button>
            </div>
        </div>
    );
}