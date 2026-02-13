# id 34820 (One Look Back), field 940202040
sm.setSpeakerType(3)
sm.setParam(36)
sm.setColor(1)
sm.setInnerOverrideSpeakerTemplateID(3001326) # Hoodlum
sm.sendNext("#face0#呃啊，那个白毛，相当厉害啊！")
sm.setParam(37)
sm.sendSay("#face0#你们到底是什么人！？")
sm.setInnerOverrideSpeakerTemplateID(3001311) # Sinaria
sm.sendSay("#face1#我们是谁你不需要知道！")
sm.setInnerOverrideSpeakerTemplateID(3001308) # Carnelian
sm.sendSay("#face2#还有，我们……不是高等翼人！")
sm.setInnerOverrideSpeakerTemplateID(3001353) # Illium
sm.sendSay("#face4#有关‘异次元’你都知道些什么，快说！")
sm.setInnerOverrideSpeakerTemplateID(3001326) # Hoodlum
sm.sendSay("#face0#‘异次元’？")
sm.sendSay("#face0#这是什么，吃的吗？")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face0#如果不想再被我朋友教训，就照实说吧，各位大叔！")
sm.setInnerOverrideSpeakerTemplateID(3001326) # Hoodlum
sm.sendSay("#face0#我们真不知道！是真的！")
sm.sendSay("#face0#说不定诺巴那些家伙知道！")
sm.sendSay("#face0#嗯！去万神殿就能见到诺巴那些家伙了！")
sm.setInnerOverrideSpeakerTemplateID(3001353) # Illium
sm.sendSay("#face4#诺巴……？我在格兰蒂斯历史书上看到过。难道你说的是龙族吗？")
sm.setInnerOverrideSpeakerTemplateID(3001326) # Hoodlum
sm.sendSay("#face0#是啊！我不知道是不是我们次元的！真的！")
sm.setInnerOverrideSpeakerTemplateID(3001353) # Illium
sm.sendSay("#face0#看来只能去万神殿那边了。走吧。")
sm.setInnerOverrideSpeakerTemplateID(3001310) # Morian
sm.sendSay("#face0#各位大叔……有什么吃的吗？？")
sm.setInnerOverrideSpeakerTemplateID(3001311) # Sinaria
sm.sendSay("#face3#这个蠢货……")
sm.setSpeakerType(4)
sm.setSpeakerID(3001343) # Hoodlum
sm.setInnerOverrideSpeakerTemplateID(3001300) # Ex
res = sm.sendAskAccept("#face0#马上带你前往万神殿。")
sm.startQuest(parentID)
sm.warp(402000112)
