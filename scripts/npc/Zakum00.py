# Adobis - Door to Zakum field
from net.swordie.ms.client.character.skills.temp import CharacterTemporaryStat

EYE_OF_FIRE = 4001017

selection = sm.sendNext("I'd watch around these parts here if I were you. #bAmon#k has been looking into Zakum, and I have no idea what going on beyond that gate. "
                        "\r\n#L0# I would like to challenge zakum#l"
                        "\r\n#L1# I want to attempt the Zakum Jumpquest#l"
                        "\r\n#L2# I would like to get an Eye of Fire#l"
                        )
if selection == 0:
    sm.sendNext("Walk through the portal next to me to challenge Zakum")
elif selection == 1:
    sm.removeBuff(CharacterTemporaryStat.DarkSight)
    sm.warp(280020000)
elif selection == 2:
    if sm.canHold(EYE_OF_FIRE):
        sm.giveItem(EYE_OF_FIRE)
        sm.sendSayOkay("Alright, here you go. Good luck in there.")
    else:
        sm.sendSayOkay("Your bags seem a little full for that. Make sure you have space in your ETC inventory.")
