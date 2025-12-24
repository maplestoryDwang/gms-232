# User enter script
# Mainly used for all Region Explorer Medal Quests.
# Also facilitates a *lot* of odds and ends related to different quests.

# Root Ruckus 2: RA Questline
if sm.getFieldID() == 105000000 and sm.hasQuest(30004):
    sm.setPlayerAsSpeaker()
    sm.sendNext("Welp, this thing is ancient, but seems to be working. Guess I should head back.")
    sm.warp(910700200, 0) # Root Abyss Quest Line Map
    sm.completeQuest(30004)

# Lith Harbor title effect
elif sm.getFieldID() == 104000000:
    sm.showEffect("Map/Effect.img/maplemap/enter/104000000")

# Foreign World (Mercedes)
elif sm.getFieldID() == 101000000 and sm.hasQuest(24046):
    sm.startQuest(24094)
    sm.setQRValue(24094, "1", False)

# Temperamental Time: Silent Crusade Questline
elif sm.getFieldID() == 220080000 and sm.hasQuest(1662):
    sm.chatScript("Enter papulatus.")

# Gusty Peak: Force spawn the right Stumpy if Mihile's 2nd job quest is active
elif sm.getFieldID() == 102020500 and sm.hasQuest(20809):
    mob = field.getLifeByTemplateId(3220000)
    if mob is None:
        sm.chat("Stumpy emerges from the fog.")
        sm.spawnMob(3220000, 814, 2197, False)

# Region Explorer medal quests script
def regionExploration(mapDictionary, medalQuest, trackerQuest, currentMap, mapCap, medalName):
    medalStatus = sm.getQRValue(medalQuest)

    # Automatically accept the medal quest if it's not active and unfinished after visiting its map
    # This will also initialize the associated dummy quest
    if not sm.hasQuest(medalQuest) and not sm.hasQuestCompleted(medalQuest):
        sm.startQuest(medalQuest)
        sm.createQuestWithQRValue(trackerQuest, "0")

    # Don't run the rest of the function if the medal has been claimed
    if not sm.hasQuestCompleted(medalQuest):
        explorationStatus = sm.getQRValue(trackerQuest)

        # Another contingency check to initialize the dummy quest if the user (re-)started the medal quest through the Medal UI
        if medalStatus == "" and not explorationStatus == "0" or not sm.hasQuest(trackerQuest):
            sm.createQuestWithQRValue(trackerQuest, "0")

        if currentMap in mapDictionary:
            # Is this the first time that spot has been visited?
            areaQR = mapDictionary[currentMap]
            if areaQR not in medalStatus and not medalStatus == mapCap:
                updateStatus = int(explorationStatus) + 1
                sm.setQRValue(trackerQuest, repr(updateStatus), False)
                sm.addQRValue(medalQuest, areaQR)

                # Was that the last map entry visited?
                if repr(updateStatus) == mapCap:
                    sm.setQRValue(medalQuest, mapCap, False)
                    sm.chatScript("Earned the " + medalName + " title!")
                else:
                    sm.chatScript(''.join([repr(updateStatus), "/", mapCap, " regions explored."]))
                    sm.chatScript("Trying for the " + medalName + " title.")

