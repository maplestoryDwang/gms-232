package net.swordie.ms.client.soulcollection;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.loaders.StringData;

/**
 * Created on 02/07/2021.
 *
 * @author Asura
 */
public class SoulCollectionModule {

    public static void addSoulToCollection(Char chr, Account account, BossSoulType type, Item item) {
        var entry = getSoulCollectionEntryByBossSoulType(account, type);

        // If User doesn't have entry yet. construct & add to account list
        if (entry == null) {
            entry = new SoulCollectionEntry(type, 0);
            account.getSoulCollectionEntries().add(entry);
        }

        var flag = entry.getFlag(); // Flag representing the collection Soul Collection Flags in the User's Soul Collection
        var collection = BossSoulCollectionFlag.getCollectionByFlag(flag, type.hasMagnificent()); // List of Soul Collection Flags (Swift, Clever)
        var curBossSoulCollectionFlag = ItemConstants.getBossSoulCollectionFlagByItemId(type, item.getItemId()); // Extracting SoulCollectionFlag out of the item used.


        // Not a soul or unsupported Soul
        if (curBossSoulCollectionFlag == null) {
            chr.chatMessage("This cannot be equipped.");
            return;
        }

        // User already has that flag
        if (collection.contains(curBossSoulCollectionFlag)) {
            chr.chatMessage(String.format("%s has already been equipped.", StringData.getItemStringById(item.getItemId())));
            return;
        }

        // Add to Account's Collection
        collection.add(curBossSoulCollectionFlag);
        var flagVal = BossSoulCollectionFlag.getFlagByCollection(collection);

        // Set Flag of the Entry Object
        entry.setFlag(flagVal);

        // Update to client
        chr.write(WvsContext.selectSoulCollectionResult(entry));

        if (entry.isComplete()) {
        }
    }

    public static int getSoulSkillLevelBySoulType(Char chr, BossSoulType type) {
        if (type == null) {
            return 1;
        }

        var acc = chr.getAccount();
        var entry = getSoulCollectionEntryByBossSoulType(acc, type);
        if (entry == null) {
            return 1;
        }

        return entry.isComplete() ? 2 : 1;
    }

    public static SoulCollectionEntry getSoulCollectionEntryByBossSoulType(Account account, BossSoulType type) {
        return account.getSoulCollectionEntries().stream().filter(entry -> entry.getBossSoul().equals(type)).findFirst().orElse(null);
    }
}
