const GalleryPostCard = ({ content, author }) => {

    const [image, setImage] = useState(false);
    const [tempSrc, setTempSrc] = useState('');

    const getImg = (src) => {
        setTempSrc(src)
        setImage(true)
    }


    let { title, banner, publishedAt, gallery_id: id } = content;
    let { fullname, username, profile_img } = author;
    return (
        <div className="w-full" onClick={() => getImg(banner)}>
            <img src={banner} className='object-cover rounded-lg' />
        </div>
    )
}

export default GalleryPostCard;