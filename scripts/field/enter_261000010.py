# Zenumist Society
# 261000010
# User enter script
# Outputs help text for [Magatia's Secret] Zenumist Cape.

zenumist = 3302

bottle = 4031705
treeBranch = 4031703

if sm.hasQuest(zenumist):
    sm.progressMessageFont(3, 18, 8, 0, "Take the strange-looking water and drop it on the blue alchemy pillar to make something.")

    if sm.hasItem(bottle):
        sm.chat("The water reacts with the blue alchemy pillar as you enter the room.")
        sm.consumeItem(bottle)
        sm.dropItem(treeBranch, -119, -111)