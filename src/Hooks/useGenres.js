const useGeneres = (selectedGeneres) => {
    if(selectedGeneres < 1) return '';
    
    const GenreIds = selectedGeneres.map(g=>{return g.id})
    return GenreIds.reduce((acc, curr)=>{
        return acc + ',' + curr;
    })
}

export default useGeneres;