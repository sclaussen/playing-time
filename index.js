var _ = require('lodash');



//     players: [
//         {
//             name: player1
//             segmentStatus: [ 1: in, 2: out, ... ]
//             segmentsIn: 5
//         }
//         {
//             ...
//         }
//         ...
//     ]
//
//
//     segments: [
//         {
//             name: 1
//             in: [ player1, player3, ... ]
//             out: [ player2, ... ]
//         }
//         {
//             ....
//         }
//         ...
//     ]
var players = [];
var segments = [];



// Tests
// node index.js "Caden Roy Bryant Anthony Naoki Koki Declan Eddie Andersen" 4
// node index.js "P01 P02 P03 P04 P05" 4
// node index.js "P01 P02 P03 P04 P05" 8
// node index.js "P01 P02 P03 P04 P05 P06" 4
// node index.js "P01 P02 P03 P04 P05 P06" 8
// node index.js "P01 P02 P03 P04 P05 P06 P07" 4
// node index.js "P01 P02 P03 P04 P05 P06 P07" 8
// node index.js "P01 P02 P03 P04 P05 P06 P07 P08" 4
// node index.js "P01 P02 P03 P04 P05 P06 P07 P08" 8
// node index.js "P01 P02 P03 P04 P05 P06 P07 P08 P09" 4
// node index.js "P01 P02 P03 P04 P05 P06 P07 P08 P09" 8
// node index.js "P01 P02 P03 P04 P05 P06 P07 P08 P09 P10" 4
// node index.js "P01 P02 P03 P04 P05 P06 P07 P08 P09 P10" 8
// node index.js "Caden Jordan Landon Kai Evan" 8
// node index.js "Caden Jordan Landon Kai Evan Hayato" 8
// node index.js "Caden Jordan Landon Kai Evan Hayato Leandro" 8
// node index.js "Caden Jordan Landon Kai Evan Hayato Leandro Hayden" 8
// node index.js "Caden Jordan Landon Kai Evan Hayato Leandro Hayden Luke" 8
// node index.js "Caden Jordan Landon Kai Evan Hayato Leandro Hayden Luke P11" 8
// node index.js "Caden Jordan Landon Kai Evan Hayato Leandro Hayden Luke P11 P12" 8
main(process.argv);


function main(args) {
    let playerNames = [];
    for (let playerName of args[2].split(' ')) {
        playerNames.push(playerName);
    }

    playingTime(playerNames, parseInt(args[3]));
}


function playingTime(playerNames, totalSegments) {

    initializePlayers(playerNames);
    initializeSegments(totalSegments);

    for (let segment of segments) {
        processSegment(segment);
    }

    printBySegment();
    console.log();
    printPlayerSegmentMatrix();
}


function initializePlayers(playerNames) {
    for (let playerName of playerNames) {
        players.push({
            name: playerName,
            segmentStatus: [],
            segmentsIn: 0
        });
    }

    // players = _.orderBy(players, [ 'name' ], [ 'asc' ]);
}


function initializeSegments(totalSegments) {
    for (let i = 0; i < totalSegments; i++) {
        let segmentNumber = i + 1;
        segments.push({
            name: segmentNumber.toString(),
            in: [],
            out: []
        });
    }
}


function processSegment(segment) {

    let playerNumber = 1;
    for (let player of _.orderBy(players, [ 'segmentsIn' ], [ 'asc' ])) {

        // First 5 players in the ordered list play, others are out
        if (playerNumber <= 5) {

            // Update player's "segmentStatus" array
            let status = {};
            status[segment.name] = 'in';
            player.segmentStatus.push(status);

            // Update player's "segmentsIn" count
            player.segmentsIn = player.segmentsIn + 1;

            // Update segment's "in" array
            segment.in.push(player.name);

        } else {

            // Update player's "segmentStatus" array
            let status = {};
            status[segment.name] = 'out';
            player.segmentStatus.push(status);

            // Update segment's "out" array
            segment.out.push(player.name);
        }

        playerNumber++;
    }
}


function printBySegment() {
    console.log()
    for (let segment of segments) {
        process.stdout.write('  ' + segment.name + ': ');
        for (let player of segment.in) {
            process.stdout.write(player + ' ');
        }

        if (segment.out.length > 0) {
            process.stdout.write('(Out:');
            for (let player of segment.out) {
                process.stdout.write(' ' + player);
            }
            process.stdout.write(')');
        }

        console.log();
    }
}


function printPlayerSegmentMatrix() {
    const maxNameLength = 10;
    const horizontalWhitespace = 1;

    // Header
    process.stdout.write('  ' + ' '.padEnd(maxNameLength + 4));
    for (let segment of segments) {
        process.stdout.write(segment.name + ' '.padEnd(horizontalWhitespace));
    }
    console.log();

    // Players
    // for (let player of _.orderBy(players, [ 'name' ], [ 'asc' ])) {
    for (let player of players) {
        process.stdout.write('  ' + player.name.substring(0, maxNameLength + 4).padEnd(maxNameLength + 4))
        for (let status of player.segmentStatus) {
            if (_.values(status)[0] === 'in') {
                process.stdout.write('X' + ' '.padEnd(horizontalWhitespace));
            } else {
                process.stdout.write(' ' + ' '.padEnd(horizontalWhitespace));
            }
        }

        process.stdout.write(' '.padEnd(horizontalWhitespace) + player.segmentsIn);

        console.log();
    }
}
