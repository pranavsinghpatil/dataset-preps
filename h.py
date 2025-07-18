def mergeAlternately( word1: str, word2: str) -> str:
    word1 = word1
    word2 = word2
    r = len(word1)  + len(word2)
    t = None
    f = "one"
    for i in range(3):
        t = word1[i] + word2[i]
        f = f + t
    f = f[3:]

    return f

print(mergeAlternately(word1="abc", word2="pqr"))