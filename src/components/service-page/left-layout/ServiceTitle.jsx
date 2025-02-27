import Image from "next/image";

const ServiceTitle = () => {
    return (
        <div>
            <div className="w-full">
                <Image
                    src="/assets/images/services/3.jpg"
                    alt="service image"
                    className="w-full rounded-md"
                    width={752}
                    height={200}
                />
            </div>

            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">Unique Car Engine Service</h2>
                <p className="text-secondary">
                    There are many variations of passages of available, but the majority
                    have suffered alteration in some form, by injected humour, or
                    randomized words which don't look even slightly believable. If you are
                    going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                </p>
            </div>
        </div>
    );
};

export default ServiceTitle;
