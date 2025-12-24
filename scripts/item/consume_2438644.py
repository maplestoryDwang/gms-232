# Trait Increase Potion
# 2438644
# Increases the selected Trait by 3680 EXP.

from net.swordie.ms.enums import Stat

traitDict = {
    0: Stat.charismaEXP, # Ambition
    1: Stat.insightEXP, # Insight
    2: Stat.willEXP, # Willpower
    3: Stat.craftEXP, # Diligence
    4: Stat.senseEXP, # Empathy
    5: Stat.charmEXP, # Charm
}

mapleAdmin = 2007

sm.setSpeakerID(mapleAdmin)
traitSelection = sm.sendNext("Select the trait you'd like to increase. #b\r\n"
"#L0# Ambition #l\r\n"
"#L1# Insight #l\r\n"
"#L2# Willpower #l\r\n"
"#L3# Diligence #l\r\n"
"#L4# Empathy #l\r\n"
"#L5# Charm #l\r\n")

sm.consumeItem()
chr.addTraitExp(traitDict[traitSelection], 3680)