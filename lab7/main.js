let play_game = false
let random_number 
let player_guess
let attempt_count = 1

function startGame() {
    play_game = true
       alert('Cейчас компьютер загадает число от 1 до 10, а вам потребуется угадать его с подсказками')
       random_number = Math.floor(Math.random() * 10) +1;
   }
   
   function endOfGame() {
    play_game = false
       attempt_count = 1
   }
   
   function answerChecker(s) {
       return (!isNaN(s))
   }

function guessTheNumberGame () { 

    while (true){
            if  (play_game === false) {
                startGame()
            }  

            while (play_game){
            
                player_guess =  prompt('Введите число от 1 до 10')
                if (answerChecker(player_guess)){
                    if (Number(player_guess) === random_number){
                        alert('Вы выйграли')
                        endOfGame()
                    }

                    else {
                        if (Number(player_guess) > random_number)
                            alert(`Много, номер попытки ${attempt_count}`)
                        if (Number(player_guess) < random_number)
                            alert(`Мало, номер попытки ${attempt_count}`)

                        if ( attempt_count === 5 ){
                            alert('Вы проиграли!!!')
                            endOfGame()
                        }
                        attempt_count++


                    }
                } else {
                    alert('Некорhектные данные')
                }
                
            }

        }
}

guessTheNumberGame()