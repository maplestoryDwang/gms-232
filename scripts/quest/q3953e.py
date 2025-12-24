# Convince Muhamad
# 3953
# Muhamad (2100001)

muhamad = 2100001
lidium = 4011008

sm.setSpeakerID(muhamad)
resOne = sm.sendNext("If you're going to keep blabbing some nonsense about how Deo has turned into a monster, I'm not interested! "
        "...Huh? Hmm... isn't this Lidium? Looking at its color, this is high-quality Lidium...and it's in good condition..."
        "Hmm... you're giving this to me? Well... I can't say no to Lidium. Fine... what is it? #b\r\n\r\n"
        "#L0#I want to inform you that Deo is a monster.#l\r\n"
        "#L1#Have you heard that a group of merchants crossing through the desert were attacked by the monsters?#l")
if resOne == 1:
    resTwo = sm.sendNext("The merchants? ...They probably lacked protection. "
            "There aren't any particularly dangerous monsters in the Burning Road, but we should always remain cautious... "
            "You must be careful in the desert. #b\r\n\r\n"
            "#L0#This won't happen if we defeat Deo.#l\r\n"
            "#L1#This is all because of the Queen's negligence in maintaining the safety of the town.#l")
    if resTwo == 1:
        resThree = sm.sendNext("You're right! It's because of the Queen! "
            "Ever since her reign, the ever-wise Abdullah VIII has changed and Ariant is slowly perishing..."
            "like an oasis drying out! And it's all her fault! #b\r\n\r\n"
            "#L0#What is the guardian of deserts doing when we're under the Queen's tyranny?#l\r\n"
            "#L1#We must hurry up and form an army to escape from the Queen's oppression.#l")
        if resThree == 0:
            resFour = sm.sendNext("...I agree. Only if Deo had helped us a little... "
            "How could he be so heartless? #b\r\n\r\n"
            "#L0#Perhaps, Deo has already turned into a monster.#l\r\n"
            "#L1#He couldn't have done anything as a monster, right?#l")
            if resFour == 0:
                sm.sendNext("What are you talking about? Deo has turned into...a monster? "
                "But he's the guardian deity of Ariant... Well, Ariant isn't the same as it used to be. #b\r\n\r\n"
                "#L0#I know...and on top of that, Queen Areda is sucking the life out of the desert. "
                "Perhaps Deo's divine powers were lost and he gradually turned into a monster...#l")
                sm.completeQuest(parentID)
                sm.consumeItem(lidium)
                sm.sendSayOkay("You might be right. I can't believe Ariant has changed like this, "
                "but this could be directly related to Deo's transformation. "
                "Perhaps, it really is time for us to defeat Deo...")
            else:
                sm.sendSayOkay("No. Surely Deo still has his powers and still cares for Ariant deep inside...")
        else:
            sm.sendSayOkay("Yes, but we can't be too hasty. We need to wait until the time is right.")
    else:
        sm.sendSayOkay("And what would that achieve? Deo is the guardian of the desert, is he not?")
else:
    sm.sendSayOkay("Didn't I just say I'm not interested in hearing about Deo turning into a monster? Stop wasting my time!")