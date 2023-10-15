import { ref } from 'vue';
import { defineStore } from 'pinia'

export const useArt_listStore = defineStore('Art', () => {

    
const Art_list  = ref([
  {
    id: 'art1',
    title: 'Cyber Skull',
    Owned_by: 'Nocturnal Media',
    price: 975.00,
    description: 'Cyber Skull Virtual Reality Cyberpunk floppy disc wires 80s 90s',
    descriptionfull: 'In the 80s and 90s, the virtual reality Cyberpunk scene came to life with a blend of floppy discs, intricate wires, and the emergence of the Cyber Skull, all encapsulating the cutting-edge technology of the era.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1318065872/display_1500/stock-vector-cyber-skull-virtual-reality-cyberpunk-floppy-disc-wires-s-s-1318065872.jpg',
    category: 'Art'
},
{
    id: 'art2',
    title: 'vector',
    Owned_by: 'nattapon kanchanaket',
    price: 675.00,
    description: 'David michelangelo portraits Illustration vector art    ',
    descriptionfull: 'David, the iconic masterpiece by Michelangelo, has been a perennial source of inspiration for countless artists, leading to a wide array of portraits, illustrations, and vector art that continue to capture the timeless beauty and artistic essence of this legendary sculpture.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1665555634/display_1500/stock-vector-david-michelangelo-portraits-illustration-vector-art-1665555634.jpg',
    category: 'Art'
},
{
    id: 'art3',
    title: 'catttttt',
    Owned_by: 'Md Abdul Barek',
    price: 435.00,
    description: 'Angry cat destroyed the world in pop-art style flat',
    descriptionfull: 'In a vivid display of pop-art style, an enraged cat unleashed chaos and devastation on a global scale, resulting in a flat, two-dimensional representation that encapsulates the surreal and chaotic nature of this feline catastrophe.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2277302713/display_1500/stock-vector-angry-cat-distroyed-the-world-in-pop-art-style-flat-2277302713.jpg',
    category: 'Art'
},
{
    id: 'art4',
    title: 'english bulldog',
    Owned_by: 'ARTEMENKO VALENTYN',
    price: 790.00,
    description: 'english bulldog portrait intellectual art',
    descriptionfull: 'In the realm of intellectual art, the English Bulldog portrait stands as a distinguished representation, embodying the unique blend of aesthetics and character that this beloved breed brings to the world of creative expression.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1926395366/display_1500/stock-photo-english-bulldog-portrait-intellectual-art-1926395366.jpg',
    category: 'Art'
},
{
    id: 'art5',
    title: 'Woman, graffiti street art fashion.',
    Owned_by: 'Fortis Design',
    price: 1580.49,
    description: 'Vector graphic, beautiful, strong, lady spray painted. Paint splatter. Cool urban modern poster texture. Powerful contemporary wall art sketch. home decor style.',
    descriptionfull: 'In the world of vector graphics, a striking portrayal of a beautiful and strong lady comes to life, her image meticulously spray-painted with a vibrant color palette, resulting in a dynamic paint splatter composition. This cool and urban modern poster texture not only adds a touch of the contemporary to your living space but also exudes powerful contemporary wall art, making it a stylish and impactful addition to your home decor.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2279521423/display_1500/stock-vector-woman-graffiti-street-art-fashion-vector-graphic-beautiful-strong-lady-spray-painted-paint-2279521423.jpg',
    category: 'Art'
},
{
    id: 'art6',
    title: 'Space background',
    Owned_by: 'Fortis Design',
    price: 1245.35,
    description: 'Colorful explosion on dark wallpaper. Vector art. Futuristic explosion. Creative banner for website. Astronomy. Wave of light. Shining stars nebula. Cartoon drawing night painting',
    descriptionfull: 'Set against a dark and captivating backdrop, a mesmerizing and colorful explosion comes to life through intricate vector art. This futuristic explosion not only serves as a visually stunning focal point but also doubles as a creatively designed banner for a website. Drawing inspiration from the realms of astronomy, it beautifully captures a wave of light, shining stars, and nebula, rendering it akin to a captivating and whimsical cartoon night painting.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2272132841/display_1500/stock-vector-space-background-colorful-explosion-on-dark-wallpaper-vector-art-futuristic-explosion-creative-2272132841.jpg',
    category: 'Art'
},
{
    id: 'art7',
    title: 'Colorful seamless',
    Owned_by: 'Talirina',
    price: 1205.64,
    description: 'Colorful seamless pattern with leaves, spots. Decorative colored wallpaper, good for printing. Hand drawn overlapping background, texture with decor elements, lines and shapes. Design backdrop vector',
    descriptionfull: 'This vibrant and colorful seamless pattern showcases a delightful fusion of leaves and spots, creating a visually captivating and decorative wallpaper. This design is not only visually pleasing but also perfect for high-quality printing. The hand-drawn overlapping background boasts an exquisite texture featuring decorative elements, lines, and shapes that add depth and character to the composition. It stands as an exceptional design backdrop that is versatile and ready for use in vector projects.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1282448455/display_1500/stock-vector-colorful-seamless-pattern-with-leaves-spots-decorative-colored-wallpaper-good-for-printing-hand-1282448455.jpg',
    category: 'Art'
},
{
    id: 'art8',
    title: 'Japanese Landscape Watercolor',
    Owned_by: 'Bankphotographer',
    price: 1565.89,
    description: 'It is a traditional garden designed with Japanese aesthetics and philosophical concepts, avoiding artificial decorations and emphasizing the natural landscape.',
    descriptionfull: 'This garden is a testament to traditional Japanese design principles, rooted in aesthetics and philosophical concepts that prioritize the natural landscape over artificial embellishments. It embraces a deep reverence for nature, showcasing a harmonious blend of organic elements that allow visitors to connect with the serene beauty of the surroundings. By eschewing artificial decorations, this garden embodies the essence of Japanese culture, where simplicity and the innate beauty of the environment take center stage.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2313039995/display_1500/stock-vector-japanese-landscape-watercolor-asia-art-2313039995.jpg',
    category: 'Art'
},
{
    id: 'art9',
    title: "David's head. Man",
    Owned_by: 'Unknown man',
    price: 667.00,
    description: 'Statue. Earphone. Isolated. Gypsum statue of David\'s head. Man. Creative. Plaster statue of David\'s head in pixel glasses. Minimal concept art.',
    descriptionfull: 'This striking and creative image features an isolated gypsum statue of Davids head, capturing the essence of a man with a minimalist and artistic touch. What makes this piece truly unique is the addition of pixelated glasses, giving it a contemporary twist and blending classical art with modern design. This plaster statue of Davids head, adorned with pixel glasses, represents a captivating and creative minimal concept art piece, bridging the gap between classical aesthetics and contemporary innovation.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1650203437/display_1500/stock-photo-statue-earphone-isolated-gypsum-statue-of-david-s-head-man-creative-plaster-statue-of-david-s-1650203437.jpg',
    category: 'Art'
},
{
    id: 'art10',
    title: 'New year sunrise',
    Owned_by: 'Abstract the studio',
    price: 1005.33,
    description: 'Beautiful Korea, new year sunrise and natural scenery, family wearing traditional hanbok, Korean traditional painting vector illustration.',
    descriptionfull: 'In the breathtaking landscapes of Beautiful Korea, the first light of the new year graces the horizon, illuminating the natural scenery in all its splendor. Here, a loving family is dressed in traditional hanbok, adding an elegant touch to the serene surroundings. This picturesque scene is reminiscent of classic Korean traditional paintings, and in this vector illustration, it beautifully captures the essence of cultural heritage, family, and the timeless beauty of the Korean landscape.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1880178172/display_1500/stock-vector-beautiful-korea-new-year-sunrise-and-natural-scenery-family-wearing-traditional-hanbok-korean-1880178172.jpg',
    category: 'Art'
},
{
    id: 'art11',
    title: '☕',
    Owned_by: 'Master1305',
    price: 235.00,
    description: 'Caffeine in coffee beans Will awaken from sleep It our nature when we just wake up. There will be a feeling of drowsiness.',
    descriptionfull: 'Caffeine found in coffee beans has the natural ability to help rouse us from sleep. When we first wake up, its common to experience a sensation of drowsiness. However, the caffeine in coffee serves as a natural stimulant, helping to counteract this morning grogginess and promoting wakefulness.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1909641286/display_1500/stock-photo-morning-coffee-makes-things-better-comics-styled-yellow-suit-modern-design-contemporary-art-1909641286.jpg',
    category: 'Art'
},
{
    id: 'art12',
    title: 'Paper Moon',
    Owned_by: 'yesdoubleyes',
    price: 1325.65,
    description: 'Weird surreal dreamscape abstracts for music visualizers, acid flashback montages, strange and glitchy effects that hypnotize and inspire',
    descriptionfull: 'Imagine a world of bizarre and surreal dreamscape abstracts tailored for music visualizers. These abstracts are like acid flashback montages, where strange and glitchy effects come together to create a hypnotic and inspirational experience. They transport you to a realm where the boundaries of reality blur, setting the stage for a mesmerizing journey that both bewilders and sparks creativity.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2144014629/display_1500/stock-vector-forest-layered-paper-cut-out-style-forest-vector-file-shadow-box-idea-layered-paper-cut-design-2144014629.jpg',
    category: 'Art'
},
{
    id: 'art13',
    title: 'pagoda tower',
    Owned_by: 'Jonistudio' ,
    price: 1846.00 ,
    description: "pagoda tower on the side of a quiet flowing river with cherry trees. background of Mount Fujiyama, afternoon atmosphere.",
    descriptionfull: 'Along the serene banks of a tranquil, meandering river, a graceful pagoda tower stands proudly, nestled amidst a picturesque setting of cherry trees in full bloom. In the distance, the iconic silhouette of Mount Fujiyama dominates the background, its majestic presence gracing the landscape. The late afternoon sun casts a warm and enchanting glow, creating a soothing atmosphere that invites contemplation and appreciation of the natural beauty that surrounds you.',
    image: "https://www.shutterstock.com/shutterstock/photos/2322034225/display_1500/stock-vector-japan-landscape-flat-vector-art-illustration-retro-vintage-background-2322034225.jpg",
    category: 'Art'
},
{
    id: 'art14',
    title: 'heart musical',
    Owned_by: 'rogistok',
    price: 256.00,
    description: 'Music in your heart that is free in life orchestral musical instruments Cartoon cartoon pop art vector illustration, retro vintage art',
    descriptionfull: 'Imagine the joy of having music in your heart, a melody that symbolizes the freedom of life. In this whimsical, cartoon-inspired scene, orchestral musical instruments come to life, embodying the vivacity of pop art in a delightful vector illustration. This composition exudes a retro vintage charm, capturing the timeless appeal of art and the boundless energy of music thats deeply ingrained in the human spirit.',
    image: 'https://www.shutterstock.com/shutterstock/photos/1021588924/display_1500/stock-vector-music-in-the-heart-musical-orchestral-instruments-comic-cartoon-pop-art-illustration-retro-1021588924.jpg',
    category: 'Art'
},
{
    id: 'art15',
    title: 'joysticks gamepad',
    Owned_by: 'cddesign.co',
    price: 300.00,
    description: 'Vector Seamless pattern with joysticks gamepad illustration and slogan text, for t-shirt prints and other uses.',
    descriptionfull: "This captivating vector seamless pattern features a lively illustration of joysticks and gamepads, coupled with an engaging slogan text. It's a perfect choice for t-shirt prints and various other creative applications. Whether you're a gamer or simply appreciate the aesthetics of gaming culture, this design offers a dynamic and visually appealing way to express your passion and style.",
    image: 'https://www.shutterstock.com/shutterstock/photos/1805459848/display_1500/stock-vector-vector-seamless-pattern-with-joysticks-gamepad-illustration-and-slogan-text-for-t-shirt-prints-1805459848.jpg',
    category: 'Art'
},
{
    id: 'art16',
    title: 'Monkey',
    Owned_by: 'Max9545',
    price: 999.00,
    description: 'Monkey with headphones listening to music. Colored digital vector drawing illustration. Abstract monkey for wall art, t-shirt, or poster. Digital art.',
    descriptionfull: "Picture a playful scene with a monkey donning headphones, completely immersed in the world of music. This vivid and colorful digital vector drawing illustrates the joy of a music-loving monkey. It's a fantastic piece of abstract art that can adorn your wall, enhance your t-shirt, or liven up a poster. Created with digital art techniques, this illustration perfectly captures the fusion of nature and technology, offering a whimsical and vibrant addition to your visual space.",
    image: 'https://www.shutterstock.com/shutterstock/photos/2019487502/display_1500/stock-vector-monkey-with-headphones-listening-to-music-colored-digital-vector-drawing-illustration-abstract-2019487502.jpg',
    category: 'Art'
},
{
    id: 'art17',
    title: 'eye',
    Owned_by: 'Mari Dein',
    price: 999.00,
    description: 'Conceptual abstract picture of the eye. Conceptual abstract closeup of an oil painting and palette knife on canvas.',
    descriptionfull: "Visualize a captivating conceptual abstract representation of the eye, where the intricate details and symbolism come to life on the canvas. This closeup provides an intimate look at an oil painting in progress, with the artist skillfully wielding a palette knife to create intricate textures and layers on the canvas. The result is a work of art that not only captures the essence of the human eye but also showcases the artist's creative process, making it a captivating and thought-provoking piece.",
    image: 'https://www.shutterstock.com/shutterstock/photos/1445018480/display_1500/stock-photo--fluorite-oil-painting-conceptual-abstract-picture-of-the-eye-oil-painting-in-colorful-1445018480.jpg',
    category: 'Art'
},
{
    id: 'art18',
    title: 'Lofi girl illustration',
    Owned_by: 'Fortis Design',
    price: 255.40,
    description: 'Try looking at the sky and see if its still blueLooking at the ground its still ground.As such the world is still the same.',
    descriptionfull: "When you gaze up at the sky, you'll find it's still that timeless shade of blue. Similarly, when you look down at the ground, it remains steadfast beneath your feet. In this reflection, we are reminded that amidst the ever-evolving aspects of life, the world itself retains its core, offering a sense of continuity and familiarity.",
    image: 'https://www.shutterstock.com/shutterstock/photos/2279016883/display_1500/stock-vector-lofi-girl-illustration-young-woman-looking-in-the-distance-cartoon-drawing-of-chill-relaxed-lady-2279016883.jpg',
    category: 'Art'
},
{
    id: 'art19',
    title: 'Sunflowers',
    Owned_by: 'Ivailo Nikolov',
    price: 800.00,
    description: 'Oil painting on canvas. Sunflower painting. modern impressionism It is a symbol of confidence and stability in good love.',
    descriptionfull: "An exquisite oil painting on canvas captures the vibrant essence of sunflowers in a modern impressionist style. Sunflowers, with their bold and radiant presence, have long been regarded as a symbol of confidence and the unwavering stability of deep, enduring love. This artwork beautifully encapsulates these sentiments, using the techniques of modern impressionism to convey not just the visual beauty of the sunflowers, but also the emotional depth they represent.",
    image: 'https://www.shutterstock.com/shutterstock/photos/2177029373/display_1500/stock-photo-oil-painting-on-canvas-sunflowers-painting-modern-impressionism-2177029373.jpg',
    category: 'Art'
},
{
    id: 'art20',
    title: 'Ancient torii gate',
    Owned_by: 'Bankphotographer',
    price: 1234.59,
    description: 'Japanese art with ancient torii gate designs The territory behind the torii gate is the territory of the gods. And beautiful nature of Japan.',
    descriptionfull: "Delve into the rich world of Japanese art, adorned with intricate ancient torii gate designs that have graced the landscape for centuries. In the land of the rising sun, these torii gates are not mere structures but symbolic gateways to the realm of the gods, signifying reverence and spirituality. Beyond these gates, you'll discover the breathtaking beauty of Japan's natural landscapes, each a testament to the harmonious coexistence of culture and nature, making Japanese art a captivating exploration of tradition, spirituality, and the serene allure of the country's natural wonders.",
    image: 'https://www.shutterstock.com/shutterstock/photos/2321626339/display_1500/stock-vector-japanese-art-with-ancient-design-of-torii-gate-and-the-beautiful-nature-of-japan-vector-illustration-2321626339.jpg',
    category: 'Art'
},
{
    id: 'art21',
    title: 'van gogh',
    Owned_by: 'nattapon kanchanaket',
    price: 565.00,
    description: 'He transforms pain into blissful beauty. Expressing it is easy.',
    descriptionfull: "His remarkable talent lies in his ability to transform the most profound pain into exquisite, blissful beauty. Expressing this transformation is effortless for him, as he effortlessly channels the depths of emotion into his art, crafting pieces that not only captivate but also heal, offering a glimpse into the extraordinary power of artistic catharsis.",
    image: 'https://www.shutterstock.com/shutterstock/photos/1506765383/display_1500/stock-vector-van-gogh-vector-art-illustration-design-1506765383.jpg',
    category: 'Art'
},
{
    id: 'art22',
    title: 'Chinese New Year 2023',
    Owned_by: 'extripod',
    price: 1756.70,
    description: 'Dynamic perfect animation for the year of rabbit',
    descriptionfull: "Imagine a dynamic and perfect animation celebrating the Year of the Rabbit. This lively and vibrant creation brings to life the characteristics and symbolism of the zodiac sign with fluid movements and stunning visuals. It's a visual masterpiece that encapsulates the spirit of the year, promising an engaging and delightful experience for all.",
    image: 'https://www.shutterstock.com/shutterstock/photos/2137532615/display_1500/stock-vector-happy-chinese-new-year-rabbit-zodiac-sign-with-gold-paper-cut-art-and-craft-style-on-color-2137532615.jpg',
    category: 'Art'
},
{
    id: 'art23',
    title: 'Ultra Cat',
    Owned_by: 'Vectordidak',
    price: 215.10,
    description: 'Cat Vector Illustration Superhero.Cat Simple Mascot Style',
    descriptionfull: "Behold a captivating cat vector illustration that portrays a feline superhero in a simple yet charming mascot style. This illustration brilliantly captures the essence of a cat with superhuman qualities, adding a playful and endearing twist to the world of superhero characters. It's a delightful blend of whimsy and heroism, perfect for a wide range of creative applications.",
    image: 'https://www.shutterstock.com/shutterstock/photos/2122284392/display_1500/stock-vector-cat-vector-illustration-superhero-cat-simple-mascot-style-2122284392.jpg'
},
{
    id: 'art24',
    title: 'Cyber Cat',
    Owned_by: 'frozenbunn',
    price: 345.00,
    description: 'Key to success Let the investigators strive to be an evolution of the cat.',
    descriptionfull: 'In a vibrant and eye-catching presentation of pop-art style, an irate cat ignited widespread pandemonium and destruction on a global magnitude. The aftermath led to a compressed, two-dimensional portrayal that aptly encapsulates the surreal and tumultuous essence of this cataclysmic feline incident.',
    image: 'https://www.shutterstock.com/shutterstock/photos/2226852425/display_1500/stock-vector-vector-art-illustration-cyber-cat-2226852425.jpg',
    category: 'Art'
},



])
return { Art_list }
})

