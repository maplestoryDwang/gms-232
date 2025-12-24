# id 865010200 (Commerci Republic : Berry), field 865010200
if not sm.hasQuestCompleted(17608) and not sm.hasQuest(17608):
    sm.lockInGameUI(True, True)
    sm.forcedInput(4)
    sm.sendDelay(3000)
    sm.setSpeakerType(3)
    sm.setParam(3)
    sm.sendNext("Ugh... Where... am I...? ")
    sm.forcedInput(2)
    sm.sendDelay(1000)
    sm.forcedInput(0)
    sm.sendNext("Oof my head. Hey, where's the ship...? What about Parbell...? How did I end up here? I... can't remember anything.")
    sm.sendSay("It looks like I'm not too badly hurt. This place looks like a fishing village. I should talk to someone and figure out where I am.")
    sm.startQuest(17608)
    sm.sendDelay(1000)
    sm.lockInGameUI(False, True)
    sm.showFieldEffect("/EffectBT.img/dawnveil1/temaD", 0)
if sm.hasQuest(17613):
    sm.completeQuest(17613)