# 3. Function to draw the 5x6 grid on the screen
def draw_board():
    bg = image.create(160, 120)
    bg.fill(15) # Black background
    
    box_size = 16
    gap = 2
    # Center the 5x6 grid on the 160x120 screen
    start_x = (160 - (5 * box_size + 4 * gap)) // 2
    start_y = 6
    
    for row in range(max_guesses):
        for col in range(5):
            x = start_x + col * (box_size + gap)
            y = start_y + row * (box_size + gap)
            
            # If this row has already been guessed
            if row < len(guesses):
                guess_word = guesses[row]
                letter = 'A'
                
                # Check color logic (Green -> Yellow -> Grey)
                box_color = COLOR_GREY
                if letter == secret[col]:
                    box_color = COLOR_GREEN
                elif secret.index_of(letter) != -1:
                    box_color = COLOR_YELLOW
                
                # Draw filled colored tile and white letter
                bg.fill_rect(x, y, box_size, box_size, box_color)
                bg.print(letter, x + 5, y + 4, 1)
            else:
                # Draw empty outline box for future guesses
                bg.draw_rect(x, y, box_size, box_size, COLOR_BORDER)
                
    scene.set_background_image(bg)

start_y = 0
start_x = 0
gap = 0
box_size = 0
bg: Image = None
guesses: List[number] = []
COLOR_BORDER = 0
COLOR_GREY = 0
COLOR_YELLOW = 0
COLOR_GREEN = 0
max_guesses = 0
secret = ""
words = ["APPLE",
    "BRAVE",
    "CRANE",
    "DREAM",
    "EAGLE",
    "FLAME",
    "GRAPE",
    "HOUSE",
    "INPUT",
    "JOKER",
    "KNIFE",
    "LEMON",
    "MOUSE",
    "NIGHT",
    "OCEAN",
    "PIANO",
    "QUEEN",
    "ROBOT",
    "SNAKE",
    "TRAIN",
    "UNDER",
    "VOICE",
    "WATER",
    "YOUTH",
    "ZEBRA"]
# 2. Pick a random secret word
secret = words[randint(0, len(words) - 1)]
max_guesses = 6
# MakeCode Arcade Color Palette IDs:
# 7 = Green, 5 = Yellow, 11 = Dark Grey, 1 = White, 15 = Black
COLOR_GREEN = 7
COLOR_YELLOW = 5
COLOR_GREY = 11
COLOR_BORDER = 13
# 4. Start the game loop
draw_board()
pause(500)
while len(guesses) < max_guesses:
    # Prompt player using MakeCode's built-in on-screen keyboard
    raw_input = game.ask_for_string("Enter 5-letter word:", 5)
    guess = raw_input.to_upper_case()
    # Validate length
    if len(guess) != 5:
        game.splash("Must be 5 letters!")
        continue