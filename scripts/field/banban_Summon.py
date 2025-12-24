# Root Abyss - Temporal Crevasse (Von Bon's Map)
from net.swordie.ms.enums import WeatherEffNoticeType

sm.showWeatherNotice("Summon Von Bon in the Dimensional Schism.", WeatherEffNoticeType.SnowySnowAndSprinkledFlowerAndSoapBubbles, 10000)
for chr in field.getChars():
    qm = chr.getQuestManager()
    if chr.hasQuestInProgress(30009):
        qm.completeQuest(30009) # [Root Abyss] Defeat the First Seal Guardian