import { GalleryItems } from "../App/App.types"

export type ImageGalleryProps = {
	items: GalleryItems[];
	onImageClick: (regularSizeImg: string) => void;
}