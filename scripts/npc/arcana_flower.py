# id 3003337 (Whispering Flower), field 450005100
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(3003337) # Whispering Flower
if sm.getFieldID() == 450005100:
    sm.sendNext("If nothing is done, all will wither and die. Me, you, everyone.\r\n                                                            - Pessimistic Spirit")
elif sm.getFieldID() == 450005110:
    sm.sendNext("Will the song of the forest ever return? Someone's coming... \r\nHurry, hide!")
elif sm.getFieldID() == 450005120:
    sm.sendNext("Everything in this forest will one day wither and die...")
elif sm.getFieldID() == 450005121:
    sm.sendNext("Oh my. Every day more and more spirits grow senseless and wild!")
elif sm.getFieldID() == 450005130:
    sm.sendNext("#rThe Floral Flute thrives on moonlight. The most moonlight falls on the highest place in the forest.\r\n                                                            - Passing Spirit")
    sm.setQRValue(34459, "flower=1")