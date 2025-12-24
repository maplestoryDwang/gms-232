# 9601068
from net.swordie.ms.enums import WeatherEffNoticeType

CHIEF_PRIEST = 9601068 # mob id
ZHEUNG_GUAN = 9310046 # Npc id

sm.showWeatherNotice("Muahaha.... You got lucky.. This time.", WeatherEffNoticeType.BossChiefPriest)
sm.invokeAfterDelay(10000, "warpInstanceOut", 701220601, 0)
if not sm.hasQuestCompleted(62022) and not sm.hasQuest(62022):
    sm.startQuestNoCheck(62022)
    sm.removeEscapeButton()
    sm.setBoxChat()
    sm.flipBoxChat()
    sm.flipBoxChatPlayerAsSpeaker()
    sm.sendNext("What just happened?..\r\n"
                "I should speak with #p"+ str(ZHEUNG_GUAN) +"#.")