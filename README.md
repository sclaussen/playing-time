This algorithm is intended to be used to provide equal playing time
for youth sports.  It takes a list of player names and the number of
segments a game is broken into and then generates an equitable playing
time matrix for the players spread out over the playing segments.

For example, assume you have 7 total players for a game and 8
opportunities in the game for wholesale substitutions and the youth
sports league requires equal playing time:

```
$ node index.js "Anthony Caden Andersen Roy Eddie Naoki Declan Max" 4
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
```

Defense: Anthony wing, Eddie forward, or vice versa



                  1-Guard    2-Guard      3-Forward   4-Forward   5-Center
    Game 1 Q1 A:  Naoki(W)   Anthony(W)   Caden(F)    Roy(P)      Andersen(F)
    Game 1 Q2 A:  Max(W)     Anthony(W)   Caden(P)    Eddie(F)    Declan(F)
    Game 1 Q3 A:  Max(W)     Eddie(W)     Roy(P)      Declan(F)   Andersen(F)
    Game 1 Q4 A:  Naoki(W)   Anthony(W)   Caden(F)    Roy(P)      Eddie(F)
    Game 1 Q4 B:  Naoki(W)   Eddie(W)     Anthony(F)  Roy(P)      Andersen(F)



                  1-Guard    2-Guard      3-Forward   4-Forward   5-Center
    Game 2 Q1 A:  Naoki(W)   Anthony(W)   Roy(P)      Declan(F)   Andersen(F)
    Game 2 Q2 A:  Max(W)     Anthony(W)   Caden(P)    Declan(F)   Andersen(F)
    Game 2 Q3 A:  Max(W)     Caden(F)     Roy(P)      Naoki(W)    Declan(F)
    Game 2 Q4 A:  Naoki(W)   Anthony(W)   Caden(F)    Roy(P)      Andersen(F)
    Game 2 Q4 B:  Naoki(W)   Anthony(W)   Roy(P)      Max(F)      Andersen(F)


  Pregame
  - Sportsmanship
  - Masks
  - Inbound defense (Andersen on ball down low)
  - Inbound play (DRAW)
  - #2 guard always throwing the ball in
  - Half court break (DRAW)
  - #3/#4 position & pick & roll (DRAW)
  - Anthony play left (of Roy) wing
  - Box out
  - Red

  Half Time
  - Full court press O/D
