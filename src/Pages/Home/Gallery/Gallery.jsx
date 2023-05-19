import GalleryCard from "./GalleryCard";


const Gallery = () => {
    return (
        <div className="mt-4">
        <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-600">NEW THING</h3>
            <h2 className="text-5xl">NEW AREA FOR YOU!!!</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
            <GalleryCard></GalleryCard>
        </div>
    </div>
    );
};

export default Gallery;