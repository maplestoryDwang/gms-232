# Reboot Pet Random Box
# 2633505
# collection of pets randomized thingy yes

import random

petList = [
    5000000, # Brown Kitty 
    5000001, # Brown Puppy
    5000002, # Pink Bunny
    5000003, # Mini Kargo
    5000004, # Black Kitty
    5000005, # White Bunny
    5000006, # Husky
    5000007, # Black Pig
    5000008, # Panda
    5000009, # Dino Boy
    5000010, # Dino Girl
    5000011, # Monkey
    5000012, # White Tiger
    5000013, # Elephant
    5000014, # Rudolph (cant equip 1802019 # its own sleigh for some reason? check pls)
    5000015, # Dasher (same sprite as rudolph but can equip)
    5000017, # Robot
    5000020, # Mini Yeti
    5000022, # Turkey
    5000023, # Penguin
    5000024, # Jr. Balrog
    5000025, # Golden Pig
    5000026, # Sun Wu Kong
    5000028, # Dragon
    5000029, # Baby Dragon
    5000030, # Green Dragon
    5000031, # Red Dragon
    5000032, # Blue Dragon 
    5000033, # Black Dragon 
    5000034, # Black Bunny
    5000036, # Jr. Reaper
    5000038, # White Monkey
    5000039, # Porcupine
    5000041, # Snowman
    5000042, # Kino
    5000043, # Hedgehog
    5000044, # Orange Tiger
    5000045, # Skunk
    5000047, # Robo
    5000048, # Baby Robo
    5000049, # Blue Robo
    5000050, # Red Robo
    5000051, # Green Robo
    5000052, # Gold Robo
    5000053, # Gorilla Robo
    5000054, # Snail
    5000055, # Crys.Rudolph
    5000056, # Toucan
    5000058, # White Duck
    5000060, # Pink Bean
    5000066, # Baby Tiger
    5000067, # Weird Alien
    5000070, # Mir
    5000071, # Ruby
    5000074, # Bing Monkey
    5000076, # Corgi Pup
    5000083, # Persian Cat
    5000084, # Esel
    5000085, # Cake
    5000086, # Pie
    5000089, # Tiel
    5000090, # Galiel
    5000096, # Dummbo
    5000098, # Shark
    5000103, # Chroma Bean
    5000130, # Metus
    5000131, # Mors
    5000132, # Invidia
    5000133, # Storm Dragon
    5000134, # Fennec Fox
    5000135, # Gingerbread
    5000136, # Ice Knight
    5000138, # Merlion Pet
    5000139, # Butterfly
    5000142, # Puffram
    5000143, # Craw
    5000144, # Adriano
    5000145, # Bonkey
    5000146, # Harp Seal
    5000149, # Silver Husky
    5000150, # Pink Yeti
    5000151, # Bandit
    5000152, # Miracle Cat
    5000155, # Abel
    5000156, # Axel
    5000161, # Pink
    5000162, # Aaron
    5000163, # Mint
    5000167, # Starwing
    5000168, # Stickman
    5000170, # PSY
    5000171, # MagiCookie
    5000176, # Kangaroo
    5000193, # Von Soup
    5000198, # Lil Moonbeam
    5000199, # Adel
    5000211, # Scurvy Bird
    5000215, # Chunky 
    5000216, # Brown Burro
    5000217, # Blackheart
    5000228, # Demon Metus
    5000229, # Demon Mors
    5000249, # Fluffy Teddy
    5000250, # Cutie Teddy
    5000251, # Puffy Teddy
    5000254, # Red Elly
    5000255, # Blue Burro
    5000256, # Pumpkin Jack
    5000257, # Pumpkin Zack
    5000258, # Pumpkin Mack
    5000261, # Royal Thumpy
    5000271, # Frumpy Koala
    5000272, # Grumpy Koala
    5000273, # Nerdy Koala
    5000275, # Chippermunk
    5000276, # Chipmunch
    5000277, # Chubmunk
    5000281, # Vile Metus
    5000282, # Dire Mors
    5000283, # Wild Invidia
    5000290, # Honey Angel
    5000291, # Lime Angel
    5000292, # Peach Angel
    5000293, # Roo#A
    5000294, # Roo#B
    5000295, # Roo#C
    5000296, # Toasty Devil
    5000297, # Icy Devil
    5000298, # Miasma Devil
    5000299, # Gingerhead
    5000300, # Devil Ipos
    5000301, # Devil Shaz
    5000302, # Devil Ose
    5000303, # Devil Iros
    5000304, # Devil Maz
    5000305, # Devil Fose
    5000306, # Devil Imos
    5000307, # Devil Gaz
    5000308, # Devil Tose
    5000309, # Mini Queen
    5000310, # Von Bon
    5000311, # Pierre
    5000316, # Sassy Snake
    5000318, # Yeti Robot
    5000320, # Pinkadillo
    5000321, # Yellowdillo
    5000322, # Greenadillo
    5000328, # Von Soup
    5000330, # Lil Von Leon
    5000331, # Lil Orchid
    5000332, # Lil Hilla
    5000341, # Punchyroo
    5000342, # Unripe Nut
    5000343, # Chestnut
    5000344, # Burnt Nut
    5000352, # White Candle
    5000353, # Blue Candle
    5000354, # Grape Candle
    5000362, # RED Rudolph
    5000363, # RED Yeti
    5000364, # RED Penguin
    5000365, # Kiwi Puff
    5000366, # Berry Puff
    5000367, # Mango Puff
    5000368, # Happy Bean
    5000369, # Lil Lai
    5000370, # Lil Fort
    5000371, # Lil Arby
    5000375, # Pink Pengy
    5000376, # Purple Pengy
    5000377, # Blue Pengy
    5000381, # Toto
    5000382, # Frankie
    5000384, # Petite Mario
    5000402, # Ballet Lyn
    5000403, # Soldier Hong
    5000404, # Soldier Chun
    5000405, # Green Chad
    5000406, # Pink Mel
    5000407, # Orange Leon
    5000408, # Lil Sierra
    5000409, # Lil Ryan
    5000414, # Lil Bobble
    5000415, # Lil Lotus
    5000416, # Ill Orchid
    5000417, # Gelimer
    5000424, # Sheep
    5000428, # Holoyeti
    5000429, # Pink Seal
    5000430, # New Seal
    5000431, # Newer Seal
    5000432, # Pinker Seal
    5000433, # War Sheep
    5000434, # Mage Sheep
    5000435, # Cleric Sheep
    5000437, # Orange
    5000443, # Furry Elwin
    5000444, # Fluffy Lily
    5000445, # Baby Nero
    5000446, # Strawbear
    5000447, # Bananabear
    5000448, # Cookiebear
    5000449, # Gengerbready
    5000451, # Gorilla Robo
    5000456, # Matcha Man
    5000457, # Lady Hot Tea
    5000458, # Captain Cafe
    5000460, # Sailor Seal
    5000461, # Admiral Seal
    5000462, # Steward Seal
    5000466, # Ducky
    5000469, # Tiny Nero
    5000470, # Cheesy Cat
    5000471, # Samson Cat
    5000473, # Lil Ursus
    5000474, # Moist Cake
    5000475, # Nutty Pie
    5000476, # Sweet Candy
    5000479, # Lil Zakum
    5000483, # Mouse Monkey
    5000484, # Lil Evan
    5000485, # Lil Aran
    5000486, # Lil Phantom
    5000490, # Lil Luminous
    5000491, # Lil Mercedes
    5000492, # Lil Shade
    5000494, # Lil Damien
    5000495, # Lil Alicia
    5000496, # Lil Lilin
    5000499, # Stickman
    5000502, # Pumpkin O'
    5000503, # Pumpkin L
    5000507, # Blue Husky
    5000517, # Hekaton
    5000518, # Hekaton S
    5000519, # Hekaton E
    5000520, # Hekaton A
    5000521, # Lil Ninja
    5000524, # Alpaca
    5000528, # Meerkat Mob
    5000529, # Pudgycat
    5000545, # Black Bean
    5000551, # Pink Dragon
    5000552, # Ice Dragon
    5000553, # Red Dragon
    5000565, # Cloud Candy
    5000566, # Mossy Candy
    5000567, # Pinkie Candy
    5000568, # Purple Cake
    5000569, # Stjartmes
    5000570, # Lil Tutu (?)
    5000571, # Lil Nenne (?)
    5000572, # Lil Lingling (?)
    5000585, # Lil Tengu
    5000586, # Beagle
    5000587, # Salem Cat
    5000588, # Binx Cat
    5000589, # Kit Cat
    5000590, # Bichon
    5000591, # Yodeling Hen (? yodeling chicken = yodeling hen?)
    5000592, # Gold Chicken
    5000595, # Yellow Chick
    5000600, # Ursie
    5000601, # Punch Cat
    5000602, # Iron Rabbit
    5000620, # Sheepdog
    5000621, # Samoyed
    5000622, # Retriever
    5000624, # Pink Bearcat
    5000633, # Fondue Fold
    5000634, # Sasha Fold
    5000635, # Coco Fold
    5000636, # Salem Cat
    5000637, # Binx Cat
    5000638, # Kit Cat
    5000640, # Gold Bearcat
    5000641, # Ebony Lucid
    5000642, # Powder Lucid
    5000643, # Rose Lucid
    5000672, # Apple Orchid
    5000673, # Mango Orchid
    5000674, # Ocean Orchid
    5000685, # Mini Chicken
    5000686, # Gold Chicken
    5000696, # Fried Shrimp
    5000697, # Vampire Cat
    5000707, # Small Spirit
    5000708, # Tree Spirit
    5000709, # Rock Spirit
    5000718, # White Alpaca
    5000719, # Brown Alpaca
    5000720, # Weird Alpaca
    5000721, # Star Orchid
    5000722, # Star Lotus
    5000723, # Star Phantom
    5000724, # Vile Metus
    5000725, # Dire Mors
    5000726, # Wild Invidia
    5000736, # Snoozy Bunny
    5000737, # Dreamy Bunny
    5000738, # Dozy Bunny
    5000740, # Bitty Popoh
    5000741, # Stingray Man
    5000742, # Blowfish Man
    5000743, # Carp Man
    5000746, # Bitty Bus
    5000747, # Bitty Taxi
    5000748, # Bitty Pickup
    5000749, # Mini Miyo
    5000750, # Polar Cub
    5000751, # Cookie
    5000752, # Croquant
    5000753, # Meringue
    5000759, # Boston
    5000760, # Yorkshire
    5000761, # Westie
    5000762, # Forest Dori ( 9 slots,  5wa/ma wonderberry proabably)
    5000763, # Forest Dari ( 9 slots,  5wa/ma wonderberry proabably)
    5000764, # Forest Finca ( 9 slots,  5wa/ma wonderberry proabably)
    5000765, # Pinky Thorn
    5000766, # Bluesy Thorn
    5000767, # Sunny Thorn
    5000768, # Microslime
    5000769, # Microyeti
    5000772, # Sanho
    5000773, # Nari
    5000774, # Bari
    5000785, # Cuddle Pup
    5000786, # Mini Mar
    5000789, # Flurblynk
    5000790, # Rose Glodeer ( 9 slots,  5wa/ma wonderberry proabably)
    5000791, # Mint Glodeer ( 9 slots,  5wa/ma wonderberry proabably)
    5000792, # Iris Glodeer ( 9 slots,  5wa/ma wonderberry proabably)
    5000793, # Soft#Boiled
    5000794, # Hard#Boiled
    5000795, # Roasted
    5000796, # Mastema
    5000797, # Baby Kemdi
    5000798, # Golden Pup
    5000844, # Kero#chan
    5000849, # Salmon Sushi
    5000850, # Peppy Slime
    5000852, # LEONARD
    5000853, # EDWARD
    5000856, # Bunny Bun
    5000877, # Doodlesnail
    5000878, # Pepedoodle
    5000879, # Doodleshroom
    5000891, # Cat Evan
    5000892, # Cat Phantom
    5000893, # Cat Luminous
    5000903, # Dazed Ghost
    5000904, # Sassy Ghost
    5000905, # Happy Ghost
    5000906, # Puffy Paca
    5000907, # Fluffy Paca
    5000908, # Fuzzy Paca
    5000909, # Shibe
    5000910, # Shibu
    5000911, # Shibo
    5000918, # Mysteria ( 9 slots,  5wa/ma wonderberry proabably)
    5000919, # Cirra ( 9 slots,  5wa/ma wonderberry proabably)
    5000920, # Sparklie ( 9 slots,  5wa/ma wonderberry proabably)
    5000921, # AutomoBean
    5000922, # SlimeBuggy
    5000923, # Yeticab
    5000926, # Pinky#mingo
    5000927, # Shocky#mingo
    5000928, # Smarty#mingo
    5000930, # Oberon (Petite Luna)
    5000931, # Titania (Petite Luna)
    5000932, # Petite Pico (Petite Luna)
    5000933, # Waddle
    5000934, # Toddle
    5000935, # Puff
    5000936, # Cube Puppy
    5000937, # Cube Kitty
    5000938, # Cube Hamster
    5000939, # Lil Loafer
    5000953, # Lil Neiny
    5000954, # Baby Tyranno
    5000955, # Baby Stego
    5000956, # Baby Brachio
    5000960, # Hamlet
    5000961, # Roly Rosy
    5000962, # Robbie
    5000963, # Serena
    5000964, # Cosmo Rabbit
    5000965, # Amethyst
    5000966, # Chicky Bear
    5000967, # Ducky Pup
    5000968, # Foxy Pooch
    5000969, # Beanyaki
    5000970, # Puffy Cloud
    5000973, # Albatross
    5000974, # Tortoise
    5000977, # Gala Pengy
    5000979, # Sleepy
    5000980, # Dozer
    5000981, # Yawny
    5000982, # Lil Cygnus
    5000984, # Verus Hilla
    5000985, # Necro Damien
    5000986, # Necro Lotus
    5000997, # Pearly Piggy
    5000998, # Spotty Piggy
    5000999, # Burly Piggy
    5001000, # Demon Lux
    5001001, # Demon Tempus
    5001002, # Demon Vita
    5001003, # Devil Lux
    5001004, # Devil Tempus
    5001005, # Devil Vita
    5001006, # Miho
    5001009, # Spirit Miho
    5002000, # Pearly Piggy
    5002001, # Spotty Piggy
    5002002, # Burly Piggy
    5002003, # Fuji
    5002004, # Fuzz
    5002005, # Meyer
    5002011, # Hefty Kitty
    5002012, # Tubby Bird
    5002013, # Pudgy Puppy
    5002021, # Wee Mars
    5002022, # Wee Saturn
    5002023, # Wee Uranus
    5002030, # Tamagoyaki
    5002031, # OctoSausage
    5002032, # Onigiri
    5002033, # Sprout ( 9 slots,  5wa/ma wonderberry proabably)
    5002034, # Sparky ( 9 slots,  5wa/ma wonderberry proabably)
    5002035, # Misty ( 9 slots,  5wa/ma wonderberry proabably)
    5002036, # PixSnail 
    5002037, # PixSlime
    5002038, # PixShroom
    5002039, # Honey B
    5002040, # Weenie Dawg
    5002045, # Sea#lixir
    5002046, # Love Potion
    5002047, # Tangy Tonic
    5002048, # Baby Axol
    5002049, # Baby Xolo
    5002050, # Baby Lotl
    5002057, # Pokey Peach
    5002058, # Spikey Blu
    5002059, # Prickly Cher
    5002075, # Taotie
    5002076, # Sky Haunt
    5002077, # Fern Haunt
    5002078, # Sunny Haunt
    5002079, # Victory (Petite Luna)
    5002080, # Glory (Petite Luna)
    5002081, # Lil Pony (Petite Luna)
    5002082, # Goldie
    5002083, # Silvery
    5002084, # Bronzy
    5002085, # Cookie Bear
    5002086, # Omelette Pup
    5002096, # Soft S'more
    5002097, # Warm S'more
    5002098, # Burnt S'more
    5002110, # White Boxcat
    5002111, # Tabby Boxcat
    5002112, # Black Boxcat
    5002113, # Lil Wonky
    5002120, # Squeaker
    5002125, # Cheeser
    5002126, # Nibbles
    5002127, # Rubybloom
    5002128, # Rosebloom
    5002129, # Magentabloom
    5002136, # Mr. Toad
    5002137, # Blanc
    5002138, # Prim
    5002139, # Snowy
    5002140, # Pepper Tuna
    5002141, # Winterberry
    5002142, # Lil Boo
    5002146, # Sonara Wave
    5002150, # Young Cherry
    5002151, # Ripe Chery
    5002152, # Old Cherry
    5002161, # Green Drag
    5002162, # Purp Drag
    5002163, # Blue Drag
    5002164, # Panzza
    5002165, # Octopiii
    5002166, # White Whale
    5002167, # Black Whale
    5002168, # Pink Whale
    5002169, # So Gong
    5002176, # Happy Erda
    5002177, # Raging Erda
    5002178, # Sad Erda
    5002183, # White Owl
    5002184, # Sandy Owl
    5002185, # Brown Owl
    5002186, # Cherry Chick
    5002187, # Blue Chick
    5002188, # Berry Chick
    5002189, # Dalsoo
    5002190, # Balloon Dog
    5002191, # Blue Poppet
    5002192, # Pur#Poppet
    5002193, # Peach Poppet
    5002197, # Dusk (Petite Luna)
    5002198, # Dawn (Petite Luna)
    5002199, # Lil Glowy (Petite Luna)
    5002200, # Galaxie
    5002201, # Novie
    5002202, # Lunarie
    5002203, # Tubby Tiger
    5002204, # Odette Peeps
    5002205, # White Birdie
    5002206, # Amber Birdie
    5002207, # Polka#Birdie
    5002211, # Happy Beet
    5002212, # Happy Carrot
    5002213, # Happy Leek
    5002214, # Yellow Oxlet
    5002215, # White Oxlet
    5002216, # Patchy Oxlet
    5002223, # Quick Cloud
    5002224, # Clever Cloud
    5002225, # Relaxed Sun
    5002226, # Snow Meow
    5002227, # Bunny Meow
    5002228, # Panda Meow
    5002229, # Bean Pastry
    5002230, # Cream Pastry
    5002231, # Burnt Pastry
    5002232, # Red Glimfox
    5002233, # Blue Glimfox
    5002234, # Baby Birdie
    5002235, # BUGCAT CAPOO
    5002236, # TUTU
    5002237, # DOGDOG
    5002239, # Sherbet (Petite Luna)
    5002243, # Lil Wolfruit
    5002244, # Lil Muto
    5002245, # Lil Ramanana
    5002246, # Sugar
    5002247, # Chococo
    5002248, # Strawbunny
    5002249, # Pinekitty
    5002250, # Peachpuppy
    5002251, # Yellow Fox
    5002252, # Brown Fox
    5002253, # White Fox
    5002259, # Orn. H. Crab
    5002260, # Teal H. Crab
    5002261, # Pur. H. Crab
    5002263, # Mountain Kid
    5002264, # Red Snail
    5002265, # Blue Snail
    5002266, # Purple Snail
    5002267, # Brown Hare
    5002268, # White Hare
    5002269, # Lil Cactus
    5002273, # Peach Bubble
    5002274, # Leaf Bubble
    5002275, # Mint Bubble
    5002276, # Melting Bear
    5002277, # Duck Floaty
    5002278, # Bit Cookie
    5002279, # Bit Macaroon
    5002280, # Melty Pop
    5002281, # Doodle Cera
    5002282, # Doodle Rano
    5002283, # Doodle Stego
    5002287, # Brown Ursa
    5002288, # Pink Ursa
    5002289, # Purple Ursa
    5002293, # Black Ewe
    5002294, # Brown Ewe
    5002295, # White Ewe
]

pet = random.choice(petList)

if sm.canHold(pet):
    sm.consumeItem()
    sm.giveItem(pet)
else:
    sm.chat("Please make room in your Cash inventory.")
