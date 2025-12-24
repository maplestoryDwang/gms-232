# [Temple of Time] Seeking Lost Memories [Illium]
# 34844
# No NPC

hideout = 940202000

gender = chr.getAvatarData().getAvatarLook().getGender()
if gender == 0:
    illium = 3001353
else:
    # Female Illium
    illium = 3001354

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(illium)
sm.sendNext("#face0#The Memory Keeper told me that I must go back to the beginning of my journey to retrieve lost memories...")
sm.sendNext("#face0#The beginning of my journey...I suppose everything began when I left Sanctuary.")
sm.sendNext("#face0#I wandered around Savage Terminal with my friends, found the Interdimensional Portal with the Novas' help, "
"and finally arrived in #bthis different dimension#k called Maple World.")
response = sm.sendAskYesNo("#face0#Should I go back to the hideout and chat with my friends? #b\r\n"
"(You'll be moved to the Hideout automatically upon acceptance.)")
if response:
    sm.startQuest(parentID)
    if sm.getFieldID() != hideout:
        sm.setReturnField()
        sm.warp(hideout)