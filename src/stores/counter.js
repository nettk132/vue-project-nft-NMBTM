import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Art_listStore = defineStore('Art_list', () => {

const Art_list  = ref([
  {
    id: 'art1',
    title: 'Cyber Skull',
    Owned_by: 'Nocturnal Media',
    price: 975.00,
    description: 'Cyber Skull Virtual Reality Cyberpunk floppy disc wires 80s 90s',
    image: 'https://www.shutterstock.com/shutterstock/photos/1318065872/display_1500/stock-vector-cyber-skull-virtual-reality-cyberpunk-floppy-disc-wires-s-s-1318065872.jpg',
    category: 'Art'
},
{
    id: 'art2',
    title: 'vector',
    Owned_by: 'nattapon kanchanaket',
    price: 675.00,
    description: 'David michelangelo portraits Illustration vector art',
    image: 'https://www.shutterstock.com/shutterstock/photos/1665555634/display_1500/stock-vector-david-michelangelo-portraits-illustration-vector-art-1665555634.jpg',
    category: 'Art'
},
{
    id: 'art3',
    title: 'van gogh',
    Owned_by: 'nattapon kanchanaket',
    price: 565.00,
    description: 'van gogh vector art illustration design',
    image: 'https://www.shutterstock.com/shutterstock/photos/1506765383/display_1500/stock-vector-van-gogh-vector-art-illustration-design-1506765383.jpg',
    category: 'Art'
},
{
    id: 'art4',
    title: 'Lofi girl illustration',
    Owned_by: 'Fortis Design',
    price: 255.40,
    description: 'Young woman looking in the distance.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2279016883/display_1500/stock-vector-lofi-girl-illustration-young-woman-looking-in-the-distance-cartoon-drawing-of-chill-relaxed-lady-2279016883.jpg',
    category: 'Art'
},
{
    id: 'art5',
    title: 'Woman, graffiti street art fashion.',
    Owned_by: 'Fortis Design',
    price: 1580.49,
    description: 'Vector graphic, beautiful, strong, lady spray painted. Paint splatter. Cool urban modern poster texture. Powerful contemporary wall art sketch. home decor style.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2279521423/display_1500/stock-vector-woman-graffiti-street-art-fashion-vector-graphic-beautiful-strong-lady-spray-painted-paint-2279521423.jpg',
    category: 'Art'
},
{
    id: 'art6',
    title: 'Space background',
    Owned_by: 'Fortis Design',
    price: 1245.35,
    description: 'Colorful explosion on dark wallpaper. Vector art. Futuristic explosion. Creative banner for website. Astronomy. Wave of light. Shining stars nebula. Cartoon drawing night painting',
    image: 'https://www.shutterstock.com/shutterstock/photos/2272132841/display_1500/stock-vector-space-background-colorful-explosion-on-dark-wallpaper-vector-art-futuristic-explosion-creative-2272132841.jpg',
    category: 'Art'
},
{
    id: 'art7',
    title: 'joysticks gamepad',
    Owned_by: 'cddesign.co',
    price: 300.00,
    description: 'Vector Seamless pattern with joysticks gamepad illustration and slogan text, for t-shirt prints and other uses.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1805459848/display_1500/stock-vector-vector-seamless-pattern-with-joysticks-gamepad-illustration-and-slogan-text-for-t-shirt-prints-1805459848.jpg',
    category: 'Art'
},
{
    id: 'art8',
    title: 'Japanese Landscape Watercolor',
    Owned_by: 'Bankphotographer',
    price: 1565.89,
    description: 'It is a traditional garden designed with Japanese aesthetics and philosophical concepts, avoiding artificial decorations and emphasizing the natural landscape. Japanese garden designers generally use plants and worn materials to suggest the natural landscape and to express the fragility of existence as well as the ceaseless progress of time [1]: 6. Ancient Japanese art is Inspiration for garden designers of the past',
    image: 'https://www.shutterstock.com/shutterstock/photos/2313039995/display_1500/stock-vector-japanese-landscape-watercolor-asia-art-2313039995.jpg',
    category: 'Art'
},
{
    id: 'art9',
    title: "David's head. Man",
    Owned_by: 'Unknown man',
    price: 667.00,
    description: 'Statue. Earphone. Isolated. Gypsum statue of David\'s head. Man. Creative. Plaster statue of David\'s head in pixel glasses. Minimal concept art.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1650203437/display_1500/stock-photo-statue-earphone-isolated-gypsum-statue-of-david-s-head-man-creative-plaster-statue-of-david-s-1650203437.jpg',
    category: 'Art'
},
{
    id: 'art10',
    title: 'Ancient torii gate',
    Owned_by: 'Bankphotographer',
    price: 1234.59,
    description: 'Japanese art with ancient design of Torii gate and the beautiful nature of Japan, vector illustration',
    image: 'https://www.shutterstock.com/shutterstock/photos/2321626339/display_1500/stock-vector-japanese-art-with-ancient-design-of-torii-gate-and-the-beautiful-nature-of-japan-vector-illustration-2321626339.jpg',
    category: 'Art'
},
{
    id: 'art11',
    title: 'catttttt',
    Owned_by: 'Md Abdul Barek',
    price: 435.00,
    description: 'Angry cat destroyed the world in pop-art style flat',
    image: 'https://www.shutterstock.com/shutterstock/photos/2277302713/display_1500/stock-vector-angry-cat-distroyed-the-world-in-pop-art-style-flat-2277302713.jpg',
    category: 'Art'
},
{
    id: 'art12',
    title: '☕',
    Owned_by: 'Master1305',
    price: 235.00,
    description: 'Morning coffee makes things better. Comics styled yellow suit. Modern design, contemporary art collage. Inspiration, idea, trendy urban magazine style. Negative space to insert your text or ad.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1909641286/display_1500/stock-photo-morning-coffee-makes-things-better-comics-styled-yellow-suit-modern-design-contemporary-art-1909641286.jpg',
    category: 'Art'
},
{
    id: 'art13',
    title: 'heart musical',
    Owned_by: 'rogistok',
    price: 256.00,
    description: 'Music in the heart, musical orchestral instruments. Comic cartoon pop art illustration retro vintage kitsch vector',
    image: 'https://www.shutterstock.com/shutterstock/photos/1021588924/display_1500/stock-vector-music-in-the-heart-musical-orchestral-instruments-comic-cartoon-pop-art-illustration-retro-1021588924.jpg',
    category: 'Art'
},
{
    id: 'art14',
    title: 'Monkey',
    Owned_by: 'Max9545',
    price: 999.00,
    description: 'Monkey with headphones listening to music. Colored digital vector drawing illustration. Abstract monkey for wall art, t-shirt, or poster. Digital art.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2019487502/display_1500/stock-vector-monkey-with-headphones-listening-to-music-colored-digital-vector-drawing-illustration-abstract-2019487502.jpg',
    category: 'Art'
},
{
    id: 'art15',
    title: 'eye',
    Owned_by: 'Mari Dein',
    price: 999.00,
    description: '“Fluorite” - oil painting. Conceptual abstract picture of the eye. Oil painting in colorful colors. Conceptual abstract closeup of an oil painting and palette knife on canvas.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1445018480/display_1500/stock-photo--fluorite-oil-painting-conceptual-abstract-picture-of-the-eye-oil-painting-in-colorful-1445018480.jpg',
    category: 'Art'
},
{
    id: 'art16',
    title: 'english bulldog',
    Owned_by: 'ARTEMENKO VALENTYN',
    price: 790.00,
    description: 'english bulldog portrait intellectual art',
    image: 'https://www.shutterstock.com/shutterstock/photos/1926395366/display_1500/stock-photo-english-bulldog-portrait-intellectual-art-1926395366.jpg',
    category: 'Art'
},
{
    id: 'art17',
    title: 'Sunflowers',
    Owned_by: 'Ivailo Nikolov',
    price: 800.00,
    description: 'Oil painting on canvas. Sunflowers painting. Modern impressionism.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2177029373/display_1500/stock-photo-oil-painting-on-canvas-sunflowers-painting-modern-impressionism-2177029373.jpg',
    category: 'Art'
},
{
    id: 'art18',
    title: 'New year sunrise',
    Owned_by: 'Abstract the studio',
    price: 1005.33,
    description: 'Beautiful Korea, new year sunrise and natural scenery, family wearing traditional hanbok, Korean traditional painting vector illustration.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1880178172/display_1500/stock-vector-beautiful-korea-new-year-sunrise-and-natural-scenery-family-wearing-traditional-hanbok-korean-1880178172.jpg',
    category: 'Art'
},
{
    id: 'art19',
    title: 'Chinese New Year 2023',
    Owned_by: 'extripod',
    price: 1756.70,
    description: 'Dynamic perfect animation for the year of rabbit',
    image: 'https://www.shutterstock.com/shutterstock/photos/2137532615/display_1500/stock-vector-happy-chinese-new-year-rabbit-zodiac-sign-with-gold-paper-cut-art-and-craft-style-on-color-2137532615.jpg',
    category: 'Art'
},
{
    id: 'art20',
    title: 'Paper Moon',
    Owned_by: 'yesdoubleyes',
    price: 1325.65,
    description: 'Paper Moon trippy spiral vj seamless looping animations, weird surreal dreamscape abstracts for music visualizers, acid flashback montages, strange and glitchy effects that hypnotize and inspire',
    image: 'https://www.shutterstock.com/shutterstock/photos/2144014629/display_1500/stock-vector-forest-layered-paper-cut-out-style-forest-vector-file-shadow-box-idea-layered-paper-cut-design-2144014629.jpg',
    category: 'Art'
},
{
    id: 'art21',
    title: 'Colorful seamless',
    Owned_by: 'Talirina',
    price: 1205.64,
    description: 'Colorful seamless pattern with leaves, spots. Decorative colored wallpaper, good for printing. Hand drawn overlapping background, texture with decor elements, lines and shapes. Design backdrop vector',
    image: 'https://www.shutterstock.com/shutterstock/photos/1282448455/display_1500/stock-vector-colorful-seamless-pattern-with-leaves-spots-decorative-colored-wallpaper-good-for-printing-hand-1282448455.jpg',
    category: 'Art'
},
{
    id: 'art22',
    title: 'Cyber Cat',
    Owned_by: 'frozenbunn',
    price: 345.00,
    description: 'Vector art illustration - Cyber Cat.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2226852425/display_1500/stock-vector-vector-art-illustration-cyber-cat-2226852425.jpg',
    category: 'Art'
},
])
return { Art_list }
})

