var correct = 0;
var incorrect = 0;
var unanswered = 0;
var i = 0;
var options = [];
var clock = 0;

var quiz = [{
    question: "What is the name of the character that goes missing in the first episode?",
    answers: ['Wyatt', 'Walter', 'Bob'],
    correct: 'Will'
    }, 
    {
    question: "Where did will go when he was abducted?",
    answers: ["The Inside Out", "Underwater", " The Other Side"],
    correct: "The Upside Down."
    },
    {        
    question: "How did Will communicate with his mom from the other side?",
    answers: ['Candles', 'Telepathy', 'Knocking'],
    correct: 'Christmas Lights'  
    },
    {        
    question: "What is the nickname given to the bully's by Jonathan?",
    answers: ["Jerks", "Thick Heads", "Tweedle Dee & Tweedle Dum"],
    correct: "Mouth Breathers"
    }  
];


$(document).ready(function() {
    $('#gameOver').hide();
    $('#start').on('click', startGame);
    $(document).on("click", ".answers", grade);

    function startCLock () {
        
    }

    // function startGame() {
    //     $('#start').off('click', startGame);
    
    //     var timer = 20;
    //     var setTimer = setInterval(decrementTimer, 1000);
    
    //     function decrementTimer() {
    //       $('#timer').text(timer);
    //       timer--;
    //       // console.log(timer);
    
    //       if (timer < 0) {
    //         console.log("timerstop");
    //         clearInterval(setTimer);
    //       }
    //     };
    //     question();
    // };
        function question () {
            // setTimer();
            $('.question').text(quiz[i].question);
            options = quiz[i].answers
            var rand = Math.floor(Math.random() * 3)
            options.splice(rand, 0, quiz[i].correct);
            for (var a = 0; a < options.length; a++) {
                var button = $('<button>')
                button.attr('class', 'answers')
                button.attr('id', a)
                button.attr('value', quiz[i].answers[a])
                button.html(quiz[i].answers[a])
                $('.buttons').append(button);
                // $('.buttons').append('<br> <input type="radio" id="' + 
                // a + '" value ="' + quiz[i].answers[a] + 
                // quiz[i].answers[a] + '<br>');
            };
            
        };
    
        function grade() {
            // $(document).on("click", ".answers", function() {
            var userGuess= $(this).val();
            console.log(userGuess);
            
            if (userGuess == quiz[i].correct){
                correct++
            } else {
                incorrect++
            } 
            i++
            if (i < quiz.length) {
                $('.buttons').empty();
                question();
            } else if (i == quiz.length) {
                // $('#empty').empty();
                // $('.question').text(quiz[i].question);
                $('.quiz').hide();
                $('#score').hide();
                $('#gameOver').show();
            }
            startGame();
        }  
    });