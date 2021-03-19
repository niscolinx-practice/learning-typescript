export const stringToDate = (date: string): Date => {
    const stringDate = date.split('/')
    return new Date(
        parseInt(stringDate[2]),
        1 - parseInt(stringDate[1]),
        parseInt(stringDate[0])
    )
}
