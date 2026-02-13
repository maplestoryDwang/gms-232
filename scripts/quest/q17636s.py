# id 17636 ([Commerci Republic] Who's The Pirate King?), field 865000002
sm.setSpeakerID(9390262) # Leon Daniella
sm.setParam(2)
sm.sendNext("嗯？你竟然不知道 #r海盗王普赛依#k？")
sm.setParam(0)
sm.sendSay("哎，你不是忘记了我是从别的地方来的了吧。")
sm.setParam(2)
sm.sendSay("嗯。你来到这里时间不长，不知道也是正常的。如果你有兴趣的话要听我说说吗？")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390203) # Gilberto Daniella
sm.sendSay("凯梅尔兹不是以贸易为主而是以渔业为主的国家，这个我已经跟你说过了吧。")
sm.sendSay("是的，那个已经听说了。")
sm.setParam(2)
sm.sendSay("是的。从那时起至今凯梅尔兹沿岸一直受海盗骚扰。那些家伙小群小群地来抢掠。")
sm.setParam(4)
sm.sendSay("可是，凯梅尔兹正式开始做贸易的同时为了减小受海盗的迫害有组织性的利用了这一点。")
sm.sendSay("开始的时候还是有效果的。但是，海盗们也许也觉得再那样下去可不行，于是就以最厉害的海盗为中心团结起来，结果形成一个庞大的海盗团。")
sm.sendSay("那最厉害的海盗就是那叫普赛依的家伙吗？")
sm.setParam(2)
sm.sendSay("就是那样。结果回到了原点。")
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(9390202) # Leon Daniella
sm.sendSay("我说莱文，普赛依是谁")
sm.setInnerOverrideSpeakerTemplateID(9390203) # Gilberto Daniella
sm.sendSay("That's...more or less true.")
sm.completeQuestNoCheck(parentID)
sm.createQuestWithQRValue(18418, "B=33260")