export const Game_listStore = defineStore('Game_list', () => {

  const Game_list  = ref([

    {
      id: 'game1',
      title: 'Portrait of a futuristic',
      Owned_by: 'Digital Storm',
      price: 1152.82,
      description: 'Portrait of a futuristic sci-fi female wearing a tactical jumpsuit and a science fiction visor. Blurred lights background with lens flares. 3D rendering.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2043994739/display_1500/stock-photo-portrait-of-a-futuristic-sci-fi-female-wearing-a-tactical-jump-suit-and-a-science-fiction-visor-2043994739.jpg',
      category: 'Game'
  },
  {
      id: 'game2',
      title: 'Pixel Game',
      Owned_by: 'PixelChoice',
      price: 125.00,
      description: 'Pixel art design with outdoor landscape background. Colorful pixel arcade screen for game design. Banner with button level up. Game design concept in retro style. Vector illustration.',
      image: 'https://www.shutterstock.com/shutterstock/photos/1715459347/display_1500/stock-vector-pixel-art-design-with-outdoor-landscape-background-colorful-pixel-arcade-screen-for-game-design-1715459347.jpg',
      category: 'Game'
  },
  {
      id: 'game3',
      title: 'Pixel Mona Lisa',
      Owned_by: 'NLD Illustration',
      price: 777.00,
      description: 'Pixel Art, Portrait of Mona Lisa, Leonardo da Vinci in frame. Creative artwork, crypto art, modern digital pixelated canvas, NFT nonfungible token. World\'s Most Famous Painting. Vector illustration.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2254415147/display_1500/stock-vector-pixel-art-portrait-of-mona-lisa-leonardo-da-vinci-in-frame-creative-artwork-crypto-art-modern-2254415147.jpg',
      category: 'Game'
  },
  {
      id: 'game4',
      title: 'Mobile game concept art',
      Owned_by: 'FGFACTORY',
      price: 777.00,
      description: 'We create game character concept art consequently allowing it to be 2d rendered or 3d modeled. Depending on project requirements.',
      image: 'https://fgfactory.com/wp-content/uploads/2019/12/image1-3-1594x768.jpg',
      category: 'Game'
  },
  {
      id : 'game5',
      title: 'cyberpunk skull robot',
      Owned_by: 'GrandeDuc ',
      price: 1152.82,
      description: 'Hardwired cyberpunk skull robot - 3D illustration of science fiction cyberpunk skull faced grinning android wearing futuristic virtual reality glasses',
      image: 'https://www.shutterstock.com/shutterstock/photos/2022343115/display_1500/stock-photo-hardwired-cyberpunk-skull-robot-d-illustration-of-science-fiction-cyberpunk-skull-faced-grinning-2022343115.jpg',
      category: 'Game'
  },
  {
      id: 'game6',
      title: 'pagoda tower',
      Owned_by: 'Jonistudio',
      price: 1846.00,
      description: 'Pagoda tower on the side of a quiet flowing river with cherry trees. Background of Mount Fujiyama, afternoon atmosphere. Animated looping background.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2322034225/display_1500/stock-vector-japan-landscape-flat-vector-art-illustration-retro-vintage-background-2322034225.jpg',
      category: 'Game'
  },
  {
      id: 'game7',
      title: 'mountains in style sumi-e, u-sin.',
      Owned_by: 'Bankphotographer',
      price: 985.63,
      description: 'Watercolor and ink illustration of Chinese landscape with pagoda and mountains in style sumi-e, u-sin. Traditional Asian architecture. Oriental traditional painting.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2310172265/display_1500/stock-vector-watercolor-and-ink-illustration-of-chinese-landscape-with-pagoda-and-mountains-in-style-sumi-e-u-2310172265.jpg',
      category: 'Game'
  },

  ])
  
return { Game_list }
})

