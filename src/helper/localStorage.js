export const setWithExpiry = (access_token) => {
  const now = new Date()

  const item = {
    value: access_token,
    expiry: now.getTime() + 3600,
  }
  return (
    localStorage.setItem(JSON.stringify(item))
  )
}

// export const getWithExpiry = (key) => {
//   const itemStr = localStorage.getItem(key)

//   if (!itemStr) {
//     return null
//   }

//   const item = JSON.parse(itemStr)
//   const now = new Date()

//   if (now.getTime() > item.expiry) {
//     localStorage.removeItem(key)
//     return null
//   }
//   return item.value
// }