export const useGame_listStore = defineStore('Game_list', () => {    
    const Game_list = ref([
        {
            id: 'game1',
            title: 'Pokemon - Emerald ',
            Owned_by: 'Shigeki Morimoto',
            price: 777.00,
            description: 'The Pokémon game series involves catching and battling Pokémon. Lets start with the starter Pokémon. Players can catch wild Pokémon by weakening them and catching them with Pokéballs. ',
            descriptionfull:'Expanding on your explanation"The Pokémon game series is renowned for its core mechanics, which revolve around the captivating tasks of catching and battling Pokémon creatures. The journey typically commences with the selection of a starter Pokémon, a pivotal choice that sets the stage for your adventure. As you explore the Pokémon world, players have the ability to capture wild Pokémon by skillfully weakening them in battles and then sealing their fate in Pokéballs. These captures are central to building your team, fostering a unique and powerful group of Pokémon, ready to face any challenge that comes your way."',
            image: 'https://i.pinimg.com/originals/78/b7/70/78b77044c0f2add302f2e81beb3a0f9b.gif',
            category: 'Game'
        },
        {
            id: 'game2',
            title: 'Pixel Game',
            Owned_by: 'PixelChoice',
            price: 125.00,
            description: 'Pixel art design with outdoor landscape background. Colorful pixel arcade screen for game design. Banner with button level up. Game design concept in retro style. Vector illustration.',
            descriptionfull:'To provide more context and detail:"Step into the world of pixel art design featuring a vibrant outdoor landscape as the backdrop. This colorful pixel arcade screen design evokes the nostalgia of classic games and is perfect for game design projects. It includes a dynamic banner complete with level-up buttons, immersing you in a retro-style gaming experience. This vector illustration embodies the essence of game design, offering a visual feast for those who appreciate the vintage charm of pixel art."',
            image: 'https://i.pinimg.com/originals/7b/2d/d7/7b2dd78b2d4f87ce82033ad195a6c6ea.gif',
            category: 'Game'
        },
        {
            id: 'game3',
            title: 'Pixel Mona Lisa',
            Owned_by: 'NLD Illustration',
            price: 777.00,
            description: 'Pixel Art, Portrait of Mona Lisa, Leonardo da Vinci in frame. Creative artwork, crypto art, modern digital pixelated canvas, NFT nonfungible token. World\'s Most Famous Painting. Vector illustration.',
            descriptionfull:'Expanding on your description:"Here we have a mesmerizing pixel art rendition, capturing the iconic portrait of Mona Lisa, the masterpiece by Leonardo da Vinci, beautifully framed to showcase its enduring allure. This creative artwork not only pays homage to the art worlds pinnacle but also represents the realm of crypto art, rendered with modern digital pixelation on canvas and marked as an NFT (nonfungible token). As the worlds most famous painting comes alive in this pixelated form, this vector illustration serves as a testament to the convergence of classical art and the digital age.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2254415147/display_1500/stock-vector-pixel-art-portrait-of-mona-lisa-leonardo-da-vinci-in-frame-creative-artwork-crypto-art-modern-2254415147.jpg',
            category: 'Game'
        },
        {
            id: 'game4',
            title: 'Final Fantasy',
            Owned_by: 'FGFACTORY',
            price: 777.00,
            description: 'Final Fantasy VII Remake is the remake of the classic PlayStation 1997 game, Final Fantasy VII. For awhile, the game was only available for PlayStation consoles. Fitting properly on your desktop devices',
            descriptionfull:'Expanding on your description:"The Final Fantasy VII Remake stands as a nostalgic revival of the timeless classic that originally graced the PlayStation in 1997, capturing the hearts of gamers worldwide. For a considerable time, this highly anticipated remake was exclusively accessible on PlayStation consoles. Now, it seamlessly finds its place on your desktop devices, ensuring that the magic of this epic adventure can be experienced and cherished across different platforms.',
            image: 'https://i.pinimg.com/736x/23/4b/ca/234bcaa2dafbea1f1f4799a13388ab13.jpg',
            category: 'Game'
        },
        {
            id: 'game5',
            title: 'Apex Legends',
            Owned_by: 'StormerX',
            price: 552.27,
            description: 'Is a hero shooter game from Respawn Entertainment. that has received many awards Discover strategic team play with a new gameplay system that is the next evolution in the hero shooter and battle genre.',
            descriptionfull:'Developed by Respawn Entertainment, this exceptional hero shooter game has garnered numerous awards, attesting to its exceptional quality and innovation. It introduces players to a thrilling world of strategic team play, unveiling a groundbreaking gameplay system that represents the next evolution in the hero shooter and battle genre. The games ability to seamlessly blend strategy and action has elevated it to a position of high acclaim within the gaming industry, making it a must-experience title for fans of the genre.',
            image: 'https://i.pinimg.com/originals/df/8b/7f/df8b7f1db0dd1db98a4309db03241efa.gif',
            category: 'Game'
        },
        {
            id : 'game6',
            title: 'cyberpunk skull robot',
            Owned_by: 'GrandeDuc ',
            price: 1152.82,
            description: 'What will happen? When a Wired Cyberpunk Skull Robot - 3D Illustration of a Science Fiction Cyberpunk Skull Faces Other Bespectacled Smiling Robots Virtual reality of the future world',
            descriptionfull:'In the near-future world of science fiction, a Wired Cyberpunk Skull Robot emerges, a mesmerizing 3D illustration that embodies the essence of a cyberpunk dystopia. As it encounters other bespectacled, smiling robots, the scene creates a stark contrast between the grim, post-apocalyptic aesthetic of the Wired Cyberpunk Skull Robot and the cheerful demeanor of its virtual reality counterparts. This captivating juxtaposition hints at a dynamic clash of cultures, technologies, and ideologies in the future world, raising questions about the intersection of humanity and artificial intelligence.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2022343115/display_1500/stock-photo-hardwired-cyberpunk-skull-robot-d-illustration-of-science-fiction-cyberpunk-skull-faced-grinning-2022343115.jpg',
            category: 'Game'
        },
        {
            id: 'game7',
            title: 'Rockman',
            Owned_by: 'Jonistudio',
            price: 1846.00,
            description: ' The series is so important to the original Rockman games that the expansions in the series and additional important games like the Game Boy would become the story of the Rockman legend.',
            descriptionfull:'The series holds a paramount significance in the lineage of the original Rockman games. Its expansions and noteworthy titles, including those on the Game Boy, are woven into the very fabric of the Rockman legend. These additions not only contribute to the legacy but also serve as chapters that collectively narrate the epic tale of Rockman enduring journey through the world of gaming, solidifying its place as a cornerstone in the history of video games.',
            image: 'https://i.pinimg.com/originals/28/33/ff/2833fff47e5d8840a6aed1b23b599456.gif',
            category: 'Game'
        },
        {
            id: 'game8',
            title: 'mountains in style sumi-e, u-sin.',
            Owned_by: 'Bankphotographer',
            price: 985.63,
            description: 'Watercolor and ink illustration of Chinese landscape with pagoda and mountains in style sumi-e, u-sin. Traditional Asian architecture. Oriental traditional painting.',
            descriptionfull:'Within this exquisite watercolor and ink illustration, a Chinese landscape unfolds, reminiscent of the time-honored sumi-e and u-sin styles. The scene features a splendid pagoda set against a backdrop of majestic mountains, perfectly capturing the essence of traditional Asian architecture. This masterpiece is a testament to the enduring artistry of Oriental traditional painting, serving as a visual bridge to ancient cultures and their deep connection with the natural world.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2310172265/display_1500/stock-vector-watercolor-and-ink-illustration-of-chinese-landscape-with-pagoda-and-mountains-in-style-sumi-e-u-2310172265.jpg',
            category: 'Game'
        },
        {
            id: 'game9',
            title: 'Among us',
            Owned_by: 'InnerSloth LLC',
            price: 756.29,
            description: 'Is a multiplayer video game developed and published by Inner Sloth Company. The game is set in space. that can be specified The crews goal is to complete various missions.',
            descriptionfull:'This engaging multiplayer video game is the brainchild of Inner Sloth Company, both developer and publisher. The game unfolds within the boundless expanse of space, an immersive setting that beckons exploration and intrigue. Here, players collaborate as a crew with a singular objective: to embark on a series of diverse and challenging missions, testing their wits, teamwork, and adaptability in the most unforgiving of environments. This space odyssey provides a captivating and dynamic gaming experience, where the outcome depends on the players ability to fulfill their missions and maintain the ships functionality.',
            image: 'https://i.pinimg.com/originals/71/2c/0c/712c0cba7f0b69ca25a27cd789b9bcca.gif',
            category: 'Game'
        },
        {
            id: 'game10',
            title: 'Portrait of a futuristic',
            Owned_by: 'Digital Storm',
            price: 1152.82,
            description: 'Portrait of a futuristic sci-fi woman wearing a jumpsuit and a choice of weapons, tactical gear and a cool science fiction mask. Blurred light background with lens flare.',
            descriptionfull:'Behold an arresting portrait that transcends the boundaries of time, featuring a futuristic sci-fi woman. Shes adorned in a sleek jumpsuit and wields a formidable selection of weapons, complemented by tactical gear that exudes both style and functionality. Her striking ensemble is crowned by a cool, high-tech science fiction mask, concealing her identity and amplifying her enigmatic allure. This intriguing figure emerges against a backdrop of blurred lights and lens flare, conjuring an ambiance that resonates with the essence of science fiction, mystique, and the limitless possibilities of the future.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2043994739/display_1500/stock-photo-portrait-of-a-futuristic-sci-fi-female-wearing-a-tactical-jump-suit-and-a-science-fiction-visor-2043994739.jpg',
            category: 'Game'
        },
        {
            id : 'game11',
            title: 'Street Fighter',
            Owned_by: 'CAPCOM',
            price: 1572.82,
            description: 'Experience the thrilling, one-on-one battle. Challenge your friends Can be used both online and offline Plus, you can choose to fight your opponent in a variety of formats.',
            descriptionfull:'Immerse yourself in the exhilarating world of one-on-one battles, where the thrill of the competition awaits. Challenge your friends in intense confrontations, with the flexibility to engage in epic duels both online and offline. What makes it even more enticing is the array of formats available, allowing you to tailor the battle to your preferences. Whether it an intense virtual showdown or a real-world face-off, the choice is yours, promising a diverse and dynamic gaming experience.',
            image: 'https://i.pinimg.com/originals/50/26/8b/50268b80812f0ba0057af3ee00dcfd24.gif',
            category: 'Game'
        },
        {
            id: 'game12',
            title: 'valorant',
            Owned_by: 'Riot Games',
            price: 946.60,
            description: ' Mix your style and experience Attack and defend your team with your sharp shooting and tactical abilities. and wants to survive with the only life that is available',
            descriptionfull:'Unleash a fusion of your unique style and battle-tested experience as you engage in a high-stakes game of attack and defense. Your team relies on your sharpshooting prowess and tactical finesse to secure victory. In a world where survival hinges on the preservation of your one and only life, the stakes could be higher. Every move, every shot, and every decision is crucial, making it a heart-pounding experience where wit, skill, and survival instincts must converge for ultimate success.',
            image: 'https://i.pinimg.com/originals/1c/ba/66/1cba66c98464da8d4c04d020c9e31f0a.gif',
            category: 'Game'
        },
        {
            id: 'game13',
            title: 'Minecraft',
            Owned_by: 'Markus Pearson',
            price: 450.00,
            description: 'Players have the freedom to choose how they want to play the game. By default it is first person view. This game is about breaking and placing blocks. The world of this game consists of 3D objects.',
            descriptionfull:'In this dynamic game, players are bestowed with the liberty to define their gameplay experience. The default perspective immerses them in a first-person view, enabling a deeply personal and immersive encounter. The essence of this game revolves around the compelling actions of breaking and placing blocks, granting players boundless creativity and the power to shape their virtual worlds. Within this realm, the landscape comes to life with an array of intricately detailed 3D objects, forging an expansive and intricate world where imagination knows no bounds.',
            image: 'https://i.pinimg.com/originals/31/d0/a9/31d0a912e58198b5170af0fb328842b1.gif',
            category: 'Game'
        },
        {
            id: 'game14',
            title: 'Dark Souls',
            Owned_by: 'FromSoftware',
            price: 550.00,
            description: 'The game is in a third person perspective. and focuses on exploring interconnected environments while battling enemies with weapons and magic. Players must fight bosses to progress through the story.',
            descriptionfull:'In this captivating game, players are enveloped in a dynamic third-person perspective, offering a panoramic view of their character and the world around them. The central theme of the game centers on exploration, guiding players through interconnected environments where every turn may unveil a new secret or challenge. As they traverse this mesmerizing realm, players engage in thrilling battles, employing both weapons and magic to combat formidable enemies. To advance the narrative, players must confront and conquer powerful bosses, each victory unlocking the next chapter in this epic and immersive story.',
            image: 'https://i.pinimg.com/564x/a4/50/8d/a4508dbc02f7b1ecb863ffa6ad2c2b60.jpg',
            category: 'Game'
        },
        {
            id: 'game15',
            title: 'Spider-Man ps4 ',
            Owned_by: 'Sony ',
            price: 1420.00,
            description:'The Adventures of Spider-Man This is not the Spider-Man you met or seen before. who has more experience fighting New York big crimes, while the fate of millions of New Yorkers rests on his shoulders.',
            descriptionfull:'Prepare to embark on The Adventures of Spider-Man a thrilling journey that introduces you to a Spider-Man unlike any you ve encountered before. This seasoned web-slinger boasts a wealth of experience battling the rampant waves of crime that sweep through the heart of New York City. With the fate of millions of New Yorkers hanging in the balance, he shoulders the immense responsibility of safeguarding his beloved city from the perils that threaten it. This is a Spider-Man who has honed his skills, and his heroic actions will determine the destiny of an entire metropolis.',
            image: 'https://i.pinimg.com/originals/70/d1/ab/70d1ab3b93a18857beade1a91a0026a1.gif',
            category: 'Game'
        },
        {
            id: 'game16',
            title: 'Eeveelutions',
            Owned_by: 'Atsuko Nishida',
            price: 1230.00,
            description: 'It is the term used for the current group of eight Pokémon that have evolved from Eevee. It is a portmanteau of the words "Eevee" and "evolution". Its definition may be expanded to include Eevee itself.',
            descriptionfull:'The term Eeveelution serves as a moniker for the current roster of eight distinct Pokémon that have undergone their evolutionary transformations from the beloved Eevee. Its a clever portmanteau, artfully blending the names Eevee and evolution to succinctly encapsulate the concept. Furthermore, its definition can be broadened to encompass the evolution of Eevee itself, turning this versatile creature into a symbol of adaptability and potential within the Pokémon universe.',
            image: 'https://i.pinimg.com/564x/2c/cc/e4/2ccce46cf97587b979e4768240f1ccf3.jpg',
            category: 'Game'
        },
        {
            id: 'game17',
            title: 'Metroid Fusion',
            Owned_by: 'Samus Aran',
            price: 350.00,
            description: 'Is an action-adventure game in which the player controls Samus Aran. Like previous games in the series, Fusion is set in a large open-ended world with elevators that connect regions, which each in turn contains rooms separated by doors. Samus opens most doors by shooting at them, while some only open after she reaches a certain point.',
            descriptionfull:'This enthralling action-adventure game places players in command of the iconic character Samus Aran. As with its predecessors in the series, Fusion unfolds within a vast, open-ended world, teeming with intricate and interconnected regions. Within these sprawling areas, players navigate through a myriad of rooms, each partitioned by doors. To progress through this expansive universe, Samus relies on her trusty arsenal to shoot open most doors, while some doors yield only when she reaches a specific location, enhancing the sense of discovery and adventure as players unravel the game secrets and challenges.',
            image: 'https://i.pinimg.com/originals/a1/50/3d/a1503dd6f36173c472bd0916bc439a6c.gif',
            category: 'Game'
        },
        {
            id: 'game18',
            title: 'Doom Eternal',
            Owned_by: 'ArtStation',
            price: 454.00,
            description:'Doom Eternal players once again take on the role of the Doom Slayer,as they battle hordes of demons from Hell. The game features fast-paced, intense gameplay, with a focus on movement and combat mechanics. The Doom Slayer has a wide range of weapons and abilities at their disposal, allowing for creative and brutal ways to dispatch enemies.',
            descriptionfull:'In Doom Eternal, players step once more into the formidable boots of the Doom Slayer, charged with the relentless task of combating relentless hordes of demons from the depths of Hell. The heart of this game lies in its fast-paced and unrelenting gameplay, placing a paramount emphasis on fluid movement and finely-tuned combat mechanics. The Doom Slayer is armed with an expansive arsenal of weapons and a formidable array of abilities, empowering players to unleash their creativity in the most brutal and inventive ways possible when facing their otherworldly adversaries.',
            image: 'https://i.pinimg.com/564x/8f/40/ea/8f40ea40416bb406f7d6c44fb1450801.jpg',
            category: 'Game'
        },
        {
            id: 'game19',
            title: ' The Legend of Zelda:',
            Owned_by: 'minish',
            price: 960.00,
            description: 'The series centers on the various incarnations of Link, a courageous young man of the elf-like Hylian race, and Princess Zelda, a magical princess who is the mortal reincarnation of the goddess Hylia, as they fight to save the magical land of Hyrule from Ganon, an evil warlord turned demon king, who is the principal antagonist of the series.',
            descriptionfull:'At the heart of this beloved series lies the heroic journey of Link, a valiant young man hailing from the elf-like Hylian race, and the enchanting Princess Zelda, who bears the divine mantle of the goddess Hylia mortal reincarnation. United by their shared purpose, they courageously stand against the nefarious forces threatening the enchanted realm of Hyrule. The primary adversary that they confront is Ganon, a malevolent warlord who has succumbed to the darkness, transforming into a fearsome demon king. Their enduring battle against Ganon weaves a rich tapestry of adventures that define the essence of this legendary series.',
            image: 'https://i.pinimg.com/originals/0c/48/e7/0c48e768f4417da73e70800cdd1f21df.gif',
            category: 'Game'
        },
        {
            id: 'game20',
            title: 'Super Mario ',
            Owned_by: 'ashishk3d',
            price: 340.00,
            description: 'The Super Mario games are set primarily in the fictional Mushroom Kingdom, typically with Mario as the player character. He is usually joined by his brother, Luigi, and often by other members of the Mario cast. As platform games, they involve the player character running and jumping across platforms and atop enemies in themed levels.',
            descriptionfull:'The enchanting Super Mario games predominantly unfurl in the whimsical landscape of the fictional Mushroom Kingdom, with the iconic Mario serving as the players steadfast guide. More often than not, his loyal brother, Luigi, accompanies him, and they are  occasionally joined by a colorful ensemble of characters from the Mario universe. As quintessential platform games, they invite players to engage in delightful escapades, where the player character deftly navigates a myriad of themed levels. These levels present challenges that range from skillful running and jumping across platforms to engaging in whimsical battles against a variety of foes, creating a captivating and enduring gaming experience.',
            image: 'https://i.pinimg.com/originals/ca/16/e4/ca16e420cc9d7830dcd6d12cad205d77.gif',
            category: 'Game'
        },
        {
            id: 'game21',
            title: 'Tetris',
            Owned_by: 'Behance',
            price: 324.00,
            description:'Tetris is a classic puzzle video game that was created by Russian game designer Alexey Pajitnov in 1984. It is one of the most iconic and enduring video games in history. The games name is derived from the Greek prefix tetra which means four, and the game is played with various shapes made up of four square blocks.',
            descriptionfull:'Tetris, the timeless classic puzzle video game, bears its origins in the brilliant mind of Russian game designer Alexey Pajitnov  who first brought it to life in 1984. Over the decades, it has solidified its status as one of the most iconic and enduring video games in the annals of gaming history. The games very name, Tetris, carries a poignant meaning, derived from the Greek prefix tetra signifying the number four, a nod to the distinctive tetrominoes that are integral to the game engaging and endlessly addictive gameplay.',
            image: 'https://i.pinimg.com/564x/cd/46/40/cd4640b6f96e8da2992c30599e30f4bc.jpg',
            category: 'Game'
        },
        {
            id: 'game22',
            title: 'Pac-Man',
            Owned_by: 'Toru Iwatani',
            price: 860.00,
            description: 'Pac-Man is one of the longest-running, best-selling, and highest-grossing video game franchises in history, and the game has seen regular releases for over 40 years, has sold nearly 48 million copies across all of the platforms, and has grossed over US$14 billion, most of which has been from the original arcade game.',
            descriptionfull:'Pac-Man stands as an iconic pillar in the world of video games, marking one of the longest-running, best-selling, and highest-grossing franchises in the industry storied history. Spanning over four decades, the game franchise has displayed remarkable resilience, maintaining a consistent presence with frequent releases. With an astounding total of nearly 48 million copies sold across various platforms, it has raked in a staggering revenue of over US$14 billion, with a significant portion of this astronomical sum attributed to the original arcade game that captured the hearts of gamers worldwide.',
            image: 'https://i.pinimg.com/originals/c6/e2/2c/c6e22c1062dae86c08c85d64b0735fd9.gif',
            category: 'Game'
        },
        {
            id: 'game23',
            title: 'Elden Ring',
            Owned_by: 'FromSoftware Inc',
            price: 1950.00,
            description:'ELDEN RING THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. Recent Reviews: Very Positive (6,149) All Reviews: Very Positive (534,457) Release Date: Feb 24, 2022 Developer: FromSoftware Inc.',
            descriptionfull:'Elden Ring, the highly anticipated new fantasy action RPG, beckons players to embark on an epic quest. As the Tarnished, you will tread a path guided by grace, wielding the formidable power of the Elden Ring and aspiring to ascend as an Elden Lord within the mystical realm of the Lands Between. Recent reviews underscore the game excellence, with an overwhelmingly positive reception from a substantial player base, totaling 6,149 recent reviews and a staggering 534,457 reviews in total. This monumental release from developer FromSoftware Inc. made its debut on February 24, 2022, offering gamers a captivating and immersive adventure into a rich and intricate world.',
            image: 'https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg',
            category: 'Game'
        },
        {
            id: 'game24',
            title: 'Doom Eternal',
            Owned_by: 'ArtStation',
            price: 454.00,
            description:'Resident Evil 4 Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the presidents kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.',
            descriptionfull:'In Resident Evil 4, survival is merely the first step on an arduous journey. The narrative unfolds six years after the catastrophic biological event that rocked Raccoon City. Leon S. Kennedy, a resilient survivor from those harrowing times, embarks on a perilous mission to rescue the president kidnapped daughter. His quest leads him to a remote European village, nestled in isolation, but tainted by an ominous and malevolent force that has taken hold of the locals. As Leon delves deeper into the mystery, he unearths a sinister truth, setting the stage for a gripping and relentless battle for survival against both the supernatural and the unknown.',
            image: 'https://th.bing.com/th/id/OIP.1tTUiV3WxUpb8dLSg7_VzAHaJ7?pid=ImgDet&w=573&h=768&rs=1',
            category: 'Game'
        }
    ])
    

    return { Game_list }
})

