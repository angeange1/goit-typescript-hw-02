export type ImageCardProps = {
    image: { small: string; regular: string; }; 
    slug: string;
    onClick: (regular: string) => void;
}