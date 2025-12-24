# [Temple of Time] A Quick Look Back [Hoyoung]
# 39574
# No NPC

recoveredMemory = 7081

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 0:
    hoyoung = 3001674
else:
    # Female Hoyoung
    hoyoung = 3001675
taotie = 3001651

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(hoyoung)
sm.sendNext("#face0#So I've gotta return to where I first started exploring...")
sm.sendNext("#face0#(I still remember the first time I left the Hermitage with Taotie, "
"thinking I might be able to do some good here and there as I tried to track down all those monsters.)")
sm.sendNext("#face0#Now that I think back on it, this whole journey started because I broke Taotie's seal.")
response = sm.sendAskYesNo("#face0#Okay, now I know how to get my lost memories back. "
"I just have to chat about old times with Taotie.")
if response:
    sm.sendNext("#face5#Taotie, we're in trouble! Come on out!")

    sm.setInnerOverrideSpeakerTemplateID(taotie)
    sm.sendNext("#face0##bWh-what is it?! Are we beset by foes?!")

    sm.setInnerOverrideSpeakerTemplateID(hoyoung)
    sm.sendNext("#face0#Actually, I just thought, y'know, maybe we could... Um... "
    "Talk about old times together? Reminisce a little?")

    sm.setInnerOverrideSpeakerTemplateID(taotie)
    sm.sendNext("#face0##bWhat?!")

    sm.setInnerOverrideSpeakerTemplateID(hoyoung)
    sm.sendNext("#face11#When I think back, I feel like that time when I broke your seal was the start of all my adventures. "
    "Who would've ever thought I'd be traveling in another dimension like this?")

    sm.setInnerOverrideSpeakerTemplateID(taotie)
    sm.sendNext("#face0##bUgh... Such sentimentality is unlike you. Have you fallen under a spell?")

    sm.setInnerOverrideSpeakerTemplateID(hoyoung)
    sm.sendNext("#face10#Don't'cha think it's good to just stop and reflect every now and then? "
    "If you're always runnin' forward, eyes straight ahead, you'll tucker yourself out AND miss all the scenery around you.")

    sm.setInnerOverrideSpeakerTemplateID(taotie)
    sm.sendNext("#face0##bYou have the serpent's own way with words.")
    sm.sendNext("#face0##bWhen I recall our first encounter, it strikes me how incredibly weak you were then. "
    "All you had was your big mouth, without any strength to back it up.")

    sm.setInnerOverrideSpeakerTemplateID(hoyoung)
    sm.sendNext("#face3#H-hey, there's such a thing as being TOO honest.")

    sm.setInnerOverrideSpeakerTemplateID(taotie)
    sm.sendNext("#face0##bBut you overcame your weakness, and the troubles you faced forced you to grow stronger. "
    "Now look at you: you're a halfway decent sage.")

    sm.setInnerOverrideSpeakerTemplateID(hoyoung)
    sm.sendNext("#face7#Just halfway?")

    sm.setInnerOverrideSpeakerTemplateID(taotie)
    sm.sendNext("#face0##bI might categorize you at the bottom rung of 'good' if you hunted down all the escaped fiends.")

    sm.setInnerOverrideSpeakerTemplateID(hoyoung)
    sm.sendNext("#face0#Now that's more like it! Gives me that much more motivation to catch 'em all!")
    sm.sendNext("#face0#(Taotie and I bickered back and forth, talking about everything that had happened since we set out on the road together. "
    "It gave me a nice, warm, fuzzy feeling, in the way that only traveling with a grumpy monster can.)")

    sm.startQuest(parentID)
    sm.completeQuest(parentID)
    sm.startQuest(recoveredMemory)
    sm.setQRValue(recoveredMemory, "1", False)