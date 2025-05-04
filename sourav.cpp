// ❓ Problem Statement:
// Given a number n, generate all binary strings of length n such that no two 1s are adjacent.

// 🧪 Example:
// Input:

// txt
// Copy
// Edit
// n = 3
// Output (any order):

// txt
// Copy
// Edit
// "000"
// "001"
// "010"
// "100"
// "101"
// Explanation:
// Invalid strings like "110" and "011" are excluded because they have consecutive 1s.

public
class CreateSubsets {
 public
  static void main(String[] args) {
    int n = 3;

    List<String> list = new ArrayList();

    helper(n, "", list);

    System.out.println(list);
  }

 public
  static void helper(int n, String str, List<String> list) {
    if (str.length() == n) {
      list.add(str);

      return;
    }

    if (str.length() > 0 && str.charAt(str.length() - 1) == '1') {
      helper(n, str + "0", list);

    } else {
      helper(n, str + "1", list);

      helper(n, str + "0", list);
    }
  }
}
