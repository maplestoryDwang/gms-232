# id 30075 (Move to the Castle Rear Entrance), field 106030000
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(1302007) # Head Security Officer
res = sm.sendAskYesNo("我可以送你到城堡后门入口。\r\n要立即移动吗？\r\n\r\n#b（接受时，将移至城堡后门入口。）")
sm.warp(106030302)
