package net.swordie.ms.client.blacklist;

import net.swordie.ms.client.Account;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public class BlackListModule {

    public static List<BlackListEntry> getEntriesByTab(Account account, int tab) {
        if (tab == 0) {
            return getIndividualBlackList(account);
        } else if (tab == 1) {
            return getGuildBlackList(account);
        }
        return new ArrayList<>();
    }

    public static List<BlackListEntry> getGuildBlackList(Account account) {
        return account.getBlackListEntries().stream().filter(BlackListEntry::isGuildBlackListEntry).collect(Collectors.toList());
    }

    public static List<BlackListEntry> getIndividualBlackList(Account account) {
        return account.getBlackListEntries().stream().filter(BlackListEntry::isIndividualBlackListEntry).collect(Collectors.toList());
    }

    public static BlackListEntry getByTargetName(Account account, String targetName) {
        return account.getBlackListEntries().stream().filter(e -> e.getTargetName().equalsIgnoreCase(targetName)).findFirst().orElse(null);
    }

    public static BlackListEntry getByNickName(Account account, String nickName) {
        return account.getBlackListEntries().stream().filter(e -> e.getNickName().equalsIgnoreCase(nickName)).findFirst().orElse(null);
    }

    public static boolean containsChrId(Account account, int chrId) {
        return account.getBlackListEntries().stream().anyMatch(e -> e.getChrId() == chrId);
    }

    public static boolean containsNickName(Account account, String nickName) {
        return account.getBlackListEntries().stream().anyMatch(e -> e.getNickName().equalsIgnoreCase(nickName));
    }

    public static boolean containsEntry(Account account, BlackListEntry entry) {
        return account.getBlackListEntries().contains(entry);
    }

    public static void add(Account account, BlackListEntry entry) {
        account.addBlackListEntry(entry);
    }

    public static void remove(Account account, BlackListEntry entry) {
        account.removeBlackListEntry(entry);
    }
}
