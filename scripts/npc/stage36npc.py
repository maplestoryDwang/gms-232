# Secreta
# 2540003
# Oz Floor 36 Puzzle NPC
#
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Util

instance = chr.getInstance()
if instance is not None:

    if sm.sendAskYesNo("Should I display the code?"):

        options = ["1", "2", "3", "4"]
        length = [0, 4, 6, 7, 9]

        cur_stage = int(instance.getProperty(OzConstants.F36_CUR_STAGE))
        pattern = ""
        pattern_length = length[cur_stage]

        for _ in range(pattern_length):
            pattern += Util.getRandomFromCollection(options)

        instance.addProperty(OzConstants.F36_PATTERN, pattern)
        instance.addProperty(OzConstants.F36_USER_PATTERN, "")

        OzTowerModule.displayF36Pattern(instance, pattern)