export const usePhotography_listStore = defineStore('Photography_list', () => {

    
    const Photography_list = ref([
        {
            id: 'photo1',
            title: 'Sunshine',
            Owned_by: 'Pvoak ',
            price: 725.38,
            description: 'The way we think about what is happening in front of us is saddened by giving up. But we will be strong in our acceptance. And people who can accept the truth of life in every situation without going into hysterics for us.',
            descriptionfull:'Sometimes, the way we perceive the events unfolding before us can be tinged with a sense of sorrow when we encounter situations that require us to let go or relinquish something dear to us. However, true strength manifests in our ability to gracefully accept these changes, even when they bring sadness. It is those individuals who can acknowledge the unvarnished truths of life, no matter how challenging, without succumbing to hysteria, who serve as a source of inspiration and support for us. They remind us that acceptance can be a pillar of resilience, allowing us to navigate life s complexities with grace and fortitude.',
            image: 'https://i.pinimg.com/564x/8e/84/4e/8e844e31af6c458a6870d1342ac05474.jpg',
            category: 'Pho'
        },
        {
            id: 'photo2',
            title: 'Every time I see youn',
            Owned_by: 'Deachasris Master',
            price: 485.79,
            description: 'Representative of new love And it is also the flower of the first wedding anniversary, so people like to use carnations to express their love. The color red means admiration, liking, and affection. White means pure love and good luck.',
            descriptionfull:'Carnations, often seen as representative of new love, hold a special place in the language of flowers. Moreover, they re traditionally associated with the first wedding anniversary, making them a cherished choice for expressing affection. The various colors of carnations further enrich their symbolism. Red carnations convey admiration, liking, and deep affection, making them a poignant choice for conveying one s feelings. Meanwhile, white carnations are imbued with the essence of pure love and good luck, signifying the sincerity and fortune that love can bring. These subtle nuances in color allow individuals to convey the depth and nuances of their emotions through the simple, yet meaningful, gift of carnations.',
            image: 'https://i.pinimg.com/564x/d5/f9/fa/d5f9fad2a5cbdf8a7a005e10da897694.jpg',
            category: 'Pho'
        },
        {
            id: 'photo3',
            title: 'Your own value',
            Owned_by: 'M. Scott Peck',
            price: 862,
            description: 'having a crush on someone It is a classic heartfelt flower that lets you know that someone is delighted. There is love that is extremely deep, stable, and will never fade away.  They bring good luck and love to the woman or man who receives them.',
            descriptionfull:'Having a crush on someone can be beautifully expressed through classic, heartfelt flowers that convey delight and affection. Among these blooms, there is a special kind of love, one that runs deep and remains steadfast, unyielding to the passage of time. These flowers symbolize not just love but also luck, extending their blessings and love to the person who receives them. They carry with them the promise of good fortune and love, bestowing a sense of warmth and connection that transcends words, making them a truly meaningful and heartwarming gift.',
            image: 'https://i.pinimg.com/564x/a9/fa/08/a9fa0836ac7edb7b707a0306e805b439.jpg',
            category: 'Pho'
        },
        {
            id: 'photo4',
            title: 'cat in morning',
            Owned_by: 'Matteo Petralli',
            price: 300.00,
            description: 'In the refreshing morning, Emma slowly woke up from her bed, as if her body was emerging from a state of weakness from sleep. Her eyes began to open, gradually adjusting to the warm, cozy surroundings of her bedroom.',
            descriptionfull:'As the refreshing morning light gently spilled into the room, Emma embarked on a gradual journey back to consciousness. Her body, once nestled in the embrace of deep sleep, emerged from its cocoon of slumber with a languid grace. Her eyelids lifted, unveiling her eyes to the soft, golden glow that bathed her cozy bedroom. In this tranquil moment, the world outside remained hushed, allowing her to savor the comforting serenity of the early hours.',
            image: 'https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg',
            category: 'Pho'
        },
        {
            id: 'photo5',
            title: 'Night Town',
            Owned_by: "imase",
            price: 798.99,
            description: 'Psychological changes cause an influx of creativity. This made it very unlikely that anything would pull him away from those writings.',
            descriptionfull:'The profound psychological changes he experienced brought forth a tidal wave of creativity, an inner reservoir of ideas and inspiration that surged within him. As this newfound wellspring of imagination flowed, it became increasingly improbable that anything could divert his attention from the writings that had become an essential and all-encompassing part of his life. The magnetic pull of creativity held him steadfast, making it nearly inconceivable for him to be separated from the profound and transformative process of his literary creations.',
            image: 'https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo6',
            title: 'NIGHT DANCER',
            Owned_by: 'MUSKETEERS',
            price: 300.00,
            description: 'Dancing together to the music radiance and youIt was just an ordinary, boring night.But we made some very special memories together.',
            descriptionfull:'On a seemingly ordinary and uneventful night, something extraordinary unfolded as we found ourselves dancing together to the enchanting music. In the radiance of that moment, the world around us transformed, and we embarked on a journey that etched itself deep into our hearts. What was once a potentially dull evening evolved into a canvas upon which we painted memories, turning it into a treasure trove of special moments that we would carry with us, a testament to the beauty of shared experiences and the magic of spontaneity.',
            image: 'https://i.pinimg.com/564x/d0/62/89/d06289c19214ad26a4dceb4d4cb60748.jpg',
            category: 'Pho'
        },
        {
            id: 'photo7',
            title: 'Spider-Man',
            Owned_by: 'Matteo Petralli',
            price: 300.00,
            description: 'Anyone can win a battle when things are easy. When things get tough, when it seems like there is really no chance, that is when it counts.',
            descriptionfull:'Victory in a battle may come easily when the odds are in one s favor. It s in the face of adversity, when the path forward seems insurmountable, that the true mettle of an individual is tested. It s during these challenging moments, when it appears there s no chance of success, that the essence of determination and resilience truly shines. The ability to persevere when the going gets tough is what separates ordinary triumphs from extraordinary victories and underscores the significance of unwavering determination in the face of adversity.',
            image: 'https://i.pinimg.com/564x/93/9d/53/939d5361bf2df4d946a4c14eb0f9ad75.jpg',
            category: 'Pho'
        },
        {
            id: 'photo8',
            title: 'Silver Wolf',
            Owned_by: 'Linda ',
            price: 675.37,
            description: 'Wolves are nocturnal hunters, expert hunters, Wolves are warriors, great leaders and protectors of innocent creatures.',
            descriptionfull:'Wolves, as remarkable creatures of the wild, are known for their prowess as nocturnal hunters. Under the cover of darkness, they become expert trackers and skilled predators, displaying a level of cunning and precision that has earned them a reputation as formidable warriors of the animal kingdom. Beyond their hunting prowess, wolves are also revered as great leaders within their packs, demonstrating complex social structures and cooperation. They assume the mantle of protectors, not just for their own kind but for innocent creatures that share their habitat, reinforcing their role as guardians of the natural world.',
            image: 'https://i.pinimg.com/564x/95/f4/82/95f4824c38e10f10bdf2a778d3823937.jpg',
            category: 'Pho'
        },
        {
            
            id: 'photo9',
            title: 'milky way above frozen',
            Owned_by: 'Addictive Creative',
            price: 685.79,
            description: 'The Milky Ways dazzling stars shine above the frozen sea surrounding the snow-capped Vestrahorn mountains in Stockness Beach.',
            descriptionfull:'Under the vast canvas of the night sky, the Milky Way paints a breathtaking spectacle with its myriad of dazzling stars. This celestial masterpiece illuminates the heavens above the serene, frozen sea that encircles the majestic, snow-crowned peaks of the Vestrahorn mountains, casting an otherworldly glow over the landscape of Stockness Beach. Its a scene of unparalleled natural beauty, where the celestial and earthly realms converge, inviting onlookers to be captivated by the enchanting dance of stars and the tranquil majesty of the mountains below.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2250976357/display_1500/stock-photo-picturesque-glowing-stars-of-milky-way-above-frozen-sea-surrounding-high-rocky-snowy-vestrahorn-2250976357.jpg',
            category: 'Pho'
        },
        {
            id: 'photo10',
            title: 'The moon',
            Owned_by: 'Travel Lifestyle',
            price: 699.26,
            description: 'The moon has two sides: the light side and the dark side. Just like a person must have both good and bad sides. So we complement each other.',
            descriptionfull:'Much like the moon, our own existence is often defined by the interplay of two sides—our light and our dark, the virtues and flaws that coexist within us. In this duality, theres a profound truth about the human experience. We are beings of both good and bad, and its in this balance that we find harmony and the capacity to complement one another. Just as the moon waxes and wanes, we, too, navigate the ever-changing cycles of our lives, each facet contributing to the richness of our shared human experience, and the understanding that its in embracing both sides that we find our truest selves.',
            image: 'https://i.pinimg.com/564x/cc/a1/cd/cca1cdf862c179dcce94ef2d77eaa557.jpg',
            category: 'Pho'
        },
        {
            id: 'photo11',
            title: 'Star trail',
            Owned_by: 'Amazing Travel Lifestyle',
            price: 565.69,
            description: 'View of Table Mountain with beautiful star trails from Lions Head Mountain. Cape Town city South Africa Cape Towns Top Tourist Attractions',
            descriptionfull:'As you gaze out upon the majestic Table Mountain, the iconic landmark of Cape Town, a breathtaking spectacle unfolds. Perched atop Lions Head Mountain, youre treated to a panoramic view that not only captures the grandeur of this natural wonder but also reveals the enchanting canvas of the night sky. The star trails, a testament to the serene beauty of the cosmos, paint a celestial masterpiece above the city. This vantage point showcases Cape Town in all its glory, offering a glimpse of the city top tourist attractions, where the splendor of the natural world converges with human-made wonders to create an unforgettable tapestry of beauty and adventure.',
            image: 'https://www.shutterstock.com/shutterstock/photos/2180472695/display_1500/stock-photo-view-of-table-mountain-with-star-trail-form-lion-s-head-mountain-cape-town-cape-town-south-2180472695.jpg',
            category: 'Pho'
        },
        {
            id: 'photo12',
            title: 'City ​​Center',
            Owned_by: 'MUSKETEERS',
            price: 300.00,
            description: 'In a city full of problems looking up at the sky What are we searching for so much? Dreams are bigger than meets the eye.',
            descriptionfull:'In a bustling city, rife with its share of complexities and challenges, we often find ourselves gazing skyward, as if yearning for something beyond the concrete and steel. What is it that we seek so fervently in those moments of contemplation? Perhaps its the pursuit of dreams, ambitions that are grander and more profound than what initially meets the eye. These dreams, like stars in the vast night sky, twinkle with potential and possibility, reminding us that our aspirations are boundless, and that within our reach, even in the midst of urban chaos, we can discover the power to reach for the extraordinary.',
            image: 'https://i.pinimg.com/564x/c8/2d/b5/c82db55998e4255a47a8a652fdf99064.jpg',
            category: 'Pho'
        },
        {
            id: 'photo13',
            title: 'Green Pine Treesr',
            Owned_by: 'eberhard grossgasteiger',
            price: 1000.00,
            description: 'Easily recognized by their needle-type foliage, cone-bearing pine trees are evergreen, making them desirable in the home landscape for their year-round beauty',
            descriptionfull:'Pine trees, with their distinctive needle-type foliage, are easily recognizable and have an enduring appeal in home landscapes. These cone-bearing giants are true evergreens, retaining their lush greenery year-round. Their unwavering beauty, even in the depths of winter, makes them highly desirable additions to the home landscape, adding a touch of green resplendence in all seasons. Beyond their aesthetic charm, pine trees symbolize longevity, resilience, and a connection to the natural world, making them beloved features in gardens and yards.',
            image: 'https://images.pexels.com/photos/1287128/pexels-photo-1287128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo14',
            title: 'Hot Air Balloons in Cappadocia Sky',
            Owned_by: 'Eyup Sayar',
            price: 1200.00,
            description: 'One of the most iconic experiences in Cappadocia is taking a hot air balloon ride. creating a truly magical spectacle.',
            descriptionfull:'One of the most iconic and enchanting experiences to be had in Cappadocia is the breathtaking adventure of ascending into the sky on a hot air balloon. This ethereal journey creates a truly magical spectacle, as the balloons gracefully float above the surreal landscapes of Cappadocia. Passengers are treated to an awe-inspiring view of the otherworldly terrain, with its distinctive rock formations and whimsical chimneys, all bathed in the warm hues of dawn or dusk. Its a mesmerizing and unforgettable experience that transports travelers to a realm of dreams and wonder.',
            image: 'https://images.pexels.com/photos/18373308/pexels-photo-18373308/free-photo-of-hot-air-balloons-in-cappadocia-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo15',
            title: 'Hot Air Balloons Flying Over Grass Field',
            Owned_by: 'Maria Loznevaya',
            price: 1350.00,
            description: 'Cappadocia is a hiker paradise, offering a myriad of trails that lead you through ancient valleys, and hidden cave dwellings.',
            descriptionfull:'Cappadocia is a true haven for hikers, a destination that beckons with its rich tapestry of trails waiting to be explored. The landscape is a hikers paradise, offering an array of paths that wind their way through ancient valleys steeped in history and reveal the secrets of hidden cave dwellings. Each step immerses trekkers in the footsteps of civilizations long past, traversing a landscape where time seems to stand still, and nature and history coexist in perfect harmony. Cappadocias hiking trails are not just routes through the land but journeys through time and a connection to the enduring spirit of this captivating region.',
            image: 'https://images.pexels.com/photos/13164299/pexels-photo-13164299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo16',
            title: 'Hot Air Balloons over the Mountains',
            Owned_by: 'jin yang',
            price: 1250.00,
            description: 'This area provides a wonderful environment for those who enjoy mountain outdoors and hot air ballooning.',
            descriptionfull:'This region offers a splendid environment that caters to the desires of outdoor enthusiasts and adventure seekers alike, particularly those with a penchant for mountain activities and the enchanting allure of hot air ballooning. The landscape, with its rugged terrain and breathtaking vistas, becomes a playground for those who relish mountain adventures, whether its trekking along challenging trails, mountain biking, or simply savoring the serenity of the highlands. Meanwhile, the skies overhead offer an entirely different dimension of excitement as hot air ballooning enthusiasts are treated to a soaring and surreal experience, where they can admire the stunning landscapes from a bird eye view, adding an extra layer of magic to their adventure in this remarkable setting.',
            image: 'https://images.pexels.com/photos/8099224/pexels-photo-8099224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo17',
            title: 'Bioluminescent Plankton',
            Owned_by: 'jina yonghom',
            price: 1750.00,
            description: 'While walking along the shore of Larak, Iran—an island in the Persian Gulf—Your Shot member Pooyan Shadpoor came across this luminous scene. ',
            descriptionfull:'As Pooyan Shadpoor strolled along the tranquil shoreline of Larak, an island nestled in the midst of the Persian Gulf, they chanced upon a luminous spectacle that seemed almost otherworldly. The scene that unfolded was nothing short of mesmerizing, with the interplay of light and water casting an ethereal glow upon the surroundings. The softly illuminated waters danced with the gentle rhythm of the tides, while the skies above painted a canvas of serenity. In this secluded corner of the world, nature poetry unfolded, captivating the beholder and offering a fleeting glimpse of the enchanting beauty that can be found in the most unexpected places.',
            image: 'https://i.pinimg.com/564x/a2/01/44/a2014403c1dac06bc2d6d3d7a688db77.jpg',
            category: 'Pho'
        },
        {
            id: 'photo18',
            title: 'Flowing Water in the Rocky Mountains',
            Owned_by: 'TA MEDIA',
            price: 1000.00,
            description: 'The long wait for the Ferris wheel is one that many people like to go up often because of the performance of stepping up to finally be able to see it. ',
            descriptionfull:'The anticipation that accompanies the long wait for a ride on the Ferris wheel is a sensation cherished by many. Each moment spent in line is akin to a prelude, building excitement and expectation. It a performance of patience, a step-by-step ascent toward the grand finale—a ride that promises breathtaking views and a perspective that can only be attained from the summit. This unique journey, of both time and elevation, culminates in a profound and exhilarating experience, making the wait for the Ferris wheel a tradition that people eagerly return to, relishing every opportunity to ascend and savor the beauty from on high.',
            image: 'https://i.pinimg.com/564x/b8/e9/30/b8e930e837a9039ed25b8d0c651302ea.jpg',
            category: 'Pho'
        },
        {
            id: 'photo19',
            title: 'Flowing Water in the Rocky Mountains',
            Owned_by: 'TA MEDIA',
            price: 980.00,
            description: 'On the Rocky Mountains, water will either flow eastward toward the Atlantic Ocean or westward toward the Pacific Ocean.',
            descriptionfull:'In the vast expanse of the Rocky Mountains, a geological marvel, water finds its way through the rugged terrain following two distinct and remarkable paths. Here, the great divide is revealed, where nature hydrological tapestry unfolds. Within this breathtaking landscape, water destiny is clearly defined: it will either journey eastward, carving its way through valleys and rivers to ultimately join the Atlantic Ocean, or it will venture westward, threading through canyons and streams, on a course that will ultimately unite it with the Pacific Ocean. The Rocky Mountains stand as a natural watershed, determining the fates of these two remarkable journeys, and embodying the dynamic forces that shape our planet.',
            image: 'https://images.pexels.com/photos/8614603/pexels-photo-8614603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Pho'
        },
        {
            id: 'photo20',
            title: 'Aerial View of Long Exposure of Sea of Clouds',
            Owned_by: 'Zetong Li',
            price: 1150.00,
            description: 'The topography of Khao Sun is a forest area where rubber trees have been planted all the way to the top of the mountain. ',
            descriptionfull: 'The topography of Khao Sun unfolds as a captivating expanse, a region where nature artistry and human endeavor harmoniously coexist. This forested area, extending to the summit of the mountain, is adorned with a meticulously cultivated tapestry of rubber trees. Each step of the ascent reveals the steady dedication of those who have cultivated this landscape, with rubber trees reaching for the heavens, their canopies forming a verdant canopy over the mountainside. This harmonious blend of nature and human effort creates a captivating visual journey, where the bounty of the land unfolds as a testament to both the richness of the earth and the diligent hands that tend to it.',
            image: 'https://i.pinimg.com/564x/a3/13/27/a31327758496fa7708be4863b477b110.jpg',
            category: 'Pho'
        },




    ])


    return { Photography_list }
})

export const useSearchStore = defineStore('search', {
    state: () => ({
      searchQuery: '',
    }),
    actions: {
      updateSearchQuery(query) {
        this.searchQuery = query;
      },
    },
  });
  