# Familiar Booster Pack (2433873)
from net.swordie.ms.enums import InvType

familiars = [
2870094,
2880119,
2880112,
2880089,
2880116,
2880185,
2880328,
2880329,
2880337,
2880087,
2880323,
2880343,
2880254,
2880339,
2880338,
2880322,
2880530,
2880541,
2880540,
2880531,
2880533,
2880565,
2880348,
2880349,
2880350,
2880364,
2880365,
2880366,
2880367,
2880368,
2880424,
2880425,
2880426,
2880427,
2880429,
2880430,
2880431,
2880432,
2880699,
2880718,
2880719,
2880720,
2880721,
2880762,
2880763
]

if sm.getEmptyInventorySlots(InvType.CONSUME) <= 0:
    sm.sendSayOkay("You require at least 1 empty slot in your use inventory.")
    sm.dispose()

sm.consumeItem(2433873)
rng = sm.getRandomIntBelow(len(familiars))
ds = familiars[rng]
sm.giveItem(ds)