export const Pro_listStore = defineStore('Pro_list', () => {

  const Pro_list  = ref([
    {
      id: 'pro1',
      title: 'Star trail',
      Owned_by: 'Amazing Travel Lifestyle',
      price: 565.69,
      description: 'View of Table Mountain with star trail from Lion’s Head mountain, Cape Town, South Africa.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2180472695/display_1500/stock-photo-view-of-table-mountain-with-star-trail-form-lion-s-head-mountain-cape-town-cape-town-south-2180472695.jpg',
      category: 'Pro'
  },
  {
      id: 'pro2',
      title: 'milky way above frozen',
      Owned_by: 'Addictive Creative',
      price: 685.79,
      description: 'Picturesque glowing stars of milky way above frozen sea surrounding high rocky snowy Vestrahorn mountain in Stockness Beach, Iceland.',
      image: 'https://www.shutterstock.com/shutterstock/photos/2250976357/display_1500/stock-photo-picturesque-glowing-stars-of-milky-way-above-frozen-sea-surrounding-high-rocky-snowy-vestrahorn-2250976357.jpg',
      category: 'Pro'
  },
  {
      id: 'pro3',
      title: 'Golden texture',
      Owned_by: 'Abstract the studio',
      price: 855.63,
      description: 'Freehand oil painting. Oil on canvas. Brushstrokes of paint. modern Art. Prints, wallpapers, posters, cards, murals, rugs, hangings, prints',
      image: 'https://www.shutterstock.com/image-vector/abstract-art-print-golden-texture-freehand-2301397531',
      category: 'Pro'
  },
  {
      id: 'pro4',
      title: 'cat in morning',
      Owned_by: 'Matteo Petralli',
      price: 300.00,
      descriptionfull: 'In the refreshing morning, Emma slowly woke up from her bed, as if her body was emerging from a state of weakness from sleep. Her eyes began to open, gradually adjusting to the warm, cozy surroundings of her bedroom.',
      image: 'https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg',
      category: 'Pro'
  },
  {
      id: 'pro5',
      title: 'Night Town',
      Owned_by: "Elijah O'Donnell",
      price: 450.00,
      descriptionfull: 'In the refreshing morning, Emma slowly woke up from her bed, as if her body was emerging from a state of weakness from sleep. Her eyes began to open, gradually adjusting to the warm, cozy surroundings of her bedroom.',
      image: 'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Pro'
  },

  ])
  return { Pro_list }
})