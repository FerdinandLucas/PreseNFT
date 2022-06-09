// Heyy there, welcome to the Rarity logic behind PreseNFT :))
// Start: Implementing moralis and connecting to Api and getting raw Collection metadata.

const Moralis = require('moralis/node')

const serverUrl = "https://aizve2ka1w9x.usemoralis.com:2053/server"; //Moralis Server Url here
const appId = "xfcgOfvlPAkEiKpDWRbGuVdVejxI3UyNvitEhKLP"; //Moralis Server App ID here

Moralis.start({serverUrl, appId})

const collectionAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"; //Collection Address Here
const collectionName = "CryptoPunks"; //CollectioonName Here

async function createRarity() {
    const tokens = await Moralis.Web3API.token.getAllTokenIds({address: collectionAddress})
    console.log(tokens); //  1 page 
    const collectionSize = tokens.total // all NFTs in the collection 
    const pageSize = tokens.page_size  // all Api-data pages / 1 page = ca 100 iterations
        console.log(collectionSize);
        console.log(pageSize); 
    let alltokens = tokens.result // all data

    /* const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    for (let i = pageSize; i < collectionSize; i = i + pageSize) {
        const tokens = await Moralis.Web3API.token.getAllTokenIds({   
          address: collectionAddress,

        }); // loop through all the Nfts in the Api
        while (tokens.next){
            result = await tokens.next()
            //console.log(tokens)
        }
        alltokens = alltokens.concat(tokens.result);
        await timer(8000);
    } */


    let metadata = alltokens.map((e) => JSON.parse(e.metadata).attributes);
    console.log(metadata[0]);
};

createRarity();