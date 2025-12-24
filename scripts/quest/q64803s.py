# [NLC] Street Sweeping
# 64803
# Lita Lawless (9201054)

lita = 9201054

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("Anyhow, thanks for coming.")

sm.setParam(57)
sm.sendNext("What can I do to help?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("What I need most right now is someone who can take care of the typical day-to-day things I'd normally do myself.")
sm.sendNext("For now, let's have you take ou the mushrooms that have been multiplying around the city. "
"That'll be a good way to show me what you can do.")

sm.setParam(57)
sm.sendNext("Mushrooms, huh?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(lita)
sm.sendNext("Yeah. Normally they're not a nuisance, but we've had a lot more people coming through lately, "
"and more visitors means more pollution. I don't know why, but that seems to make the mushrooms multiply faster.")
response = sm.sendAskYesNo("If you go out to the East side of the city, you'll see the place is full of them. "
"Can you take out 200 for me?")
if response:
    sm.startQuest(parentID)
    
    sm.sendNext("Thanks. It'd sure be great if you turn out to be legitimately competent.")