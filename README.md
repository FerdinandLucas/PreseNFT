# PreseNFT
Greetings and welcome to my NFT rarity-ranker!
https://www.youtube.com/watch?app=desktop&v=8rQyKd6Tub4&cbrd=1
Since I am using a new tool/ framework, I will document here my journey for future understanding.
Here we gooo;)


- Create a Server on Moralis.io and choose your Chain.

- npm init + npm install moralis

- It will give you a Server Url and Application ID.

- Implement and call in preseNFT.js :
    - const serverUrl = ""; //Moralis Server Url here
    - const appId = ""; //Moralis Server App ID here
    - const collectionAddress = ""; //Collection Address Here
    - const collectionName = ""; //CollectioonName Here

- Run node preseNFT.js to rank your NFT collection and put it on your moralis db.

- Go to Flucas boilerplate and install dependencies by: yarn install
- Add your sever Url and appID in the .env file
- Add your CollectionName as an "Option" in the src/components/QuickStart 

- Run yarn start



