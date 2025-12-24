package net.swordie.ms.client.character.union;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.mockutil.MockUtil;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashSet;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UnionTest {

    private Account account;
    private Union union;

    @Before
    public void setup() {
        account = mock(Account.class);
        union = new Union();
        union.setPresets(3);
        union.setUnionBoards(new ArrayList<>());
        union.getUnionBoards().add(new UnionBoard(true));

        union.setAccount(account);
        when(account.getUnion()).thenReturn(union);
    }

    @Test
    public void getEligibleUnionChars_noChars_emptySet() {
        when(account.getCharacters()).thenReturn(new HashSet<>());

        var result = union.getEligibleUnionChars();
        Assert.assertEquals(new ArrayList<Char>(), result);
    }

    @Test
    public void getEligibleUnionChars_lowLevelChar_emptySet() {
        var set = new HashSet<Char>();
        set.add(createChar(1, 10, 112));

        when(account.getCharacters()).thenReturn(set);

        var result = union.getEligibleUnionChars();
        Assert.assertEquals(new ArrayList<Char>(), result);
    }

    @Test
    public void getEligibleUnionChars_not3rdjob_emptySet() {
        var set = new HashSet<Char>();
        set.add(createChar(1, 200, 110));

        when(account.getCharacters()).thenReturn(set);

        var result = union.getEligibleUnionChars();
        Assert.assertEquals(new ArrayList<>(), result);
    }

    @Test
    public void getEligibleUnionChars_validChar_returnsValidChar() {
        var set = new HashSet<Char>();
        set.add(createChar(1, 200, 112));

        when(account.getCharacters()).thenReturn(set);

        var result = union.getEligibleUnionChars();
        Assert.assertTrue(result.stream().anyMatch(c -> c.getId() == 1));
    }

    @Test
    public void getEligibleUnionChars_over40chars_expectMoreThan40Chars() {
        var set = new HashSet<Char>();
        var lowChar1 = createChar(150, 150, 112);
        var lowChar2 = createChar(200, 120, 3112);
        for (int i = 0; i < 50; i++) {
            set.add(createChar(i, 200, 112));
        }
        set.add(lowChar1);
        set.add(lowChar2);

        when(account.getCharacters()).thenReturn(set);

        union.getUnionBoards().get(0).getActiveMembers().add(lowChar1.createUnionMember());
        union.getUnionBoards().get(0).getActiveMembers().add(lowChar2.createUnionMember());

        var result = union.getEligibleUnionChars();

        Assert.assertEquals(52, result.size());
        Assert.assertTrue(result.stream().anyMatch(c -> c.getId() == lowChar1.getId()));
        Assert.assertTrue(result.stream().anyMatch(c -> c.getId() == lowChar2.getId()));
    }

    private static Char createChar(int id, int level, int job) {
        var chr = MockUtil.createChar();
        chr.setId(id);
        chr.getAvatarData().getCharacterStat().setLevel(level);
        chr.getAvatarData().getCharacterStat().setJob(job);
        return chr;
    }

}
