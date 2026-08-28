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
                document.querySelector('.autoPlay_button').innerHTML = 'Stop Playing';
                intervalId = setInterval(function () {
                const player_move = getComputerMove();
                playRound(player_move);
                }, 1000);
                isAutoPlaying = true;
            }
            else{
                document.querySelector('.autoPlay_button').innerHTML = 'Auto Play';
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
        
        }

        let autoPlayBtn = document.querySelector('.autoPlay_button');
        autoPlayBtn.addEventListener('click',() => {
           autoPlay();
        });

        document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === 'A') {
            autoPlay();
        }
        });



        
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

        let resetBtn = document.querySelector('.resetscoreBtn');
        const notificationArea = document.querySelector('.para_notification');

       
        function showResetConfirmation() {
            notificationArea.innerHTML = `
                Are You Sure You Want To Reset The Score? 
                <button class="yesBtn">Yes</button>
                <button class="noBtn">No</button>
            `;
        }

       
        resetBtn.addEventListener('click', () => {
            showResetConfirmation();
        });

     
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                showResetConfirmation();
            }
        });

      
        notificationArea.addEventListener('click', (event) => {
          
            if (event.target.classList.contains('yesBtn')) {
                resetScore();
                notificationArea.innerHTML = ''; 
            }
            
          
            if (event.target.classList.contains('noBtn')) {
                notificationArea.innerHTML = '';
            }
        });


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