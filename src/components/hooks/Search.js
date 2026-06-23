const SearchNote = (searchItem, notesArr) => {
    const searchWords =
        searchItem.toLowerCase().split(" ")

    return notesArr.filter(note => {
        const content =
            `${note.title} ${note.description}`
                .toLowerCase()

        return searchWords.every(word =>
            content.includes(word)
        )
    })
}

export {
    SearchNote
}