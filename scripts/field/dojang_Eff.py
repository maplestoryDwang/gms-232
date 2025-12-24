# Mu Lung Dojo Floors (except 1st Floor) | Used to spawn the Bosses & Display "Floor Effect & Dojo Clock"

from time import sleep

from net.swordie.ms.constants import GameConstants


def SpawnMonster(bossInfo):
    sm.spawnMob(bossinfo[0][0], 0, 7, False, bossinfo[0][1]) # Spawns mob based on Field ID
    for i in range(0, bossinfo[1][2]):
        sm.spawnMob(bossinfo[1][0], 0, 7, False, bossinfo[1][1])
    field.setProperty("curMobCount", field.getProperty("curMobCount") + 1)

DOJO_QUEST = 3887

MuLungDojoF1 = 925070100
MuLungDojoF2 = 925070200
MuLungDojoF3 = 925070300
MuLungDojoF4 = 925070400
MuLungDojoF5 = 925070500
MuLungDojoF6 = 925070600
MuLungDojoF7 = 925070700
MuLungDojoF8 = 925070800
MuLungDojoF9 = 925070900
MuLungDojoF10 = 925071000
MuLungDojoF11 = 925071100
MuLungDojoF12 = 925071200
MuLungDojoF13 = 925071300
MuLungDojoF14 = 925071400
MuLungDojoF15 = 925071500
MuLungDojoF16 = 925071600
MuLungDojoF17 = 925071700
MuLungDojoF18 = 925071800
MuLungDojoF19 = 925071900
MuLungDojoF20 = 925072000
MuLungDojoF21 = 925072100
MuLungDojoF22 = 925072200
MuLungDojoF23 = 925072300
MuLungDojoF24 = 925072400
MuLungDojoF25 = 925072500
MuLungDojoF26 = 925072600
MuLungDojoF27 = 925072700
MuLungDojoF28 = 925072800
MuLungDojoF29 = 925072900
MuLungDojoF30 = 925073000
MuLungDojoF31 = 925073100
MuLungDojoF32 = 925073200
MuLungDojoF33 = 925073300
MuLungDojoF34 = 925073400
MuLungDojoF35 = 925073500
MuLungDojoF36 = 925073600
MuLungDojoF37 = 925073700
MuLungDojoF38 = 925073800
MuLungDojoF39 = 925073900
MuLungDojoF40 = 925074000
MuLungDojoF41 = 925074100
MuLungDojoF42 = 925074200
MuLungDojoF43 = 925074300
MuLungDojoF44 = 925074400
MuLungDojoF45 = 925074500
MuLungDojoF46 = 925074600
MuLungDojoF47 = 925074700
MuLungDojoF48 = 925074800
MuLungDojoF49 = 925074900
MuLungDojoF50 = 925075000
MuLungDojoF51 = 925075100
MuLungDojoF52 = 925075200
MuLungDojoF53 = 925075300
MuLungDojoF54 = 925075400
MuLungDojoF55 = 925075500
MuLungDojoF56 = 925075600
MuLungDojoF57 = 925075700
MuLungDojoF58 = 925075800
MuLungDojoF59 = 925075900
MuLungDojoF60 = 925076000
MuLungDojoF61 = 925076100
MuLungDojoF62 = 925076200
MuLungDojoF63 = 925076300
MuLungDojoF64 = 925076400
MuLungDojoF65 = 925076500
MuLungDojoF66 = 925076600
MuLungDojoF67 = 925076700
MuLungDojoF68 = 925076800
MuLungDojoF69 = 925076900
MuLungDojoF70 = 925077000
MuLungDojoF71 = 925077100
MuLungDojoF72 = 925077200
MuLungDojoF73 = 925077300
MuLungDojoF74 = 925077400
MuLungDojoF75 = 925077500
MuLungDojoF76 = 925077600
MuLungDojoF77 = 925077700
MuLungDojoF78 = 925077800
MuLungDojoF79 = 925077900
MuLungDojoF80 = 925078000

