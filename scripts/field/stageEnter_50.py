from net.swordie.ms.constants import OzConstants
from net.swordie.ms.enums import BossCooldown
from net.swordie.ms.enums import ObstacleAtomEnum
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Defeating Dorothy will be your very last mission. Good luck", WeatherEffNoticeType.Oz_Alicia, 5000)

instance = chr.getInstance()
if instance is not None:

    if not instance.hasProperty("F50_Inited"):
        instance.addProperty("F50_Inited", True)
        instance.setBossCooldown(BossCooldown.Dorothy)
        sm.spawnMob(OzConstants.DOROTHY, 940, 185, False, OzConstants.DOROTHY_HP)

        sm.invokeAtFixedRate(500, OzConstants.DOROTHY_METEOR_LARGE_ATOM_EXECUTION_DELAY, 0,
                             "createObstacleAtomToFoothold",
                             ObstacleAtomEnum.LargeDorothyMeteor,
                             OzConstants.DOROTHY_METEOR_RECT,
                             OzConstants.DOROTHY_METEOR_LARGE_ATOM_DAMAGE,
                             OzConstants.DOROTHY_METEOR_LARGE_ATOM_VELOCITY,
                             45,
                             OzConstants.DOROTHY_METEOR_LARGE_ATOM_AMOUNT,
                             OzConstants.DOROTHY_METEOR_LARGE_ATOM_PROP)

        sm.invokeAtFixedRate(500, OzConstants.DOROTHY_METEOR_SMALL_ATOM_EXECUTION_DELAY, 0,
                             "createObstacleAtomToFoothold",
                             ObstacleAtomEnum.SmallDorothyMeteor,
                             OzConstants.DOROTHY_METEOR_RECT,
                             OzConstants.DOROTHY_METEOR_SMALL_ATOM_DAMAGE,
                             OzConstants.DOROTHY_METEOR_SMALL_ATOM_VELOCITY,
                             45,
                             OzConstants.DOROTHY_METEOR_SMALL_ATOM_AMOUNT,
                             OzConstants.DOROTHY_METEOR_SMALL_ATOM_PROP)

        sm.invokeAtFixedRate(500, OzConstants.DOROTHY_METEOR_MEDIUM_ATOM_EXECUTION_DELAY, 0,
                             "createObstacleAtomToFoothold",
                             ObstacleAtomEnum.MediumDorothyMeteor,
                             OzConstants.DOROTHY_METEOR_RECT,
                             OzConstants.DOROTHY_METEOR_MEDIUM_ATOM_DAMAGE,
                             OzConstants.DOROTHY_METEOR_MEDIUM_ATOM_VELOCITY,
                             45,
                             OzConstants.DOROTHY_METEOR_MEDIUM_ATOM_AMOUNT,
                             OzConstants.DOROTHY_METEOR_MEDIUM_ATOM_PROP)