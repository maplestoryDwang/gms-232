# Silver Mane
# 6006
# Kenta (2060005)

blue_dragon_turtle_etc = 4000262  # Cracked Shell
green_hobi_etc = 4000261  # Pin Hov's Charms
silver_mane = 80001305

sm.setSpeakerID(2060005)

sm.sendNext(
    "You've gathered all the materials. With them, I can upgrade that Hog into a silver Mane!")
sm.sendNext("It is done. Your hog is now #bSilver Mane#k.")
sm.sendSayOkay("I'm glad you love Monster Riding, but your Silver Mane won't be able to run well if you don't take care of its health. Care for it well, okay?")
sm.consumeItem(4000262, 500)
sm.consumeItem(4000261, 500)
sm.deductMesos(50000000)
sm.giveSkill(silver_mane)
sm.completeQuest(6006)