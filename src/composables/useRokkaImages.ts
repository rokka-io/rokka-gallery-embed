import type Image from "@/classes/Image";
import type RokkaImage from "@/classes/RokkaImage";
import { ROKKA_URL } from "@/constants/constants";

export default (images: RokkaImage[]): Image[] => images.map(image => ({
    id: image.hash,
    url: `${ROKKA_URL}/${image.hash}/${image.name}`,
    description: `${image.mimetype} / ${image.name}`
}))