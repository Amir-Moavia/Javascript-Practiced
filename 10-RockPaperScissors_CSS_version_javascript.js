        let resultElement = document.querySelector('.gameResult');
        let BothChoices = document.querySelector('.You_Comp_choice');
        let TotalScore = document.querySelector('.wholeresult');


        let Score = JSON.parse(localStorage.getItem('gameScore')) || {
            wins : 0,
            loses : 0,
            ties : 0
        }
        
        function getComputerMove() {
            const randomNumber = Math.floor(Math.random() * 3) + 1;
            if (randomNumber === 1) return 'Rock';
            if (randomNumber === 2) return 'Paper';
            return 'Scissors';
        }

        let isAutoPlaying = false;
        let intervalId;
        function autoPlay()
        {
            if (!isAutoPlaying) {
                intervalId = setInterval(function () {
                const player_move = getComputerMove();
                playRound(player_move);
                }, 1000);
                isAutoPlaying = true;
            }
            else{
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
           
        }

        
        function playRound(playerMove) {
            const computerMove = getComputerMove();
            let result = '';

            if (playerMove === computerMove) {
                result = 'Tie';
                Score.ties++;
            } else if (
                (playerMove === 'Rock' && computerMove === 'Scissors') ||
                (playerMove === 'Paper' && computerMove === 'Rock') ||
                (playerMove === 'Scissors' && computerMove === 'Paper')
            ) {
                result = 'You win';
                Score.wins++;
            } else {
                result = 'You lose';
                Score.loses++;
            }

            localStorage.setItem('gameScore', JSON.stringify(Score));

             
            // alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. Result : ${result} \n 
            // Wins: ${Score.wins}, Losses: ${Score.loses}, Ties: ${Score.ties}`); 
            
            resultElement.innerHTML = `${result}`;
            BothChoices.innerHTML = `You <img src="${playerMove}-emoji.png" alt="" class = "player_move_img">
                                    <img src="${computerMove}-emoji.png" alt="" class = "computer_move_img">
                                    Computer`;
            TotalScore.innerHTML = `Wins: ${Score.wins}, Losses: ${Score.loses}, Ties: ${Score.ties}`
        
           
            


        }
        function resetScore()
        {
            let resetgameResultElement = document.querySelector('.gameResult');
               resetgameResultElement.innerHTML = '';

            let resetchoiceElement = document.querySelector('.You_Comp_choice');
            resetchoiceElement.innerHTML = '';

            
            
            Score.wins = 0;
            Score.ties = 0;
            Score.loses = 0;

            let resetwholescore = document.querySelector('.wholeresult');
            resetwholescore.innerHTML = `Wins: ${Score.wins}, Losses: ${Score.loses}, Ties: ${Score.ties}`;
            localStorage.removeItem('gameScore');
            alert('The Score Has Been Reset');
        }