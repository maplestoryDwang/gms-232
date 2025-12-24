# Bob | Leave Cpt. Latanica
RED_ESSENCE = 4000383
REQ_ESSENCE = 300
LATANICA_HP = 1700000000 # 1.7b

sel = sm.sendAskYesNo("Heyyyy, I'm Bob. Are you looking for the boss of this ship? #b\r\n"
                      "#L0#Summon Captain Latanica (consumes 300 #i{}##t{}#)#l\r\n"
                      "#L1#Leave#l".format(RED_ESSENCE, RED_ESSENCE))
if sel == 0:
    if sm.hasItem(RED_ESSENCE, REQ_ESSENCE):
        sm.consumeItem(RED_ESSENCE, REQ_ESSENCE)
        sm.spawnMob(9420513, -154, 225, LATANICA_HP)
    else:
        sm.sendSayOkay("Hey friend, I don't think you have 300 #i{}##t{}#! Come back after defeating some more Mr. Anchors.".format(RED_ESSENCE, RED_ESSENCE))
elif sel == 1:
    sm.warpInstanceOut(541010060)
