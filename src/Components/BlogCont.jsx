import BlogCard from "./BlogCard";
import blogData from "../Constants/blogData";

export default function BlogCont() {
    const data = blogData.slice(2, 5)
    return (
        <div className="flex justify-center items-center min-h-screen my-8 md:-my-24">
            {/* Center the container in both directions */}
            <div className="container mx-auto px-10">
                {/* <p className="text-2xl font-bold mb-6 text-center">Popular Blogs</p> */}

                {/* Grid layout with equal X and Y spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data?.map((item) => (
                        <BlogCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            author={item.author}
                            time={item.time}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}