beginnerDict = {
    100000000: "henesys", # Henesys
    100020100: "humming", # Humming Forest Trail
    100020400: "blueMushroom", # Blue Mushroom Forest 2
    100040000: "golem", # Golem's Temple Entrance
    101000000: "ellinia", # Ellinia
    101020300: "chimney", # Chimney Tree Top
    101030201: "treeTrunk", # Tree Trunk Nest 2
    101072000: "ellinel", # Ellinel Academy Lobby
    102000000: "perion", # Perion
    102020500: "gusty", # Gusty Peak
    102030400: "ash", # Ash-Covered Land
    102040200: "relic", # Relic Excavation Camp
    103000000: "kerning", # Kerning City
    103020200: "transfer", # Transfer Area
    103030000: "swamp", # The Swamp of Despair
    103030400: "mire", # Deep Mire
    104000000: "lith", # Lith Harbor
    104020000: "sixPath", # Six Path Crossway
    120000000: "nautilus", # Nautilus Harbor
    120040000: "goldBeach", # Gold Beach Resort
}
elNathDict = {
    200000000: "orbis", # Orbis
    200010100: "garden", # The Road to Garden of 3 Colors
    200010300: "stairway", # Stairway to the Sky II
    200080000: "cloud", # Cloud Park VI
    200080100: "tower", # Entrance to Orbis Tower
    211000000: "elNath", # El Nath
    211030000: "cold", # Cold Field I
    211040300: "cliff", # Sharp Cliff I
    211041200: "forest", # Forest of Dead Trees II
    211041800: "mine", # Dead Mine IV
}
ludusDict = {
    220000000: "ludibrium", # Ludibrium
    220020300: "mainProcess", # Toy Factory <Main Process 1>
    220030300: "processTwo", # Toy Factory <Process 2> Zone 3
    220040200: "crossroad", # Crossroad of Time
    220050000: "lostTime", # Lost Time <1>
    220080000: "deepClocktower", # Deep Inside the Clocktower
    221020701: "hiddenTower", # Hidden Tower
    222020000: "library", # Helios Tower Library
    222020200: "elevator", # Helios Tower <99th Floor>
    222130100: "fantasy", # Fantasy Station <2> (New FTW)
}
underseaDict = {
    230000000: "aquarium", # Aquarium
    230010200: "redCoral", # Red Coral Forest
    230010201: "snowyWhale", # Snowy Whale's Island
    230010400: "westFork", # Forked Road : West Sea
    230020000: "eastFork", # Forked Road : East Sea
    230020201: "palmTrees", # Two Palm Trees
    230030100: "mushroomCoral", # Mushroom Coral Hill
    230040000: "deepGorge", # Deep Sea Gorge I
    230040200: "dangerGorge", # Dangerous Sea Gorge I
    230040400: "grave", # The Grave of a Wrecked Ship
}
muLungDict = {
    250000000: "muLung", # Mu Lung
    250020300: "practice", # Practice Field : Advanced Level
    250010300: "snake", # Snake Area
    250010304: "wandering", # Territory of Wandering Bear
    250010500: "peachFarm", # Peach Farm 1
    250010504: "goblin", # Goblin Forest 2
    251000000: "herbTown", # Herb Town
    251010200: "garden", # 100-Year-Old Herb Garden
    251010402: "pirate", # Red-Nose Pirate Den 2
    251010500: "swamp", # Isolated Swamp
}
nihalDict = {
    260000000: "ariant", # Ariant
    260010300: "whiteRock", # White Rock Desert
    260010600: "tent", # Tent of the Entertainers
    260020300: "redSand", # The Desert of Red Sand
    260020700: "sahel", # Sahel 1
    261000000: "magatia", # Magatia
    261010100: "zenumist", # Lab - 2nd Floor Hallway
    261020000: "alcadno", # Lab - Central Hub
    261020401: "saitie", # Authorized Personnel Only
    261030000: "secret", # Lab - Secret Basement Path
}
minarDict = {
    240000000: "leafre", # Leafre
    240010200: "cranky", # Cranky Forest
    240010800: "skyNest", # Entrance to Sky Nest
    240020101: "griffey", # Griffey Forest
    240020401: "manon", # Manon's Forest
    240030000: "dragonForest", # Entrance to Dragon Forest
    240040400: "wyvern", # Wyvern Canyon
    240040511: "skele", # The Dragon Nest Left Behind 1
    240040521: "nestGolem", # Dangerous Dragon Nest
    240050000: "caveOfLife", # Cave Entrance
}
sleepywoodDict = {
    105000000: "sleepywood", # Sleepywood
    105010100: "humid", # Humid Swamp
    105020100: "cliff", # Cave Cliff
    105020300: "chilly", # Chilly Cave
    105020400: "exit", # Cave Exit
    105030000: "door", # Another Door
    105030100: "entrance", # Temple Entrance
    105030200: "collapsed", # Collapsed Temple
    105030300: "hallway", # Endless Hallway
    105030500: "altar", # Forbidden Altar
}

# 29012: Ossyria Explorer
# 29015: Victoria Explorer
explorationList = [
    (beginnerDict, 29005, 27010, "20", "Beginner Explorer", 29015),
    (elNathDict, 29006, 27011, "10", "El Nath Mts. Explorer", 29012),
    (ludusDict, 29007, 27012, "10", "Ludus Lake Explorer", 29012),
    (underseaDict, 29008, 27013, "10", "Undersea Explorer", 29012),
    (muLungDict, 29009, 27014, "10", "Mu Lung Garden Explorer", 29012),
    (nihalDict, 29010, 27015, "10", "Nihal Desert Explorer", 29012),
    (minarDict, 29011, 27016, "10", "Minar Forest Explorer", 29012),
    (sleepywoodDict, 29014, 27019, "10", "Sleepywood Explorer", 29015),
]

currentMap = sm.getFieldID()
for region in explorationList:
    if currentMap in region[0]:
        regionExploration(region[0], region[1], region[2], currentMap, region[3], region[4])
        # Accept Victoria/Ossyria and Maple Explorer if they have not been started/completed yet
        if not sm.hasQuest(region[5]) and not sm.hasQuestCompleted(region[5]):
            sm.startQuest(region[5])
        if not sm.hasQuest(29013) and not sm.hasQuestCompleted(29013):
            sm.startQuest(29013)
        break