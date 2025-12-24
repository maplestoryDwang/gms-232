from net.swordie.ms.util import Util

henesys = 100000000
pqs = {
    "Moon Bunny PQ": 910010000,
    "Nett's Pyramid": 926010300,
    "Bounty Hunt": 993000000,
    "Guard the Castle": 993000100,
    "Courtship Dance": 993000400,
}

allowedChars = []

selection = sm.sendNext("What would you like to do?\r\n#b"
                        "#L0#Enter testing-phase instances#l\r\n"
                        "#L1#Spawn Some mobs#l\r\n"
                        "#L2#Kill mobs in field#l")
if selection == 0:
    # PQs
    sel_str = "#b"
    for key, value in pqs.items():
        sel_str += "#L" + str(value) + "#" + str(key) + "#l\r\n"
    map_id = sm.sendNext("Which testing-phase instance would you like to enter?\r\n" + sel_str)

    if chr.getParty() is None or chr.getParty().hasCharAsLeader(chr):
        sm.warpInstanceIn(map_id, 0, True)
        instance = chr.getInstance()
        sm.setInstanceTime(20 * 60, henesys)
    else:
        sm.sendNext("Have the party leader talk to me.")

elif selection == 1:
    if chr.getName() not in allowedChars:
        sm.dispose()

    template = sm.sendAskText("Fill in the mob template Id", "", 1, 10)
    hp = sm.sendAskText("Fill in the mob hp", "", 1, 20)
    if not Util.isLong(hp) or not Util.isLong(template):
        sm.dispose()

    amount = sm.sendAskText("Fill in the amount", "", 1, 3)
    if amount == 0:
        sm.dispose()

    for i in range (int(amount)):
        sm.spawnMob(int(template), chr.getPosition().getX(), chr.getPosition().getY(), False, long(hp))

elif selection ==2:
    code = sm.sendAskText("Please fill in the password", "", 1, 20)

    if chr.getName() not in allowedChars:
        sm.dispose()
    sm.killMobs()
