# 101020400
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import FieldConstants
from net.swordie.ms.constants import OzConstants

fieldId = sm.getFieldID()
instance = chr.getInstance()

if instance is not None and FieldConstants.isTowerOfOzField(fieldId):
    cur_field = OzTowerModule.getFloorByFieldId(fieldId)

    if fieldId == 992050000:  # F50
        if (chr.getParty() is None or sm.isPartyLeader()) and sm.sendAskYesNo("Are you sure you want to leave?\r\nThis will warp out everyone"):
            instance.clear()
        else:
            sm.chat("Only the leader can finish the Oz run.")
        sm.dispose()


    # Being on a JQ or Rest floor -> enter portal = clear.
    if FieldConstants.isTowerOfOzJQField(fieldId) or FieldConstants.isTowerOfOzRestField(fieldId):
        OzTowerModule.clearStage(instance, chr, False)


    # Can continue to next floor Check.
    if instance.getProperty(OzConstants.UNLOCKED_FLOOR) > cur_field:
        next_fieldId = fieldId + 1000

        if next_fieldId == 992014000:
            next_fieldId = 992014001

        # Coming from a rest floor -> resume timer.
        if FieldConstants.isTowerOfOzRestField(fieldId):
            instance.resumeTimer()

        instance.warp(next_fieldId)
        OzTowerModule.clearKillAndDamageInfo(instance)
        instance.addProperty(OzConstants.CURRENT_FLOOR, cur_field + 1)  # Set Current Floor

    else:
        sm.chat("You must finish the task first.")