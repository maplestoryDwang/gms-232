# Tower of Oz lobby to 1F
from java.lang import Long

from net.swordie.ms.client.character.dailies import DailiesManager
from net.swordie.ms.client.character.dailies import DailyType
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.constants import QuestConstants
from net.swordie.ms.enums import BossCooldown

enter_field = 992001000
alicia_soul = 2540000
clever_lady_hotline = 2432461

sm.setSpeakerID(alicia_soul)
q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS)
solo = chr.getParty() is None
is_party_leader = sm.isPartyLeader()
oz_time = OzTowerModule.getTimeByChr(chr)

# Reentrance
re_enter_instance = chr.getReEnterableInstance(enter_field)
if re_enter_instance is not None:
    if sm.sendAskYesNo("Would you like to reenter?"):

        # Check again AFTER the 'reenter' message has been given. as it can change in the time the user gets the message and clicking yes
        re_enter_instance = chr.getReEnterableInstance(enter_field)
        if re_enter_instance is not None:
            chr.reEnterInstance(re_enter_instance)
            sm.dispose()
        else:
            sm.sendSayOkay("It seems like your party has left the instance.")
            sm.dispose()


# Boss Cooldown Check
elif sm.isOnBossCooldown(BossCooldown.Dorothy):
    sm.sendNext("You are still on cooldown.")
    sm.dispose()


# If in party but not leader
elif not solo and not is_party_leader:
    sm.sendSayOkay("Have your party leader speak to me!")
    sm.dispose()


# Daily floor cap Check
elif not sm.checkOzFloorRequirement(chr, chr.getParty()):
    sm.sendNext("Someone already has done the maximum amount of floors today. Alicia in the lobby will tell you how many floors you have cleared today.")
    sm.dispose()


# Calculate Oz Time before warping in
if not solo and is_party_leader:
    oz_time = OzTowerModule.getTimeByInstance(chr, chr.getParty())


# Instance In
if sm.sendAskYesNo("Do you want to enter the Tower of Oz?"):

    # Checks
    if not solo:
        if not sm.checkParty(BossCooldown.Dorothy, 0):
            sm.dispose()

    # Give hotline to leader
    if not sm.hasItem(clever_lady_hotline):
        if not sm.canHold(clever_lady_hotline):
            sm.sendSayOkay("Sorry, You need to make some space for my Clever Lady Hotline!")
            sm.dispose()
        sm.giveItem(clever_lady_hotline)

    # warp in
    sm.warpInstanceIn(enter_field, 0, True)
    sm.setInstanceTime(60 * 30 * 30, OzConstants.OZ_LOBBY)
    instance = chr.getInstance()
    instance.addProperty(OzConstants.MAX_TIME, oz_time)
    sm.setDeathCount(10)

    for c in instance.getChars():
        DailiesManager.update(DailyType.OzTower, c)  # Set Last attempted Oz

    OzTowerModule.clearPillsForInstance(instance)

    # Init a few Instance Properties
    instance.addProperty(OzConstants.UNLOCKED_FLOOR, 1)
    instance.addProperty(OzConstants.CURRENT_FLOOR, 1)
    instance.addProperty(OzConstants.DAMAGE_DEALT, Long(0))
    instance.addProperty(OzConstants.KILL_COUNT, 0)
    instance.addProperty(OzConstants.ITEMS_LOOTED, 0)
    instance.addProperty(OzConstants.ITEMS_DROPPED, 0)
