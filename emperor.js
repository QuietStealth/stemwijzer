var question = document.getElementById('question');
var but1 = document.getElementById('but1');
var but2 = document.getElementById('but2');
var but3 = document.getElementById('but3');

var start = document.getElementById('start');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');

var questions = [
	['Quesiton', 'agree', 'do not care', 'disagree', /*answered*/false],
	['Question', 'agree', 'do not care', 'disagree', /*answered*/false]
];
var userChoices = ['',''];
var canidates = []
//var result = 0;

function show(){
	for(var i = 0; i <= questions.length; i++){
		if(questions[i][4] == false){
			question.innerHTML = questions[i][0];
			but1.innerHTML = questions[i][1];
			but2.innerHTML = questions[i][2];
			but3.innerHTML = questions[i][3];

			but1.onclick = function(){
				userChoices[i] = questions[i][1];
				questions[i][4] = true;
				show();
			}
			but2.onclick = function(){
				userChoices[i] = questions[i][2];
				questions[i][4] = true;
				show();
			}

			but3.onclick = function(){
				userChoices[i] = questions[i][3];
				questions[i][4] = true;
				show();
			}
		}
	}
};

function begin(){
	but1.hidden = false;
	but2.hidden = false;
	but3.hidden = false;
	start.hidden = true;

	show();
};