class FavoritesService {
    setFavoriteIds = (favoriteIds: number[], characterId: number) => {
        return favoriteIds.filter((item) => item !== characterId)
    }
}
export default FavoritesService