from net.swordie.ms.constants.questlineconstants import LionHeartQuestlineConstants


# Lionheart questline | First Tower.
sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)

# First ever time entering the portal
has_completed = sm.getQRValue(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID) == LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_KEY
if sm.hasQuestCompleted(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID):
    sm.warp(211060300, 2)


elif has_completed:
    sm.completeQuest(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID)
    sm.sendNext("You have done it! Please visit me in the fourth tower")
    sm.warp(211060300, 2)

elif not sm.hasQuest(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID):
    sm.sendNext("It has been some time since anyone was foolhardy enough to enter our castle. You are brave, but you must also be wise!")

    sm.setPlayerAsSpeaker()
    sm.sendNext("...W-who's there...?! Are you a g-ghost?")

    sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)
    sm.sendNext("Sorry for startling you. I am #b#p2161002##k, guardian of this castle. I passed on to the spirit realm long ago, but I remain trapped here.")

    sm.setPlayerAsSpeaker()
    sm.sendNext("Why are you stuck? Are you one of those 'avenge me so I can go free' type ghosts? That's kind of cliche, you know?")

    sm.setSpeakerID(LionHeartQuestlineConstants.LUDEN_NPC_ID)
    sm.sendNext("I- well, yes. Sort of. I will tell you more if you come to me, but you wll have to eliminate those #rRed Crockys#k on the Roof of the First Tower and break the magic ward there. I remember seeing an extraordinary Locksmith somewhere here. He may be able to help you gain access to the Roof of the First Tower.")

    sm.createQuestWithQRValue(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID, "0")
    sm.sendNext("To pass this door, you must first help Jenn with his brother, then you'll have to defeat all the Red Crockys again..!")


elif sm.hasQuest(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID) and sm.getQRValue(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID) == "0":
    sm.sendNext("To pass this door, you must first help Jenn with his brother, then you'll have to defeat all the Red Crockys again..!")


elif sm.hasQuest(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID) and sm.getQRValue(LionHeartQuestlineConstants.FIRST_SPELL_BREAKER_QUEST_ID) == "1":
    sm.sendNext("To pass this door, you'll have to defeat all the #rRed Crockys#k on the top of the First Tower.")


else:
    sm.warp(211060300, 2)
