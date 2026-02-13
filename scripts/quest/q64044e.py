# id 64044 ([MONAD: The First Omen] Proving Your Worth), field 867201000
sm.lockInGameUI(True, False)
sm.completeQuestNoCheck(parentID)
sm.startQuest(64045)
sm.sendDelay(500)
sm.flipNpcByTemplateId(9400587, False)
sm.sendDelay(500)
sm.moveNpcByTemplateId(9400587, False, 110, 50)
sm.sendDelay(2000)
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendNext("#face0#给，这是野狼肉。切成薄片保存的话，够吃很长时间的。")
sm.playSound("Sound/PL_MONAD.img/EP1/ACT2/open", 128)
sm.sendDelay(250)
sm.spawnNpc(9400597, 858, -45)
sm.showNpcSpecialActionByTemplateId(9400597, "summon", 0)
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendNext("#face0#嗯？野狼肉？")
sm.sendSay("#face0#这又老又难吃的肉，是给人吃的吗？")
sm.sendSay("#face0#啊！抱歉，我搞错了。是因为我叫你们自带食物，所以你们弄来了野狼肉。是你们吃的~？我理解错了。")
sm.sendSay("#face0#那么，这回你们去找些我们能吃的东西来吧？")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#知道了。给你们打只花花象可以吗？")
sm.setInnerOverrideSpeakerTemplateID(9400596) # Snowfield Archer
sm.sendSay("#face0#嗯，比野狼肉好多了。")
sm.setInnerOverrideSpeakerTemplateID(9400581) # Butler
sm.sendSay("#face0#... ")
sm.setInnerOverrideSpeakerTemplateID(9400582) # Cayne
sm.sendSay("#face0#... ")
sm.setInnerOverrideSpeakerTemplateID(9400580) # Alika
sm.sendSay("#face0#... ")
sm.setInnerOverrideSpeakerTemplateID(9400587) # Kan
sm.sendSay("#face0#Understood. What of Shrelephant meat? ")
sm.setInnerOverrideSpeakerTemplateID(9400597) # Gurnardson
sm.sendSay("#face0#Well, that'd be a sight better than Hellfang meat. ")
sm.sendDelay(1000)
sm.playSound("Sound/PL_MONAD.img/EP1/ACT2/close", 128)
sm.sendDelay(500)
sm.sendDelay(1000)
sm.lockInGameUI(False, True)
sm.warp(867201130)
