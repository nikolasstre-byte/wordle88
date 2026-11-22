let raw_input: string;
let guess: string;
//  3. Function to draw the 5x6 grid on the screen
function draw_board() {
    let x: number;
    let y: number;
    let guess_word: number;
    let letter: string;
    let box_color: number;
    let bg = image.create(160, 120)
    bg.fill(15)
    //  Black background
    let box_size = 16
    let gap = 2
    //  Center the 5x6 grid on the 160x120 screen
    let start_x = Math.idiv(160 - (5 * box_size + 4 * gap), 2)
    let start_y = 6
    for (let row = 0; row < max_guesses; row++) {
        for (let col = 0; col < 5; col++) {
            x = start_x + col * (box_size + gap)
            y = start_y + row * (box_size + gap)
            //  If this row has already been guessed
            if (row < guesses.length) {
                guess_word = guesses[row]
                letter = "A"
                //  Check color logic (Green -> Yellow -> Grey)
                box_color = COLOR_GREY
                if (letter == secret[col]) {
                    box_color = COLOR_GREEN
                } else if (secret.indexOf(letter) != -1) {
                    box_color = COLOR_YELLOW
                }
                
                //  Draw filled colored tile and white letter
                bg.fillRect(x, y, box_size, box_size, box_color)
                bg.print(letter, x + 5, y + 4, 1)
            } else {
                //  Draw empty outline box for future guesses
                bg.drawRect(x, y, box_size, box_size, COLOR_BORDER)
            }
            
        }
    }
    scene.setBackgroundImage(bg)
}

let start_y = 0
let start_x = 0
let gap = 0
let box_size = 0
let bg : Image = null
let guesses : number[] = []
let COLOR_BORDER = 0
let COLOR_GREY = 0
let COLOR_YELLOW = 0
let COLOR_GREEN = 0
let max_guesses = 0
let secret = ""
let words = ["APPLE", "BRAVE", "CRANE", "DREAM", "EAGLE", "FLAME", "GRAPE", "HOUSE", "INPUT", "JOKER", "KNIFE", "LEMON", "MOUSE", "NIGHT", "OCEAN", "PIANO", "QUEEN", "ROBOT", "SNAKE", "TRAIN", "UNDER", "VOICE", "WATER", "YOUTH", "ZEBRA"]
//  2. Pick a random secret word
secret = words[randint(0, words.length - 1)]
max_guesses = 6
//  MakeCode Arcade Color Palette IDs:
//  7 = Green, 5 = Yellow, 11 = Dark Grey, 1 = White, 15 = Black
COLOR_GREEN = 7
COLOR_YELLOW = 5
COLOR_GREY = 11
COLOR_BORDER = 13
//  4. Start the game loop
draw_board()
pause(500)
while (guesses.length < max_guesses) {
    //  Prompt player using MakeCode's built-in on-screen keyboard
    raw_input = game.askForString("Enter 5-letter word:", 5)
    guess = raw_input.toUpperCase()
    //  Validate length
    if (guess.length != 5) {
        game.splash("Must be 5 letters!")
        continue
    }
    
}
