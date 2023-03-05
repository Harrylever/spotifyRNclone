
export type AlbumProps = {
	id: string;
	imageUri: string;
	artistsHeadline: string;
};

export type AlbumCategoryProps = {
	id?: string;
	title: string;
	albums: AlbumProps[];
};
