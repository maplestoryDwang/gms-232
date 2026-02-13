# id 17668 ([Commerci Republic] Twice Cooked), field 865030300
sm.setSpeakerID(9390237) # Claire Tremier
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendNext("特来敏小姐你原来在这里啊。你没事吗？没有受伤吗？")
sm.setParam(0)
sm.sendSay("是的，我没事。你们好像也没事呢。")
sm.setParam(4)
sm.sendSay("是的，托你的福我们也没事。")
sm.setParam(0)
sm.sendSay("西温的部下们怎么样了？")
sm.setParam(2)
sm.sendSay("他们你就不用担心了。只是…… 可惜最后西温还是被杀了。")
sm.setParam(0)
sm.sendSay("怎么会这样……")
sm.setParam(4)
sm.sendSay("不管怎样大家都没事真是万幸。")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(18418, "B=33300")
