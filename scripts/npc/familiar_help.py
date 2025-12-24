# Familiar Help Button Script
sel = sm.sendNext("Hello? Yes? What is it that you'd like to discuss?\r\n"
                  "#b#L0# What's a Familiar?#l\r\n"
                  "#b#L1# Tell me about the Overview tab.#l\r\n"
                  "#b#L2# Tell me about the Setup tab.#l\r\n"
                  "#b#L3# Tell me about the Collection tab.#l\r\n"
                  "#b#L4# Tell me about the Badges tab.#l\r\n"
                  "#b#L5# Tell me about the Shop tab.#l\r\n"
                  "#b#L6# Close Help#l"
                  )
sm.setBoxChat()
if sel == 0:  # What's a Familiar?
    sm.sendSayOkay("#face0#When we say 'Familiars,' we're referring to the collection, application, and usage of monster data.")
    sm.sendSayOkay("#face0#And I, Roro, am here to help you, a Chosen One, gather and utilize that data!")
    sm.sendSayOkay("#face0#To get a Familiar, you need to use a Familiar Card, which you can get by hunting monsters or buying them in the Shop.")
elif sel == 1:  # Tell me about the Overview tab.
    sm.sendSayOkay("#face0#If you're curious about the Overview tab, that's a reasonable place to start.")
    sm.sendSayOkay("#face0#Besides the Overview tab, there are other tabs you can use to navigate to other menus.")
    sm.sendSayOkay("#face0#If you look toward the left in the Overview tab, you can see the Familiar you currently have set.")
    sm.sendSayOkay("#face0#Below that, you can see that Familiar's Summon Gauge.")
    sm.sendSayOkay("#face0#When the Summon Gauge reaches 0, you can no longer summon that Familiar.")
    sm.sendSayOkay("#face0#The Summon Gauge resets each day at midnight. You can also use the Shop to restore it sooner.")
    sm.sendSayOkay("#face0#Toward the right, you'll see your investigation progress, including which Familiars you've learned about and what stats they offer.")
elif sel == 2:  # Tell me about the Setup tab.
    sm.sendSayOkay("#face0#Sure, let's talk about the Setup tab.")
    sm.sendSayOkay("#face0#There are two ways to set Familiars. You can click directly on a Familiar from the list on the right, or you can drag and drop a Familiar from there into a slot on the left.")
    sm.sendSayOkay("#face0#Just like on the Overview tab, you can view information about collected Familiars on the right, including their potentials, equipped badge effects, etc.")

elif sel == 3:  # Tell me about the Collection tab.
    sm.resetParam()
    sel_2 = sm.sendNext("The Collection tab has three sub-tabs. Which one do you want to know about?\r\n"
                        "#b#L0# The Info sub-tab.#l\r\n"
                        "#b#L1# The Extraction sub-tab.#l\r\n"
                        "#b#L2# The Fusion sub-tab.#l")
    sm.setBoxChat()
    if sel_2 == 0:  # The Info sub-tab.
        sm.sendSayOkay("#face0#Very well. Let's discussion the Collection tab.")
        sm.sendSayOkay("#face0#The Info tab is the first of three sub-tabs in the Collection tab, located on the right-hand side of the window.")
        sm.sendSayOkay("#face0#Let's dive into the Info sub-tab, shall we?")
        sm.sendSayOkay("#face0#This is where you can look up detailed information on any Familiar that you have collected.")
        sm.sendSayOkay("#face0#You can also view each Familiar's potential from here as well.")
        sm.sendSayOkay("#face0#If you want to rename a Familiar, select it and click on the pencil button above the Familiar's portrait.")
        sm.sendSayOkay("#face0#To unleash the potentials of Familiars who haven't undergone the potentials-unleashing process, click the locked potential area toward the bottom left.")
        sm.sendSayOkay("#face0#Or, click the lock button toward the top right to prevent a Familiar from being extracted or fused. Handy, right?")
    elif sel_2 == 1:  # The Extraction sub-tab.
        sm.sendSayOkay("#face0#Let me explain how the Extraction function in the Collection tab works.")
        sm.sendSayOkay("#face0#From the Extraction sub-tab, you can extract data out of a Familiar in your Collection and turn it into Familiar Points.")
        sm.sendSayOkay("#face0#Familiar Points can be used in the Shop. They're quite valuable, so I suggest you extract them out of any Familiars you don't need.")
    elif sel_2 == 2:  # The Fusion sub-tab.
        sm.sendSayOkay("#face0#Ah, yes, let's discussion the Fusion function in the Collection tab.")
        sm.sendSayOkay("#face0#From the Fusion sub-tab, you can fuse other Familiars with the same name into a target Familiar to upgrade it.")
        sm.sendSayOkay("#face0#When you do that, the Familiars you used to perform the fusion will disappear, and the target Familiar will get rank-up points. Once a Familiar gets enough rank-up points, they can attempt to rank up.")
        sm.sendSayOkay("#face1#Please note that the rank-up function is still being worked on by my partner, so there's a #r#echance that the process may fail#n#k.")

elif sel == 4:  # Tell me about the Badges tab.
    sm.sendSayOkay("#face0#Let's talk about the Badges tab.")
    sm.sendSayOkay("#face0#The Badges tab has two sections. Equipped Badges show which badges you have equipped, and the Badge List contains a list of badges you can earn.")
    sm.sendSayOkay("#face0#Familiars we want you to research are automatically added to the Badge List. Once a badge has been completed, the system will automatically update.")
    sm.sendSayOkay("#face0#Let's discuss the Equipped Badges section in more detail.")
    sm.sendSayOkay("#face0#To equip a badge, simply drag and drop it from the list of badges below to the section above. Up to eight badges can be equipped at a time.")
    sm.sendSayOkay("#face0#The stats of your equipped badges will be displayed to the right. Some stats have a maximum cap, so it may not be efficient to equip badges in an attempt to only boost a specific stat.")
    sm.sendSayOkay("#face0#Let's talk more about the Badge List.")
    sm.sendSayOkay("#face0#Click on a badge to get information on the Familiar needed to earn that badge. You can also view the badge's effects here.")
    sm.sendSayOkay("#face0#Any information you obtain about a Familiar will automatically be saved, so use any Familiar cards you get right away.")
elif sel == 5:  # Tell me about the Shop tab.
    sm.sendSayOkay("#face0#I'll explain the Shop tab.")
    sm.sendSayOkay("#face0#At the Shop, you can use the Familiar Points you obtain from extracting Familiar to purchase a variety of items.")
    sm.sendSayOkay("#face1#But please note that you cannot exchange items in your inventory for points.")
