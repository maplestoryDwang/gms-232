# [Gold Beach] A Golden Opportunity

mapid = 120040300

sm.setSpeakerID(9201343)
response = sm.sendAskYesNo("你好？我是大贸易商金利奇。我想给你一个特别的机会。冒险岛最好的度假胜地金海滩度假村即将开业，在开业之前我想给你次体验的机会。你想现在就去吗？")

if response:
    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.warp(mapid, 0)
sm.dispose()
