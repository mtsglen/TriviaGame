var correct = 0;
var incorrect = 0;
var i = 0;
var options = [];
var clock;
var setClock;
var rand;

var quiz = [{
    question: "What is the name of the character that goes missing in the first episode?",
    answers: ['Wyatt', 'Walter', 'Will', 'Bob'],
    correct: 'Will'
    }, 
    {
    question: "Where did will go when he was abducted?",
    answers: ["The Inside Out", "The Upside Down", "Underwater", " The Other Side"],
    correct: "The Upside Down"
    },
    {        
    question: "How did Will communicate with his mom from the other side?",
    answers: ['Candles', 'Telepathy', 'Knocking', 'Christmas Lights'],
    correct: 'Christmas Lights'  
    },
    {        
    question: "What is the nickname given to the bully's by Jonathan?",
    answers: ["Mouth Breathers", "Jerks", "Thick Heads", "Tweedle Dee & Tweedle Dum"],
    correct: "Mouth Breathers"
    },
    {        
    question: "What happens to Eleven when she uses her power?",
    answers:["She goes deaf", "Her ears bleed", "She goes blind", "Her nose bleeds"], 
    correct: "Her nose bleeds"
    },
    {        
    question: "What name do the kids give the monsters?",
    answers: ["Alien", "Monster", "Demogorgon", "Chupacabra"],
    correct: "Demogorgon"
    },
    {        
    question: "Which one of these is not the name of a boy from the group?",
    answers: ["Mike", "Jim", "Dustin", 'Lucas'],
    correct: "Jim"
    },
    {        
    question: "Which game that the boys played inspired the name of the monsters?",
    answers: ["Dugeons and Dragons", "Magicians", "Galaga", "Mystery Mansion"],
    correct: "Dugeons and Dragons"
    },
    {        
    question: "Where is the portal to the Upside Down?",
    answers: ["In the Quary", "In the pond", "In a tree", "In the pool"],
    correct: "In a tree"
    },
    {        
    question: "What is the name of the lab where the monsters escapted from?",
    answers: ["Sunshine Labs", "Hawkins National Lab", "Walker National Labs", "Sunflower Labs"],
    correct: "Hawkins National Lab"
    }  
]

$(document).ready(function() {
    $('#gameOver').hide();
    $('#timer').hide();
    $('.correct').text("Correct: " + correct);
    $('.incorrect').text("Incorrect: " + incorrect);
    $('#start').on('click', startGame);
    $(document).on("click", ".answers", grade);
    $('#Play-Again').on('click', resetGame);

    function startGame() {
        $('#start').off('click');
        decrementTimer();
        setClock = setInterval(decrementTimer, 1000); 
        $('#timer').show();
        clock = 15; 
            
        function decrementTimer(){
            $('#timer').text(clock);
            clock --;
            if (clock == 0) {
                if (i == (quiz.length-1)) {
                    $('.quiz').hide();
                    $('#score').hide();
                    $('.correct').text("Correct: " + correct);
                    $('.incorrect').text("Incorrect: " +incorrect);
                    $('#gameOver').show();
                    $('#timer').hide();
                    clearInterval(setClock);
                } else {
                    incorrect++
                    $('.incorrect').text("Incorrect: " + incorrect);
                    clearInterval(setClock)
                    // startGame();
                    i++
                    $('.buttons').empty();
                    startGame();
                    // question();
                }
            } else if (clock < 0) {
                clearInterval(setClock);
            }
        };
        $('#empty').empty();
        question();
        $('#start').hide();
    };

    function question () {
        // setTimer();
        $('.question').text(quiz[i].question);
// console.log(quiz[i].answers)
//         options = quiz[i].answers;
// console.log(options)
//         rand = Math.floor(Math.random() * 3)
//         options.splice(rand, 0, quiz[i].correct);
       
        for (var a = 0; a < quiz[i].answers.length; a++) {
// console.log(options)
            var button = $('<button>')
            button.attr('class', 'answers')
            button.attr('id', a)
            button.attr('value', quiz[i].answers[a])
            button.html(quiz[i].answers[a])
            $('.buttons').append(button);
        };
        
    };

    function grade() {
        var userGuess= $(this).val();
        console.log(userGuess);
        
        if (userGuess == quiz[i].correct){
            correct++
            $('.correct').text("Correct: " + correct);
        } else {
            incorrect++
            $('.incorrect').text("Incorrect: " + incorrect);
        } 
        console.log(correct);
        console.log(incorrect);
        i++
        if (i < quiz.length) {
            $('.buttons').empty();
            clearInterval(setClock)
            startGame();
        } else if (i == quiz.length) {
            $('.quiz').hide();
            $('#score').hide();
            $('.correct').text("Correct: " + correct);
            $('.incorrect').text("Incorrect: " +incorrect);
            $('#gameOver').show();
            $('#timer').hide();
            clearInterval(setClock);
        }
    }

    function resetGame(){
        correct = 0;
        incorrect = 0;
        i = 0;
        options = [];
        clock = 15;
        $('#gameOver').hide();
        $('.correct').text("Correct: " + correct);
        $('.incorrect').text("Incorrect: " + incorrect);
        $('.buttons').empty();
        $('.quiz').show();
        $('#score').show();
        startGame();
    }

});