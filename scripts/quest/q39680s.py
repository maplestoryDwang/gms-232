# [Temple of Time] A Quick Look Back [Adele]
# 39680
# No NPC

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 1:
    adele = 3001950
else:
    # Male Adele
    adele = 3001951
jerome = 3001952
boo = 3001960

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(adele)
sm.sendNext("#face0#(It seems so long ago that my adventures began. "
"I had been stranded in the Void for years beyond reckoning, and then... I heard Jerome's voice...)")
response = sm.sendAskYesNo("#face0#(What I would give to hear that voice again after my long travels... "
"It's possible by now he's returned to the hideout. Perhaps it's time I gave Brook a call?)")
if response:
    sm.sendNext("#face0#Hello, Brook. I'm fine, thank you. And you? Ah. "
    "I was wondering if there was any chance Jerome might be around... O-oh, you will--?")

    sm.setInnerOverrideSpeakerTemplateID(jerome)
    sm.sendNext("#face6#H-hey Adele! Err... you asked for me? What's up?")

    sm.setInnerOverrideSpeakerTemplateID(adele)
    sm.sendNext("#face2#I was thinking about the day we met.")

    sm.setInnerOverrideSpeakerTemplateID(jerome)
    sm.sendNext("#face6#Aw... Do we have to talk about something so... cringey?")

    sm.setInnerOverrideSpeakerTemplateID(adele)
    sm.sendNext("#face0#Is it an unpleasant memory for you...?")

    sm.setInnerOverrideSpeakerTemplateID(jerome)
    sm.sendNext("#face8#No, no, not at all! It's just... "
    "I think back on how immature I was back then, and I get embarrassed.")
    sm.sendNext("#face8#I'd done something or other to get the guards on my case that day. "
    "Then I made the wish, and you appeared like magic.")
    sm.sendNext("#face0#I saw you, and it was like the whole square disappeared. "
    "That's how I knew... That you were a legendary knight, I mean!")

    sm.setInnerOverrideSpeakerTemplateID(adele)
    sm.sendNext("#face0#And I thought you were some bratty kid. "
    "It's hard to believe that I'd one day be your knight.")

    sm.setInnerOverrideSpeakerTemplateID(jerome)
    sm.sendNext("#face0#Don't you think that's a little harsh? I mean, you're not wrong, but still...")

    sm.setInnerOverrideSpeakerTemplateID(adele)
    sm.sendNext("#face0#(The more I worked alongside him, "
    "the more I came to see why it was the Uprising followed Jerome.)")
    sm.sendNext("#face0#(From the very bottom of his heart, he wanted nothing more than what was best for Ristonia. "
    "He'll make a fine king someday.)")
    sm.sendNext("#face0#How is your royal education coming along?")

    sm.setInnerOverrideSpeakerTemplateID(jerome)
    sm.sendNext("#face0#Good! It's not easy, but I've got Boo to cheer me on.")

    sm.setInnerOverrideSpeakerTemplateID(boo)
    sm.sendNext("#face0#Boo, boo!")

    sm.setInnerOverrideSpeakerTemplateID(adele)
    sm.sendNext("#face0#Good old Boo.")

    sm.setInnerOverrideSpeakerTemplateID(jerome)
    sm.sendNext("#face0#I figure, since you saved my life, I owe it to you to make the most of it.")
    sm.sendNext("#face0#I've got to be the best king I can be. For Ristonia... and for you.")

    sm.setInnerOverrideSpeakerTemplateID(adele)
    sm.sendNext("#face0#I look forward to it.")

    sm.setInnerOverrideSpeakerTemplateID(jerome)
    sm.sendNext("#face2#You take care, okay? Don't be a stranger!")

    sm.setInnerOverrideSpeakerTemplateID(boo)
    sm.sendNext("#face0#Boo, boo!")

    sm.setInnerOverrideSpeakerTemplateID(adele)
    sm.sendNext("#face0#(Life has grown so complicated lately, "
    "but hearing Jerome's voice is a great comfort. I will always treasure the time we spent together.)")

    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.startQuest(recoveredMemory)
    sm.setQRValue(recoveredMemory, "1", False)