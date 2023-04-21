

export const convertData = (timestamp: string) => {
  const date = new Date(parseInt(timestamp) * 1000)
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const year = date.getUTCFullYear()
  const month = months[date.getUTCMonth()]
  const day = date.getUTCDate().toString().padStart(2, '0')
  let hour = date.getUTCHours()
  let minute = date.getUTCMinutes().toString().padStart(2, '0')
  const ampm = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12
  hour = hour ? hour : 12
  return `${month} ${day}, ${year} ${hour}:${minute} ${ampm} UTC`
}

export const convertTransactionData = (address: string, transaction: any) => {


  const to = transaction.to === address.toLocaleLowerCase() ? 'Recieved' : 'Sent'

  const date = new Date();
  const timeCurrent = date.getTime()
  const seconds = Math.floor((timeCurrent - parseInt(transaction.timeStamp) * 1000) / 1000);

    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${to} ${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${to} ${interval} months ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${to} ${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${to} ${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${to} ${interval} minutes ago`;
    }
    return `${to} ${Math.floor(seconds)} seconds ago`;
  
}