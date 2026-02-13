# id 35901 (Find Altar Key 2), field 910090302
sm.setSpeakerID(1013305) # Ancient Crate
sm.setParam(548)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
res = sm.sendAskAccept("#face0#这好像是古代的文字。要试着解读一下吗？")
sm.setSpeakerType(3)
sm.sendNext("#face2#虽然会花费一点时间……呵呵……不过还挺让人好奇的。")
sm.startQuest(parentID)
