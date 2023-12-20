export const getFormattedTime = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString("en-EN", {
        hour: "2-digit",
        minute: "2-digit",
      })
}

export const getFormattedDate = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString("en-EN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
}