var correct = 0;
var incorrect = 0;
var unanswered = 0;
var i = 0;
var options = [];
var guess = "";

var quiz = [{
    question: "What is the name of the character that goes missing in the first episode?",
    answers: ['Wyatt', 'Walter', 'Bob'],
    correct: 'Will'
    }, 
    {
    question: "Where did will go when he was abducted?",
    answers: ["The Inside Out", "Underwater", " The Other Side"],
    correct: "The Upside Down."
    }
]

$(document).ready(function() {
    //button to start game and timer
    $('#start').on('click', startGame);

    function startGame() {
        var clock = 10;
        var setClock = setInterval(decrementTimer, 1000);      
        function decrementTimer(){
            $('#timer').text(clock);
            clock --;
            if (clock < 0){
                clearInterval(setClock);
            }
        }
        $('#empty').empty();
        question();
    }
    
    function question () {
        $('.question').text(quiz[i].question);
        options = quiz[i].answers
        var rand = Math.floor(Math.random() * 3)
        options.splice(rand, 0, quiz[i].correct);
        for (var a = 0; a < options.length; a++) {
            $('.buttons').append('<br> <input type="radio" id="' + a + '"> ' + quiz[i].answers[a] + '<br>');
        }
        i++
    }

    function grade() {
        
    }


    
});


            


