# id 22726 (Codebreaker Jay 1), field 331001000
sm.setSpeakerType(3)
sm.setParam(37)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendNext("#face1#凯内西斯，说不定这就是针对你的陷阱。也许这件事你不管会比较好。")
sm.setInnerOverrideSpeakerTemplateID(1531000) # Kinesis
sm.sendSay("但如果我们的猜测是对的，那就表示有坏人持续性地在城市里放出怪物啊？")
sm.setInnerOverrideSpeakerTemplateID(1531001) # Jay
sm.sendSay("没错，这也只是猜测而已，不过你想怎么办？")
res = sm.sendNext("信号正指向学校，要去吗？\r\n#b#L1#当然是去学校了。#l\r\n#b#L2#我再考虑看看。#l")
