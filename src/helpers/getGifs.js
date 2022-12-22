export const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=faPzDtmQ7sQ2w4OTFHpgQKjB35nfUG9o&q=${category}&limit=50`
    const resp = await fetch (URL);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
    }));
        
    return gifs;
}