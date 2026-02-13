# Start of Lesson 1 - Ereve History
scriptInfo = sm.getNpcScriptInfo()

KINU = 1102006
HAWKEYE = 1101007

sm.setSpeakerID(KINU)

sm.removeEscapeButton()

sm.sendNext("首先，我来介绍一下圣地。圣地是女皇统治的蕴含着魔法力量的岛，一直漂浮在空中。根据需要，我们现在暂时停留在这里。本来应该在冒险岛世界来回巡视，就像船一样。")

sm.sendNext("现在的情况不是很好。我们现在停留在这里，注视着黑魔法师的一举一动，并积极培养与之对抗的力量。")

sm.sendNext("嗯，此外……冒险骑士团分为五个组织，分别可以使用光、火、风、闪电、黑暗精灵的力量。由五位骑士团长率领着冒险骑士团……？\r\n嗯？胡克，你干嘛又到我的课堂上来？")

sm.setInnerOverrideSpeakerTemplateID(HAWKEYE)
sm.sendNext("我是想看看新骑士团员的教育进行得怎么样。说不定新加入的人，是我闪电骑士团长胡克的崇拜者呢。")

sm.setInnerOverrideSpeakerTemplateID(KINU)
sm.sendNext("胡克，这个样子让我感觉很为难。")

sm.setInnerOverrideSpeakerTemplateID(HAWKEYE)
sm.sendSay("奇努，你好像应该先把我介绍给新骑士团员吧？先打个招呼吧？")

sm.setInnerOverrideSpeakerTemplateID(KINU)
sm.sendSay("胡克，打完招呼你就得走哦。#h0#，这位是闪电骑士团长胡克。虽然我觉得没必要非得认识他，不过你还是先跟他打个招呼吧。")

sm.startQuest(parentID)