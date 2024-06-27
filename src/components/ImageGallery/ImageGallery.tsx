import ImageCard from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

import { ImageGalleryProps } from "./ImageGallery.types"

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
return (
	<ul className={css.imageList}>
	{items.map((item) => (
	<li key={item.id}>
			<ImageCard image={item.urls} slug={item.slug} onClick={onImageClick} />
	</li>))}
	</ul>
		)
}

export default ImageGallery