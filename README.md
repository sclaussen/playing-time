This algorithm is intended to be used to provide equal playing time
for youth sports.  It takes a list of player names and the number of
segments a game is broken into and then generates an equitable playing
time matrix for the players spread out over the playing segments.

For example, assume you have 7 total players for a game and 8
opportunities in the game for wholesale substitutions and the youth
sports league requires equal playing time:

```
$ node index.js "Caden Roy Bryant Koki Naoki Eddie Declan Anthony Andersen" 4
```

```
$ node index.js "Caden Jordan Landon Kai Evan Hayato Leandro" 8
1: Caden Evan Hayato Jordan Kai (Out: Landon Leandro)
2: Landon Leandro Caden Evan Hayato (Out: Jordan Kai)
3: Jordan Kai Landon Leandro Caden (Out: Evan Hayato)
4: Evan Hayato Jordan Kai Landon (Out: Leandro Caden)
5: Leandro Caden Evan Hayato Jordan (Out: Kai Landon)
6: Kai Landon Leandro Caden Evan (Out: Hayato Jordan)
7: Hayato Jordan Kai Landon Leandro (Out: Caden Evan)
8: Caden Evan Hayato Jordan Kai (Out: Landon Leandro)

          1 2 3 4 5 6 7 8
Caden     X X X   X X   X  6
Evan      X X   X X X   X  6
Hayato    X X   X X   X X  6
Jordan    X   X X X   X X  6
Kai       X   X X   X X X  6
Landon      X X X   X X    5
Leandro     X X   X X X    5
```
