import { ref } from 'vue';
import { defineStore } from 'pinia'

export const App_listStore = defineStore('App_list', () => {

const App_list  = ref([
  {
    id: 1,
    title: 'Geese Generator',
    Ownedby: "VAULTGL" ,
    price: 1819.25, 
    description: '879 Geese on the blockchain in honor of Ringers #1' ,
    descriptionfull: ' Images released under CC0 by the original artist.Project by Vilatik.eth. Follow me on @Chad_etteNo secondary value intended Category PFPs',
    imag : 'https://raw.seadn.io/files/4cd8352158003e314f3c75ab0296dd63.svg',
},
{
  id: 2,
  title: 'BlockGames Dice #1748',
  Ownedby: "BeatKOR" ,
  price: 31.30, 
  description: 'BlockGames Dice holders get early access to the Player Network. Holders also benefit from full use of $BLOCK, the token that represents the full value of the network.' ,
  descriptionfull: 'BlockGames is a cross-game, cross-chain player network, created for the players to offer instant rewards while they play their favourite Web2 & web3 mobile games.Founded in partnership with Estoty, a leading mobile game studio with extensive experience in mobile game development and a user base of 50 million monthly active users. Backed and partnered with leading tech and blockchain giants including Google, Aptos, Polygon, Avalanche, Arbitrum, BNB, BlockGames is positioned to innovate the gaming scene with its network growth in a mutualistic cycle of value exchange',
  imag : 'https://i.seadn.io/gcs/files/0e5c63c6a6f45ded9cfc25035fb91312.jpg?auto=format&dpr=1&w=1000',
},
{
  id: 3,
  title: 'cyberpunk skull robot',
  Ownedby: "GrandeDuc" ,
  price: 1102.50, 
  description: 'Hardwired cyberpunk skull robot - 3D' ,
  descriptionfull: 'Hardwired cyberpunk skull robot - 3D illustration of science fiction cyberpunk skull faced grinning android wearing futuristic virtual reality glasses',
  imag : 'https://www.shutterstock.com/shutterstock/photos/2022343115/display_1500/stock-photo-hardwired-cyberpunk-skull-robot-d-illustration-of-science-fiction-cyberpunk-skull-faced-grinning-2022343115.jpg',
},
])
return { App_list }
})