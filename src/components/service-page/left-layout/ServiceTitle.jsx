import Image from "next/image";

const ServiceTitle = () => {
    const bgImage = 'https://ibb.co.com/h1Y5SjS7';
    return (
        <div>
            <Image src={bgImage} alt="service image" className="rounded-md" width={752} height={400} />

            <div>
                <h2 className="text-3xl font-bold mb-4">Unique Car Engine Service</h2>
                <p className="text-secondary">
                    There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
            </div>
        </div>
    );
};

export default ServiceTitle;
