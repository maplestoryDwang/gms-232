# Tower Of Oz Floor 36
# Pig Reactor
#
from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.connection.packet import WvsContext
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import WeatherEffNoticeType

instance = chr.getInstance()
if instance is not None:
    pattern = str(instance.getProperty(OzConstants.F36_PATTERN))

    if len(pattern) > 0:
        user_pattern = str(instance.getProperty(OzConstants.F36_USER_PATTERN))
        stage = int(instance.getProperty(OzConstants.F36_CUR_STAGE))

        user_pattern += "3"

        instance.addProperty(OzConstants.F36_USER_PATTERN, user_pattern)

        # Finished Pattern Correctly
        if pattern == user_pattern:

            if stage == 4:
                OzTowerModule.clearStage(instance, chr)
            else:
                instance.broadcast(WvsContext.weatherEffectNotice(WeatherEffNoticeType.Oz_Secreta, "Great Job, Onto the next code!", 2000))
                instance.addProperty(OzConstants.F36_CUR_STAGE, stage + 1)
            instance.addProperty(OzConstants.F36_USER_PATTERN, "")
            instance.addProperty(OzConstants.F36_PATTERN, "")

        # Failed Pattern
        if not pattern.startswith(user_pattern):
            instance.chatMessage("You failed the pattern. Talk to Secreta to try again.")
            instance.addProperty(OzConstants.F36_USER_PATTERN, "")
            instance.addProperty(OzConstants.F36_PATTERN, "")
