# id 35906 (A Legendary Forest), field 100051010
sm.setSpeakerType(3)
sm.setParam(548)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1013358) # Pathfinder
sm.sendNext("#face0#虽然村民们会感觉有点距离感……\r\n但他们很快就能看出你拥有一颗善良之心，并友善地对待你。")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(1013353) # Mascarpo
sm.sendSay("#face0#相信你一定能很快跟村民们打成一片。\r\n呵呵……我看人的眼光可从来不会有错。")
sm.sendSay("#face0#呵呵，介绍就到这里……\r\n那我就马上带你到村里去吧。")
sm.sendSay("#face0#好的，请跟我来。\r\n我来把你带到卡鲁帕村。\r\n\r\n#r ※ 自动移动到任务地图。#k")
sm.sendSay("#face0#I'm sure you'll all be the best of friends before you know it. I'm always right about these things at least 80% of the time.")
sm.setSpeakerType(4)
sm.setSpeakerID(1013306) # Mascarpo
res = sm.sendAskAccept("#face0#Well, what are we standing around here for? Are you ready to head to Karuppa Town?")
sm.setSpeakerType(3)
sm.sendNext("#face0#All righty, just follow me! We'll be in the ol' Karuppa Town in no time.\r\n\r\n #r * You'll be automatically moved to the quest map.#k")
sm.warp(910090306)
