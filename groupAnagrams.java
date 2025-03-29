class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
        Map<String, List<String>> output= new HashMap<>();

        for(String str : strs) {
            String key = createKeyByBucket(str);
            if(!output.containsKey(key)) {
                output.put(key, new ArrayList<>());
            }
            output.get(key).add(str);
        }

        return new ArrayList<>(output.values());

    }

  //slower
    public static String createKeyBySort(String inputString) {
        char[] charArray = inputString.toCharArray();
        Arrays.sort(charArray);
        return new String(charArray);
    }

  //faster
    public static String createKeyByBucket(String inputString) {
        int arr[] = new int[26];
        
        for(int i = 0; i <inputString.length(); i++ ){
            int index = (int) inputString.charAt(i) - 97;
            arr[index] =arr[index]+1;
        }

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < arr.length; i++ ){
            sb.append(arr[i]);
            sb.append(",");
        }
        sb.deleteCharAt(sb.length()-1);
        return sb.toString();
    }
}
