# id 17534 ([Gollux] The Face of Fear), field 863000100
sm.setSpeakerID(9390120) # Heart Tree Guardian
sm.sendNext("我可以给你挑战强大的贝勒德的机会。")
sm.sendSay("我每天最多可以送你三把入场时所需的钥匙。")
res = sm.sendAskYesNo("你想领取3把入场钥匙吗？")
sm.startQuest(17535)
sm.startQuest(parentID)
sm.completeQuestNoCheck(parentID)
sm.sendSayOkay("Check your inventory.")
