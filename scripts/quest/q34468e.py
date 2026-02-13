# id 34468 ([Arcana] Reviving the Bramble Harp 2), field 940200216
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3003301) # Small Spirit
sm.sendNext("#face1#你收集到了爆炸尖叫啊！那，现在就在这棵树的反方向……")
sm.completeQuestNoCheck(parentID)
sm.lockInGameUI(True, False)
sm.removeAdditionalEffect()
sm.sendDelay(600)
sm.playExclSoundWithDownBGM("Mob.img/8644006/Die", 100)
sm.sendDelay(1500)
sm.sendNext("#face2#很好，树的方向已经改变，若是洒下星光，这次可真是……")
sm.sendDelay(1000)
sm.setInnerOverrideSpeakerTemplateID(3003309) # Tree Spirits
sm.sendNext("#face0#居，居然如此胡来！")
sm.sendSay("#face1#啊，因为刚刚的那声巨响，树精灵们……")
sm.setInnerOverrideSpeakerTemplateID(3003301) # Small Spirit
sm.sendSay("#face0#够了！")
sm.lockInGameUI(False, True)
