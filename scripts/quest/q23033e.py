# 23033 - BaM 3rd job advancement

sm.setSpeakerID(2151001)
if sm.sendAskYesNo("你把#o9001032#破坏掉啦！干得好！这样的话，我们村的能量不足现象就能缓解一些了！心里感觉终于畅快了！了不起！你为我们村立了大功！"):
    sm.jobAdvance(3211)
    sm.completeQuest(parentID)
    sm.sendSayOkay("看到你有了这么强的能力，就没有必要再犹豫了。本来我觉得太危险，想过一段时间再传授给你……我要把更强的唤灵斗师技能传授给你！我想你一定可以掌握！")
else:
    sm.sendSayOkay("我让你转职了。现在你已经不是以前的你了。近似疯狂的、更危险的技能世界将会展现在你面前。控制也会变得更难，但是……呵呵，你能完成那么危险的任务，相信你一定可以掌握。")
