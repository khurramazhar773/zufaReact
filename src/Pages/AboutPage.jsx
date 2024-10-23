import React from "react";
import about1 from "/about/zufa-logo.png";
import about2 from "/about/vision.png";
import about3 from "/about/about-approach.png";
import EmployeeCard from "../Components/EmployeeCard";
import AchievementCard from "../Components/AchievementCard";
import Layout from "../Components/Layout/Layout";


const AboutPage = () => {
    return (
        <Layout>

            <div className="flex flex-col items-center px-5">
                {/* Our History Section */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:ym-10 md:px-16 w-full">
                    <div className="lg:w-3/5 w-full">
                        <h1 className="text-4xl font-bold mb-5">Our History</h1>
                        <p className="text-[1.03rem] ">
                            The name "Zufa" is derived from the ancient word for "gift" in a
                            forgotten language, symbolizing the joy of giving and receiving.
                            Legend has it that Zufa was once the name of a mystical marketplace
                            where travelers from distant lands gathered to trade rare treasures,
                            each with a story to tell. Inspired by this enchanting past, Zufa
                            seeks to recreate that spirit of discovery in the modern age. Our
                            curated collection features unique, high-quality products sourced
                            from artisans and creators around the world, each embodying the
                            essence of craftsmanship and culture. At Zufa, we believe that every
                            item has the power to connect people, inspire creativity, and bring
                            joy. Join us in exploring this global marketplace, where every
                            purchase is a celebration of artistry and tradition, just as it was
                            in the legendary Zufa of old.
                        </p>
                    </div>
                    <div className="lg:w-2/5 w-full">
                        <img
                            src={about1}
                            className="w-full h-96 bg-contain rounded"
                            alt="Our History"
                        />
                    </div>
                </div>
                {/* Our Vision */}
                <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-6 md:px-16 md:m-10 w-full">
                    <div className="lg:w-3/5 w-full">
                        <h1 className="text-4xl font-bold mb-5">Our Vision</h1>
                        <p className="text-[1.03rem] ">
                            At Zufa, our vision is to transform everyday spaces into expressions
                            of beauty, comfort, and individuality. We aim to offer not just
                            products, but experiences that enrich your home and life. By
                            connecting you with carefully curated textiles and home decor, we
                            strive to provide more than just fabric — we bring you stories of
                            craftsmanship, culture, and creativity from across the globe. Our
                            vision is to foster a sense of community through the shared
                            appreciation of artistry, making every piece you bring home a part
                            of something larger, meaningful, and enduring. We envision a world
                            where every home tells a story, where every item holds meaning, and
                            where quality is never compromised. Zufa is committed to connecting
                            people through the shared appreciation of artistry and design. Our
                            mission is to create a global community that values the beauty in
                            details, and to provide a platform where the timeless art of
                            textiles can be celebrated and enjoyed by all. With every purchase,
                            we aim to add a touch of joy, craftsmanship, and inspiration to your
                            life.
                        </p>
                    </div>
                    <div className="lg:w-2/5 w-full">
                        <img
                            src={about2}
                            className="w-full h-96 bg-cover rounded"
                            alt="Our Vision"
                        />
                    </div>
                </div>
                {/* Our Approach */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:m-10 md:px-16 w-full">
                    <div className="lg:w-3/5 w-full">
                        <h1 className="text-4xl font-bold mb-5">Our Approach</h1>
                        <p className="text-[1.03rem]">
                            At Zufa, our approach is grounded in a deep commitment to quality,
                            craftsmanship, and customer satisfaction. We believe in thoughtful
                            sourcing, which is why we carefully handpick every item in our
                            collection, ensuring that it meets our high standards of design,
                            durability, and artistry. By working directly with skilled artisans
                            and trusted manufacturers, we not only support ethical practices but
                            also guarantee that each product tells its own unique story of
                            creativity and tradition. We approach every step of our process with
                            a focus on detail and care. From selecting the finest materials to
                            creating timeless designs, we aim to provide our customers with
                            products that enhance their homes and daily lives. Our dedication
                            extends beyond just offering beautiful items — we prioritize
                            excellent customer service, ensuring that every interaction with
                            Zufa is seamless and personalized. We listen to our customers, value
                            their feedback, and continuously evolve our offerings to meet their
                            needs.
                        </p>
                    </div>
                    <div className="lg:w-2/5 w-full">
                        <img
                            src={about3}
                            className="w-full h-96 bg-cover rounded"
                            alt="Our Approach"
                        />
                    </div>
                </div>
                {/* Achievements Section */}
                <h1 className="text-2xl font-bold sm:text-3xl py-5">Achivements</h1>
                <AchievementCard /> {/* Use imported AchievementCard component */}
                {/* Our Team Section */}
                <h1 className="text-2xl font-bold sm:text-3xl">Our Team</h1>
                <div className="mb-20 w-full">
                    <EmployeeCard />
                </div>
            </div>



        </Layout>
    )
}

export default AboutPage

// function SectionHeader({ title }) {
//     return (
//         <div className="flex justify-center items-center mb-10">
//             <h1 className="text-2xl sm:text-3xl">{title}</h1>
//         </div>
//     );
// }