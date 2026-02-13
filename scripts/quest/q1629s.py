# [Silent Crusade] Dark Energy Rising

STARLING = 9120221
CRANKY_FOREST = 240010200

sm.setSpeakerID(STARLING)
sm.sendNext("好久不见。我从克洛乌那里听说了你在玛加提亚的活动。能得到吝啬鬼克洛乌的中意，看来你非比寻常啊？")

response = sm.sendAskYesNo("和玛加提亚一样，神木村也出现了很多时空门。雪上加霜的是，从时空门中还有黑暗气息流出，所以我想尽快处理一下，无奈最近大家都实在太忙了。我想请你再帮我一次，可以吗？")

if response:
    sm.sendNext("谢谢你。你调查了#r#m240010200##k的时空门后，如果出现什么可疑怪物的话，就一并将它们消灭吧。我会在#b神木村#k等你回来。")
    sm.showFieldEffect("Map/Effect.img/crossHunter/chapter/start2")
    sm.startQuest(parentID)

else:
    sm.sendSayOkay("Let me know when you are ready")