# [NLC] Traces of the Antellion
# 64818
# Elpam Gorlab (9201055)

elpam = 9201055

nlcCoin = 4310277
soilSample = 4036628

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(elpam)
if sm.canHold(nlcCoin):
    sm.sendNext("#face0#As I thought. This confirms that the Antellion's energy is a bit more concentrated than in previous samples.")
    sm.sendNext("#face0#It probably builds up over time through predation on other corrupted creatures. "
    "What's more, it seems that when the trace mineral accumulates in great enough quantities, it forms an ore called Lianium.")

    sm.setParam(57)
    sm.sendNext("Then, does the Lianium eventually turn into Antellion?")

    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(elpam)
    sm.sendNext("#face0#Well... I think the specific transformation you described is highly unlikely, "
    "but there should be SOME relation between the two, certainly.")
    sm.sendNext("#face0#However, I believe further research may prove difficult until I can get my hands on some #bhigh-grade Lianium#k.")
    sm.sendNext("#face0#Thank you so much for your continued assistance.")

    sm.giveExp(5457600)
    sm.giveItem(nlcCoin)
    sm.completeQuest(parentID)
    sm.consumeItem(soilSample, 50)
    sm.chatScript("You can now enter the Excavated Jungle!")
else:
    sm.sendSayOkay("#face0#Can you make some space in your Etc. inventory? I'd like to give you something for helping with my research.")