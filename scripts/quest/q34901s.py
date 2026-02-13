# id 34901 (Creeping Abyss), field 402000615
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001500) # Ark
sm.sendNext("#face0#（即使失去了记忆……身体，这双手还本能地知道战斗的感觉。我也许已经熟悉了这样的情况……）")
sm.setJob(15500)
sm.setSTR(4)
sm.setINT(4)
sm.setDEX(4)
sm.setLUK(4)
sm.setAP(4 + chr.getLevel() * 5)
sm.addSP(5)
sm.giveSkill(155001100, 1, 20) # Basic Charge Drive
sm.giveSkill(155001102, 1, 20) # Ominous Nightmare
sm.giveSkill(155001103, 1, 10) # Spell Bullets
sm.giveNewSecondary(1353600)
sm.completeQuestNoCheck(parentID)