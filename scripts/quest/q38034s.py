ATHENA = 1012100

sm.setSpeakerID(ATHENA)
sm.sendNext("年幼的精灵赫丽娜……这个嘛。据我所知，没有其他精灵和我同名。我确实是为了躲避黑魔法师的攻击，从神秘岛来到了金银岛。")

sm.setPlayerAsSpeaker()
sm.sendSay("怎么会这样？赫丽娜明明是个年纪很小的精灵。才过了这么短的时间，怎么可能长这么大了……")

sm.setSpeakerID(ATHENA)
sm.sendSay("如果你是说精灵们受到的诅咒，我很幸运，没有受到诅咒。对于精灵来说，#r几百年时间#k也足够长大了。")

sm.setPlayerAsSpeaker()
sm.sendSay("精灵们受到的诅咒？几百年？不知道你在说些什么。在我和双弩精灵他们一起去阻止黑魔法师的那一天，我听说你坐着避难船，到金银岛去了。")

sm.setSpeakerID(ATHENA)
sm.sendSay("你难道……你也受到了黑魔法师的诅咒吗？如果你刚刚醒来……那请仔细听好。从封印黑魔法师的那一天开始，已经过去了几百年的岁月。现在的这个世界，是#r#e距离你记忆中的那一天已经过了好几百年了#k#n。明白我的意思了吗？")

sm.startQuest(parentID)
