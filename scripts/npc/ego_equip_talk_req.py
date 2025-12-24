from net.swordie.ms.constants import QuestConstants

# Zero Weapon UI  |  'Speak with Spirit' button

LAPIS = 2400009
LAZULI = 2400010
ALPHA = 2400005
BETA = 2400006

number = 0
q = chr.getQuestManager().getQuestById(QuestConstants.EGO_EQUIP_TALK_REQUEST)
if q is not None:
    number = q.getIntProperty("number")

sm.setBoxChat(False)  # Zero Boxchat

if number == 0:
    sm.setSpeakerID(BETA)
    sm.sendNext("#face4#I am Beta!")

    sm.setSpeakerID(ALPHA)
    sm.sendNext("#face5#I am Alpha")

    sm.setSpeakerID(LAZULI)
    sm.sendSayOkay("Yeah.. We know...")

elif number == 1:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("Gather the Goddess Teardrops and you can learn a new skill. I'm looking forward to seeing some exciting new violence")

elif number == 2:
    sm.setSpeakerID(BETA)
    sm.sendNext("#face6# What are you doing Alpha?")

    sm.setSpeakerID(ALPHA)
    sm.sendNext("#face0# STOP LOOKING!!")

elif number == 3:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("#face1#Y-yes? What? Shouldn't we be decapitating some pigs right about now?")

elif number == 4:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("If you want to enhance us, use the Weapon window. But armor and accessories are enhanced in the Equip tab. You try putting them in the Weapons window with me, and I'll cut them.")

elif number == 5:
    sm.setSpeakerID(LAPIS)
    sm.sendNext("We can be an even more efficient killing machine if you swap forms in battle. Just imagine the thrill of battle as blood swirls around us.")

elif number == 6:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("You ever get sick of priests asking for coins? Get a job, you lazy priests!")

    sm.setSpeakerID(ALPHA)
    sm.sendNext("#face11#That's the worst thing I've ever heard.")

    sm.setSpeakerID(LAZULI)
    sm.sendNext("#face2#I-I'm always going on about murdering people, and THAT'S the worst thing you've ever heard?")

    sm.setSpeakerID(ALPHA)
    sm.sendNext("#face10#Fighting bad guys is part of our job. But that? That was just rude.")

    sm.setSpeakerID(LAZULI)
    sm.sendNext("#face2#Nugh... But I... Blood and guts and... You moron!")

elif number == 7:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("The connection between a sword and her wielder is very... intimate. You have to pick a master who will treat you right, really gut some monsters with you. I think I've found my match.")

elif number == 8:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("You can raise a weapon's rank at Lv. 110, 120, 130, 140, 150, 170, and 180. But if you got a thing against strong, independent weapons like myself, you can always wait to do it later")

    sm.setSpeakerID(LAPIS)
    sm.sendNext("Something definitely seems different, no?")

    sm.setSpeakerID(LAZULI)
    sm.sendNext("I'd say you are the one who is fishing for guidance.")

    sm.setSpeakerID(BETA)
    sm.sendNext("...")

elif number == 9:
    sm.setSpeakerID(LAPIS)
    sm.sendNext("#face1#Lazuli and me are close. I'm her best friend! And she's, like, my fifth best friend.")

    sm.setSpeakerID(LAZULI)
    sm.sendNext("I'm not friends with soft-brained fools.")

    sm.setSpeakerID(LAPIS)
    sm.sendNext("#face0#See? I told you she's my friend!")

    sm.setSpeakerID(ALPHA)
    sm.sendNext("#face7#That's not what she meant...")

elif number == 10:
    sm.setSpeakerID(LAPIS)
    sm.sendNext("Want WP? Just clobber some boss monsters. Easy-peasy!")

elif number == 11:
    sm.setSpeakerID(LAPIS)
    if sm.sendAskYesNo("Have you heard of the legendary Zero?"):
        sm.sendSayOkay("Oh good, so I won't have to tell you all about him.")
    else:
        sm.sendNext("A level 275 Zero of unimaginable power..")
        sm.sendNext("So powerful that even I, Lapis, could barely touch him")
        sm.sendNext("Undergo as much training as this Zero.. and one day.. maybe we'll be as powerful as him.")
        sm.sendNext("Remember to always be inspired")
        sm.sendNext("And never give up!")

        sm.setSpeakerID(ALPHA)
        sm.sendNext("#face3#Sounds like a real warrior")

        sm.setSpeakerID(LAZULI)
        sm.sendNext("#face1#Oh a real warrior he is.")

        sm.setSpeakerID(BETA)
        sm.sendSayOkay("#face3#C'mon Alpha! \r\nLet's train some more!")

elif number == 12:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("#face1#I want to murder, not talk..")

elif number == 13:
    sm.setSpeakerID(LAPIS)
    sm.sendNext("#face0#A lot of people say Rhinne is one of the most powerful gods in the world\r\n"
                "But there are a few gods even more powerful.")
    sm.sendNext("These are the true saviors of the Maple world.")

elif number == 14:
    sm.setSpeakerID(LAPIS)
    sm.sendNext("I am a sword of the type 'Heavy Sword', but I really wish I could be a Heavy Swordie")

    sm.setSpeakerID(LAZULI)
    sm.sendNext("..And I really wish I could be a Long Swordie.. But we can't all get what we want.")

    sm.setSpeakerID(LAPIS)
    sm.sendNext("Maybe in a future update..")

elif number == 15:
    sm.setSpeakerID(LAPIS)
    sm.sendNext("You know that we can still upgrade even after Type 7, right?\r\n"
                "All we need is some extra materials!")

elif number == 16:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("If Rhinne could see the progress we made!\r\nShe'd be so proud of us")

elif number == 17:
    sm.setSpeakerID(BETA)
    sm.sendNext("#face10#Will has become a lot stronger ever since we fought him..")

    sm.setSpeakerID(LAPIS)
    sm.sendNext("We can definitely defeat him, we just have to train harder!")

    sm.setSpeakerID(BETA)
    sm.sendNext("#face3#You're right, Lapis!\r\nLet's train extra hard today.")

elif number == 18:
    sm.setSpeakerID(LAZULI)
    sm.sendNext("#face0#We should really be murdering.. \r\nI'm starting to lose the taste of fresh blood.")

elif number == 19:
    sm.setSpeakerID(LAPIS)
    sm.sendNext("Hey, I feel you have grown a lot. Remember to upgrade us whenever you can!")
