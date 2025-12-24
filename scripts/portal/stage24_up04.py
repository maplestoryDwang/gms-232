# Oz Tower F24
# Music Stage Lv4
#
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.connection.packet.field import FieldPacket
from net.swordie.ms.util import Util
from net.swordie.ms.world.field.fieldeffect import FieldEffect

dorothy_illusion = 2540010

bgm_list = {
    "Ariant":                   "Bgm14/Ariant",
    "Aquarium":                 "Bgm11/Aquarium",
    "Edelstein":                "Bgm22/EdelsteinCity",
    "El Nath":                  "Bgm03/SnowyVillage",
    "Ellinia":                  "Bgm02/WhenTheMorningComes",
    "Elluel":                   "Bgm25/WindAndFlower",
    "Ereve":                    "Bgm18/QueensGarden",
    "Fox Point Village":        "Bgm36/foxvillage",
    "Heliseum Reclamation HQ":  "Bgm28/retake",
    "Henesys":                  "Bgm00/FloralLife",
    "Herb Town":                "Bgm15/WhiteHerb",
    "Kerning City":             "Bgm01/BadGuys",
    "Korean Folk Town":         "Bgm11/DownTown",
    "Leafre":                   "Bgm13/Leafre",
    "Lith Harbor":              "Bgm02/AboveTheTreetops",
    "Ludibrium":                "Bgm06/FantasticThinking",
    "Magatia":                  "Bgm12/Dispute",
    "Mulung":                   "Bgm15/MureungHill",
    "Nautilus":                 "Bgm15/Nautilus",
    "Omega Sector":             "Bgm08/LetsMarch",
    "Orbis":                    "Bgm04/Shinin'Harbor",
    "Pantheon":                 "Bgm27/Pantheon",
    "Perion":                   "Bgm00/Nightmare",
    "Rien":                     "Bgm19/RienVillage",
    "Sleepywood":               "Bgm00/SleepyWood",
    "Nameless Town":            "Bgm46/Lake Of Oblivion",
    "Chu Chu Village":          "Bgm46/ChewChew MainTheme",
    "Lachelein":                "Bgm46/LachelntheIllusionCity",
    "Arcana":                   "Bgm47/TheTuneOfAzureLight",
    "Morass":                   "Bgm48/MemoryOfKritias",
}
instance = chr.getInstance()
if instance is not None and (chr.getParty() is None or chr.getParty().hasCharAsLeader(chr)):
    rng_town = Util.getRandomFromCollection(bgm_list.keys())
    rng_bgm = bgm_list[rng_town]

    # Play BGM
    instance.broadcast(FieldPacket.fieldEffect(FieldEffect.changeBGM(rng_bgm, 0, 0)))

    sm.setSpeakerID(dorothy_illusion)
    msg = "Listen carefully! In which town do you hear this music?\r\n#b"
    i = 0
    for k, v in bgm_list.items():
        msg += "#L{}#{}#l\r\n".format(i, k)
        i += 1
    selection = sm.sendNext(msg)

    if bgm_list.keys()[selection] == rng_town:
        sm.teleportToPortal(5)
        if not OzTowerModule.hasClearedThisFloor(instance, chr.getFieldID()):
            OzTowerModule.clearStage(instance, chr)
    else:
        sm.sendSayOkay("Incorrect")
        sm.dispose()