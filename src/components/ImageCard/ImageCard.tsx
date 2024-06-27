import css from "./ImageCard.module.css"

import { ImageCardProps } from "./ImageCard.types"

const ImageCard: React.FC<ImageCardProps> = ({ image: { small, regular }, slug, onClick }) => {

const handleClick = () => {onClick(regular)}
return (
    <div>
        <img className={css.card} src={small} alt={slug} onClick={handleClick} />
    </div>)
}

export default ImageCard