bossinfos = {
    MuLungDojoF1 : [[9305600, 5200000], [0, 0, 0], 3], # Mano
    MuLungDojoF2 : [[9305601, 5740800], [0, 0, 0], 1], # Mushmom
    MuLungDojoF3 : [[9305602, 6307200], [0, 0, 0], 1], # Stumpy
    MuLungDojoF4 : [[9305603, 6930000], [0, 0, 0], 1], # Blue Mushmom
    MuLungDojoF5 : [[9305604, 7549200], [0, 0, 0], 1], # Zombie Mushmom
    MuLungDojoF6 : [[9305605, 12342000], [0, 0, 0], 1], # King Slime
    MuLungDojoF7 : [[9305606, 13923000], [0, 0, 0], 1], # Dyle
    MuLungDojoF8 : [[9305607, 15105000], [0, 0, 0], 1], # King Clang
    MuLungDojoF9 : [[9305608, 16846800], [0, 0, 0], 1], # Faust
    MuLungDojoF10 : [[9305619, 100000000], [0, 0, 0], 1], # Von Leon
    MuLungDojoF11 : [[9305610, 40824000], [0, 0, 0], 1], # Metal Golem
    MuLungDojoF12 : [[9305617, 45404550], [0, 0, 0], 1], # Snack bar
    MuLungDojoF13 : [[9305612, 48593250], [0, 0, 0], 1], # Jr. Balrog
    MuLungDojoF14 : [[9305611, 55350000], [0, 0, 0], 1], # Eliza
    MuLungDojoF15 : [[9305628, 61600500], [0, 0, 0], 1], # Crimson balrog
    MuLungDojoF16 : [[9305682, 68121000], [0, 0, 0], 1], # Snow Witch
    MuLungDojoF17 : [[9305683, 78840000], [0, 0, 0], 1], # Seruf
    MuLungDojoF18 : [[9305614, 90011250], [0, 0, 0], 1], # Deo
    MuLungDojoF19 : [[9305620, 97902000], [0, 0, 0], 1], # Papa Pixie
    MuLungDojoF20 : [[9305609, 1500000000], [0, 0, 0], 1], # Hilla
    MuLungDojoF21 : [[9305623, 130536000], [9305644, 4351200, 5], 1], # Deet and roi
    MuLungDojoF22 : [[9305625, 159138000], [9305646, 5304600, 5], 1], # Chimera
    MuLungDojoF23 : [[9305624, 190350000], [9305645, 6345000, 5], 1], # Frankenoid
    MuLungDojoF24 : [[9305684, 242424000], [9305685, 8080800, 5], 1], # Chao
    MuLungDojoF25 : [[9305658, 405504000], [9305686, 13516800, 5], 1], # Ephenia
    MuLungDojoF26 : [[9300299, 497040000], [9305688, 16568000, 5], 1], # Rombot
    MuLungDojoF27 : [[9305616, 596496000], [9305689, 19883200, 5], 1], # Timer
    MuLungDojoF28 : [[9305690, 706176000], [9305691, 23539200, 5], 1], # Master Specter
    MuLungDojoF29 : [[9305692, 824256000], [9305693, 27475200, 5], 1], # Master Birk
    MuLungDojoF30 : [[9305629, 3000000000], [0, 0, 0], 1], # Arkarium
    MuLungDojoF31 : [[9305630, 2108240000], [0, 0, 0], 2], # Manon
    MuLungDojoF32 : [[9305631, 2526520000], [0, 0, 0], 2], # Griffey
    MuLungDojoF33 : [[9305659, 2976000000], [0, 0, 0], 2], # Xerxes
    MuLungDojoF34 : [[9305633, 3464920000], [0, 0, 0], 2], # Papulatus
    MuLungDojoF35 : [[9305621, 3986640000], [0, 0, 0], 2], # Alishar
    MuLungDojoF36 : [[9305632, 4551000000], [0, 0, 0], 2], # Snowman
    MuLungDojoF37 : [[9305694, 5149760000], [0, 0, 0], 2], # Riche
    MuLungDojoF38 : [[9305634, 6474960000], [0, 0, 0], 3], # Ani
    MuLungDojoF39 : [[9305656, 7971840000], [0, 0, 0], 3], # King Omen
    MuLungDojoF40 : [[9305639, 8000000000], [0, 0, 0], 1], # Magnus
    MuLungDojoF41 : [[9305660, 42000000000], [0, 0, 0], 1], # Targa
    MuLungDojoF42 : [[9305661, 63000000000], [0, 0, 0], 1], # Scarboss
    MuLungDojoF43 : [[9305627, 84000000000], [0, 0, 0], 1], # King sage
    MuLungDojoF44 : [[9305622, 105000000000], [0, 0, 0], 1], # Lord Pirate
    MuLungDojoF45 : [[9305662, 105000000000], [0, 0, 0], 1], # Ravana
    MuLungDojoF46 : [[9305635, 210000000000], [0, 0, 0], 1], # Leviathan
    MuLungDojoF47 : [[9305636, 315000000000], [0, 0, 0], 1], # Dodo
    MuLungDojoF48 : [[9305637, 420000000000], [0, 0, 0], 1], # Lilynouch
    MuLungDojoF49 : [[9305638, 525000000000], [0, 0, 0], 1], # Lyka
    MuLungDojoF50 : [[9305695, 525000000000], [0, 0, 0], 1], # Pink Bean
    MuLungDojoF51 : [[9305696, 630000000000], [0, 0, 0], 1], # Spirit of Rock
    MuLungDojoF52 : [[9305663, 735000000000], [0, 0, 0], 1], # Tarantulus
    MuLungDojoF53 : [[9305664, 840000000000], [0, 0, 0], 1], # Dragonoir
    MuLungDojoF54 : [[9305665, 945000000000], [0, 0, 0], 1], # Dragon Rider
    MuLungDojoF55 : [[9305666, 1050000000000], [0, 0, 0], 1], # Hawkeye
    MuLungDojoF56 : [[9305667, 1155000000000], [0, 0, 0], 1], # Eckhart
    MuLungDojoF57 : [[9305668, 1260000000000], [0, 0, 0], 1], # Irena
    MuLungDojoF58 : [[9305669, 1365000000000], [0, 0, 0], 1], # Oz
    MuLungDojoF59 : [[9305670, 1470000000000], [0, 0, 0], 1], # Mihile
    MuLungDojoF60 : [[9305671, 1575000000000], [0, 0, 0], 1], # Cygnus
    MuLungDojoF61 : [[9305697, 1680000000000], [0, 0, 0], 1], # Pianus
    MuLungDojoF62 : [[9305698, 1785000000000], [0, 0, 0], 1], # Rex
    MuLungDojoF63 : [[9305699, 1890000000000], [0, 0, 0], 1], # Omni-CLN
    MuLungDojoF64 : [[9305700, 1911000000000], [0, 0, 0], 1], # ghostwood stumpy
    MuLungDojoF65 : [[9305701, 1932000000000], [0, 0, 0], 1], # sky guardian
    MuLungDojoF66 : [[9305657, 1953000000000], [0, 0, 0], 1], # demolishizer
    MuLungDojoF67 : [[9305702, 1974000000000], [0, 0, 0], 1], # dark demon wolfmaster
    MuLungDojoF68 : [[9305703, 1995000000000], [0, 0, 0], 1], # arma
    MuLungDojoF69 : [[9305704, 2016000000000], [0, 0, 0], 1], # slurpy tree
    MuLungDojoF70 : [[9305705, 2100000000000], [0, 0, 0], 1], # lotus
    MuLungDojoF71 : [[9305706, 2310000000000], [0, 0, 0], 1], # dreamkeeper
    MuLungDojoF72 : [[9305707, 2625000000000], [0, 0, 0], 1], # corrupt spirit of harmony
    MuLungDojoF73 : [[9305708, 2940000000000], [0, 0, 0], 1], # vanishing erda
    MuLungDojoF74 : [[9305672, 3255000000000], [0, 0, 0], 1], # alang
    MuLungDojoF75 : [[9305673, 3570000000000], [0, 0, 0], 1], # bonsun
    MuLungDojoF76 : [[9305674, 3885000000000], [0, 0, 0], 1], # wukong
    MuLungDojoF77 : [[9305675, 4200000000000], [0, 0, 0], 1], # sondal
    MuLungDojoF78 : [[9305676, 4550000000000], [0, 0, 0], 1], # gold dragon
    MuLungDojoF79 : [[9305640, 4900000000000], [0, 0, 0], 1], # Red tiger
    MuLungDojoF80 : [[9305339, 5250000000000], [0, 0, 0], 1] # Mu Gong
}

stage = ((sm.getFieldID() % 10000) / 100)

sm.showEffectToField("dojang/start/number/2")
sleep(GameConstants.DOJO_SPAWM_BOSS_DELAY)
field.setProperty("cleared", False)

bossinfo = bossinfos[sm.getFieldID()]
field.setProperty("curMobCount", 0)
SpawnMonster(bossinfo)