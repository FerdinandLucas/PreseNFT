// Heyy there, welcome to the Rarity logic behind PreseNFT :))
// Start: Implementing moralis and connecting to Api and getting raw Collection metadata.

const Moralis = require('moralis/node')

const serverUrl = "https://aizve2ka1w9x.usemoralis.com:2053/server"; //Moralis Server Url here
const appId = "xfcgOfvlPAkEiKpDWRbGuVdVejxI3UyNvitEhKLP"; //Moralis Server App ID here

Moralis.start({serverUrl, appId})

const collectionAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"; //Collection Address Here
const collectionName = "CryptoPunks"; //CollectioonName Here
