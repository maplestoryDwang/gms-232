# [Riena Strait] The Heart of a Witch

frostWitchBarbara = 1510008
noraTheExplorer = 1510007

sm.setSpeakerID(frostWitchBarbara)
sm.sendNext("怎么，你还有话要说吗？")

sm.setSpeakerID(noraTheExplorer)
sm.sendNext("老奶奶，我有件事想问问您。")

sm.setSpeakerID(frostWitchBarbara)
sm.sendNext("你想问什么？想问问我这老婆子什么时候死吗？要是还想说些没用的废话，就给我闭嘴。")

sm.setSpeakerID(noraTheExplorer)
sm.sendNext("不是的……这个地区的企鹅族、阿拉斯加犬族和海象族全都对您怀有疑心，会不会是因为您的魔法，使得冰川融化，海平面上升的呢？")

sm.setSpeakerID(frostWitchBarbara)
sm.sendNext("魔法？那是什么东西？是能煮着吃的吗？")

sm.setPlayerAsSpeaker()
sm.sendNext("现在甚至还有传闻说，您把孩子们当做试验材料，正在制作某种东西。")

sm.setSpeakerID(frostWitchBarbara)
sm.sendNext("谁再那么胡说八道，看我不把他嘴缝起来！说我拿孩子们来做什么？我拿这些温顺可爱的小家伙来做试验材料？")

sm.sendNext("它们都是些因为冰川融化，而失去家园，失去父母的孩子。要是没人去照顾一下，还不知道能不能活下去唉！就那样可怜巴巴地在大海上漂浮，是我一个个捞起来抚养的。")

sm.setSpeakerID(noraTheExplorer)
sm.sendNext("您在抚养那些孩子们？")

sm.setSpeakerID(frostWitchBarbara)
sm.sendNext("我也就暂时照顾他们一段时间……")

sm.sendNext("自古以来，各种动物就该在同族群中成长。我把它们带回家后，为它们治疗伤口，等它们体力恢复得差不多了，就包在襁褓里，晚上偷偷放在村庄前面。")

sm.setPlayerAsSpeaker()
sm.sendNext("可是，你没必要冒着被冤枉的危险这样做啊……")

sm.setSpeakerID(frostWitchBarbara)
sm.sendNext("行了，你这家伙废话真多！有这力气嚼舌头，不如帮我做点事。")
sm.startQuest(parentID)
sm.completeQuest(parentID)
sm.dispose()