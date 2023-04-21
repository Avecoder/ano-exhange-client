import axios from 'axios'


const api = axios.create({
    baseURL: 'https://api.ethplorer.io/'
})


export const getHistory = async (address: string, apiKey: string) => {
    const response = await api.get(`getAddressHistory/${address}?apiKey=${apiKey}&limit=100`);

    return response.data.operations
}

export const getActiveByAddress = async (address: string, apiKey: string) => {
    const actives = await api.get(`getAddressInfo/${address}?apiKey=${apiKey}`)

    const etheriumData = {
        balance: actives.data.ETH.balance,
        usdBalance: (actives.data.ETH.balance * actives.data.ETH.price.rate).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }

    const infoAddress = {
        transactionCount: actives.data.countTxs,
        mainData: [
            {
                title: 'Total received',
                value: 200
            },
            {
                title: 'Total spent',
                value: 200
            },
            {
                title: 'ERC-20 Token Balance',
                value: 200
            },
            {
                title: 'Asset count',
                value: actives.data.tokens.length
            }
        ]
    }


    const active = actives.data.tokens.map((item: any) => {
        return {
            contractAddress: item.tokenInfo.address,
            value: item.rawBalance,
            tokenName: item.tokenInfo.name,
            tokenSymbol: item.tokenInfo.symbol.trim().split(' ')[0],
            decimals: item.tokenInfo.decimals
        }
    })

    return {
        active,
        etheriumData,
        infoAddress
    }
}


export const getAddressData = async (address: string, apiKey: string) => {
    const firstTransaction = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=1&sort=asc&apikey=${apiKey}`)
    const lastTransaction = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=1&sort=desc&apikey=${apiKey}`)


    return {
        firstTransaction: firstTransaction.data.result[0],
        lastTransaction: lastTransaction.data.result[0],
        address
    }
}